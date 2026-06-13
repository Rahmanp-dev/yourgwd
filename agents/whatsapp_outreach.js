import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const crmPath = path.resolve(__dirname, '../crm_data.json');

// Helper to read CRM data
const readCRM = () => {
  if (!fs.existsSync(crmPath)) return [];
  return JSON.parse(fs.readFileSync(crmPath, 'utf8'));
};

// Helper to write CRM data
const writeCRM = (data) => {
  fs.writeFileSync(crmPath, JSON.stringify(data, null, 2));
};

async function run() {
  console.log("[WhatsApp Outreach] Initiating outreach agent...");

  const leads = readCRM();

  // Pull all rows where Status = "Ready to Contact"
  const queue = leads.filter(l => l.status === "Ready to Contact");

  if (queue.length === 0) {
    console.log("[WhatsApp Outreach] No leads with status 'Ready to Contact' in CRM. Job complete.");
    process.exit(0);
  }

  const token = process.env.WHATSAPP_TOKEN;
  const phoneId = process.env.WHATSAPP_PHONE_NUMBER_ID;

  if (!token || !phoneId) {
    console.log(`[WhatsApp Outreach] ERROR: WHATSAPP_TOKEN or WHATSAPP_PHONE_NUMBER_ID is missing. Please configure them in the Settings Panel.`);
    process.exit(1);
  }

  // Sort by Website Score ascending (worst digital presence first, e.g. 2.0 before 4.5)
  queue.sort((a, b) => a.score - b.score);

  // Limit: Max 10 outreach messages per day
  const dailyLimit = parseInt(process.env.DAILY_LEAD_LIMIT) || 10;
  const targetLeads = queue.slice(0, dailyLimit);

  console.log(`[WhatsApp Outreach] Processing outreach queue (length: ${queue.length}, limit: ${dailyLimit})...`);

  let contactedCount = 0;

  for (const lead of targetLeads) {
    const shortName = lead.name.replace(/Care|Hospital|Bistro|Services|Centre|Clinic|Center/g, '').trim();
    const previewLink = `http://localhost:5000${lead.previewUrl}`;
    
    let line1 = "";
    let line3 = "No pressure, just wanted to show you what's possible.";
    
    if (!lead.website) {
      line1 = `Hi, saw ${shortName} on Maps — ${lead.city}'s hidden gem honestly. Built a quick idea:`;
    } else {
      line1 = `Hey, checked out ${shortName}'s site — your work looks great but the site doesn't do it justice. Made a concept:`;
    }
    
    const fullMessage = `${line1}\n${previewLink}\n${line3}`;
    
    // Enforce under 200 characters validation warning (excluding the URL itself)
    const textCharsLength = (line1 + line3).length;
    console.log(`\n[WhatsApp Outreach] Drafting message to "${lead.name}" (${lead.phone}) [Text chars: ${textCharsLength}]`);
    
    console.log(`[WhatsApp Outreach] Sending WhatsApp message to ${lead.phone}...`);
    
    // Clean phone number (remove non-digits)
    const cleanPhone = lead.phone.replace(/\D/g, '');

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
            preview_url: true,
            body: fullMessage
          }
        })
      });

      const data = await response.json();

      if (!response.ok) {
        console.error(`[WhatsApp Outreach] ERROR sending to ${cleanPhone}:`, data.error?.message || response.statusText);
        // Continue to next lead instead of throwing so we don't break the whole batch
        continue;
      }
      
      console.log(`[WhatsApp Outreach] Status: Message delivered successfully. ID: ${data.messages?.[0]?.id}`);
      
      // Calculate Assigned Follow-up Date (3 days from now)
      const followUpDate = new Date();
      followUpDate.setDate(followUpDate.getDate() + 3);
      
      // Update CRM Row
      lead.status = "Contacted";
      lead.lastContactDate = new Date().toISOString();
      lead.assignedFollowUpDate = followUpDate.toISOString();
      lead.notes = `${lead.notes || ''} First outreach sent via API. Follow-up scheduled.`.trim();
      
      lead.history.push({
        timestamp: new Date().toISOString(),
        action: "Contacted",
        message: `Outreach message sent via WhatsApp API: "${fullMessage}"`
      });
      
      contactedCount++;
    } catch (error) {
      console.error(`[WhatsApp Outreach] Exception sending to ${cleanPhone}:`, error.message);
    }
  }

  writeCRM(leads);
  console.log(`\n[WhatsApp Outreach] OUTREACH complete: ${contactedCount} messages sent today. Follow-up scheduled.`);
}

run();
