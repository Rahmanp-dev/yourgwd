import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const crmPath = path.resolve(__dirname, '../crm_data.json');
const reportPath = path.resolve(__dirname, '../weekly_report.md');

// Helper to read CRM data
const readCRM = () => {
  if (!fs.existsSync(crmPath)) return [];
  return JSON.parse(fs.readFileSync(crmPath, 'utf8'));
};

async function run() {
  console.log("[Pipeline Manager] Compiling weekly report digest...");

  const leads = readCRM();
  const total = leads.length;

  // Stats calculation
  const newLeadsThisWeek = leads.filter(l => l.status === 'New').length;
  const contacted = leads.filter(l => l.status === 'Contacted').length;
  const replied = leads.filter(l => l.status === 'Replied').length;
  const hot = leads.filter(l => l.status === 'Hot').length;
  const callBooked = leads.filter(l => l.status === 'Call Booked').length;
  const closed = leads.filter(l => l.status === 'Closed').length;
  const cold = leads.filter(l => l.status === 'Cold').length;

  // Total sent = anything that is not "New"
  const totalMessagesSent = leads.filter(l => l.status !== 'New').length;
  // Total replies = Replied + Hot + Call Booked + Closed + Cold (if they replied)
  const totalReplies = leads.filter(l => ['Replied', 'Hot', 'Call Booked', 'Closed'].includes(l.status)).length;
  const replyRate = totalMessagesSent > 0 ? ((totalReplies / totalMessagesSent) * 100).toFixed(0) : 0;

  // Parse revenue from notes
  let totalRevenue = 0;
  leads.forEach(l => {
    if (l.notes) {
      const match = l.notes.match(/Value:\s*\$?(\d+)/i) || l.notes.match(/\$(\d+)/);
      if (match) {
        totalRevenue += parseInt(match[1]);
      }
    }
  });

  // Stale calculations
  const urgentFollowups = [];
  const fortyEightHoursAgo = Date.now() - (48 * 60 * 60 * 1000);

  leads.forEach(l => {
    if (l.status === 'Hot') {
      const lastEvent = l.history[l.history.length - 1];
      const lastTime = new Date(lastEvent.timestamp).getTime();
      if (lastTime < fortyEightHoursAgo) {
        urgentFollowups.push({
          name: l.name,
          daysStale: Math.round((Date.now() - lastTime) / (24 * 60 * 60 * 1000))
        });
      }
    }
  });

  // Top 3 Leads (sort by rating descending or score descending)
  const topLeads = [...leads]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  // Going Cold (Replied status with no movement in 5+ days)
  const goingCold = [];
  const fiveDaysAgo = Date.now() - (5 * 24 * 60 * 60 * 1000);

  leads.forEach(l => {
    if (l.status === 'Replied') {
      const lastEvent = l.history[l.history.length - 1];
      const lastTime = new Date(lastEvent.timestamp).getTime();
      if (lastTime < fiveDaysAgo) {
        goingCold.push(l.name);
      }
    }
  });

  const formattedDate = new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });

  const reportContent = `─────────────────────────────────────
SALES MACHINE — WEEK OF ${formattedDate}
─────────────────────────────────────
New leads added this week:     ${newLeadsThisWeek}
Messages sent:                 ${totalMessagesSent}
Replies received:              ${totalReplies}  (${replyRate}% reply rate)
Hot leads right now:           ${hot}
Calls booked:                  ${callBooked}
Deals closed:                  ${closed}
Revenue in pipeline:           $${totalRevenue}

⚡ NEEDS YOUR ATTENTION:
${urgentFollowups.length === 0 ? "• All hot leads are active. No stale items flagged." : urgentFollowups.map(u => `• ${u.name} (Hot) - Stale for ${u.daysStale} days!`).join('\n')}

📊 TOP 3 LEADS THIS WEEK:
${topLeads.map((t, idx) => {
    const lastEvent = t.history[t.history.length - 1];
    const snippet = lastEvent ? lastEvent.message : "No history recorded.";
    return `${idx+1}. ${t.name} (${t.city}) - Status: ${t.status}\n   Snippet: "${snippet.length > 60 ? snippet.substring(0,60) + '...' : snippet}"`;
  }).join('\n')}

🧊 GOING COLD (act now or lose them):
${goingCold.length === 0 ? "• No leads going cold." : goingCold.map(name => `• ${name} (Replied) - No response for 5+ days.`).join('\n')}
─────────────────────────────────────
`;

  fs.writeFileSync(reportPath, reportContent);

  console.log(reportContent);
  console.log(`\n[Pipeline Manager] Weekly report saved successfully to ${reportPath}`);

  // Push to WhatsApp
  const token = process.env.WHATSAPP_TOKEN;
  const phoneId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const userPhone = process.env.USER_WHATSAPP_NUMBER;

  if (token && phoneId && userPhone) {
    console.log(`[Pipeline Manager] Sending weekly report via real WhatsApp to ${userPhone}...`);
    const cleanPhone = userPhone.replace(/\D/g, '');
    
    try {
      const response = await fetch(`https://graph.facebook.com/v17.0/${phoneId}/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: cleanPhone,
          type: "text",
          text: {
            body: reportContent
          }
        })
      });

      const data = await response.json();
      if (!response.ok) {
        console.error(`[Pipeline Manager] ERROR sending WhatsApp report:`, data.error?.message || response.statusText);
      } else {
        console.log(`[Pipeline Manager] Report successfully delivered to your WhatsApp. ID: ${data.messages?.[0]?.id}`);
      }
    } catch (err) {
      console.error(`[Pipeline Manager] Exception sending WhatsApp report:`, err.message);
    }
  } else {
    console.log(`[Pipeline Manager] WhatsApp API credentials or USER_WHATSAPP_NUMBER not set. Skipping SMS delivery.`);
  }
}

run();
