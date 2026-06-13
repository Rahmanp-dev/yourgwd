import process from 'process';
import 'dotenv/config';

// Persona config
const PERSONA_NAME = process.env.AGENT_PERSONA_NAME || "Priya";
const COMPANY_NAME = process.env.COMPANY_NAME || "WebSpark Studio";

const rawInput = process.argv[2];

if (!rawInput) {
  console.log(JSON.stringify({ 
    reply: `Hi! Just checking in to see if you got a chance to look at that design. Let me know what you think. - ${PERSONA_NAME}`, 
    status: "Contacted" 
  }));
  process.exit(0);
}

async function run() {
  try {
    const input = JSON.parse(rawInput);
    const { leadName, niche, city, message, previewUrl } = input;
    
    const apiKey = process.env.GEMINI_API_KEY;
    
    // Fallback to heuristic if no API key
    if (!apiKey) {
      const msgLower = message.toLowerCase();
      let reply = "";
      let status = "Replied"; 

      const isStopWord = ['stop', 'don\'t contact', 'dont contact', 'unsubscribe', 'remove me', 'never message'].some(phrase => msgLower.includes(phrase));
      const isObjection = ['not interested', 'already have someone', 'no budget', 'too expensive', 'already have a site', 'already have a website', 'no thanks', 'not looking'].some(phrase => msgLower.includes(phrase));
      const isPricing = ['how much', 'what is the cost', 'what is the price', 'cost', 'price', 'pricing'].some(phrase => msgLower.includes(phrase));
      const isPositive = ['looks good', 'nice', 'great', 'tell me more', 'interested', 'appointment', 'call', 'schedule', 'talk', 'phone', 'details', 'booking', 'yes'].some(phrase => msgLower.includes(phrase));

      if (isStopWord) {
        status = "Cold";
        reply = "";
      } else if (isObjection) {
        status = "Cold";
        reply = "Totally fair, no worries at all. If anything changes, I'm easy to reach. The preview stays live either way.";
      } else if (isPricing) {
        status = "Replied";
        reply = "Depends on what you need — the basic site is pretty affordable, but I'd rather show you the full thing first. Got 15 mins this week?";
      } else if (isPositive) {
        status = "Hot";
        reply = `Awesome! Glad you like it. What's your main goal right now — more walk-ins, or more enquiries online? I can show you the full concept on a quick 15-minute call. Got time this week?`;
      } else if (msgLower.includes('change') || msgLower.includes('color') || msgLower.includes('edit') || msgLower.includes('text')) {
        status = "Replied";
        reply = `Yes, definitely! We can adjust the design, colours, and all the content before the final build. Would you be open to a quick 15-minute chat to tailor it for your clinic?`;
      } else {
        reply = `Hi! I created that preview layout after looking at local business details in ${city}. Just wanted to show what's possible to help stand out online. Let me know if you want to make any quick tweaks to it! - ${PERSONA_NAME}`;
      }
      
      console.log(JSON.stringify({ reply, status }));
      return;
    }

    // Call Real Gemini API
    const systemPrompt = `You are ${PERSONA_NAME}, a friendly and conversational sales agent at ${COMPANY_NAME}. 
You reached out to a lead named ${leadName} (a ${niche} business in ${city}) and sent them a custom website preview: ${previewUrl}.
They just replied: "${message}".

Your goal is to reply naturally via WhatsApp (keep it under 200 characters, no emojis, sound like a human, don't use typical corporate jargon).
If they ask for pricing, don't give a number, suggest a 15 min call.
If they are completely uninterested or say stop, gracefully let them go.

You must respond with a JSON object in this format exactly:
{
  "reply": "Your message here (empty if they said stop)",
  "status": "One of these exact strings based on their sentiment: Hot (very positive/wants call), Cold (not interested/stop), Replied (neutral/questions)"
}`;

    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: systemPrompt }]
        }],
        generationConfig: {
          responseMimeType: "application/json"
        }
      })
    });

    if (!res.ok) {
      throw new Error("Gemini API error: " + res.statusText);
    }

    const data = await res.json();
    const textOutput = data.candidates[0].content.parts[0].text;
    const resultObj = JSON.parse(textOutput);
    
    // Ensure valid status
    if (!["Hot", "Cold", "Replied"].includes(resultObj.status)) {
      resultObj.status = "Replied";
    }

    console.log(JSON.stringify(resultObj));
    
  } catch (e) {
    console.error("Error running AI handler:", e);
    console.log(JSON.stringify({ 
      reply: "Thanks for writing back! Let me check on that for you.", 
      status: "Replied" 
    }));
  }
}

run();
