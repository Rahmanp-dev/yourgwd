import { execSync, execFileSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const crmPath = path.resolve(__dirname, 'crm_data.json');

console.log("==================================================");
console.log("🚨 STARTING REFACTORED PIPELINE VERIFICATION SUITE 🚨");
console.log("==================================================");

try {
  // Test 1: Lead Finder
  console.log("\n🧪 Test 1/5: Running Lead Finder (dental clinics, Hyderabad)...");
  execSync('node agents/lead_finder.js "dental clinics" "Hyderabad"', { stdio: 'inherit' });
  
  // Verify Leads added to JSON CRM correctly
  const leads = JSON.parse(fs.readFileSync(crmPath, 'utf8'));
  const Srinivas = leads.find(l => l.name === "Srinivasa Dental Hospital");
  const Elite = leads.find(l => l.name === "Elite Dental Care & Ortho");
  
  if (!Srinivas) throw new Error("Srinivasa Dental Hospital not added to CRM!");
  if (Srinivas.id.substring(0, 5) !== "LEAD-") throw new Error(`Incorrect ID format generated: ${Srinivas.id}`);
  
  // Srinivasa has no website (score 2.0 <= 7), Elite has modern website (score 9.0 >= 8)
  if (Srinivas.score !== 2.0) throw new Error(`Incorrect score parsed for Srinivasa: ${Srinivas.score}`);
  if (Elite) throw new Error("Elite Dental Care has score 9.0 (>= 8) but was incorrectly added to CRM!");
  
  console.log("✅ Test 1/5: Lead Finder PASS. Inverted scoring and LEAD-xxx increments qualified.");

  // Test 2: Preview Builder
  console.log("\n🧪 Test 2/5: Running Website Preview Builder...");
  execSync('node agents/preview_builder.js', { stdio: 'inherit' });
  
  // Verify preview files exist and status set to "Ready to Contact"
  const updatedLeads = JSON.parse(fs.readFileSync(crmPath, 'utf8'));
  const newlyCreated = updatedLeads.find(l => l.name === "Srinivasa Dental Hospital");
  
  if (!newlyCreated.previewUrl) throw new Error("Website preview path not updated for Srinivasa!");
  if (newlyCreated.status !== "Ready to Contact") throw new Error(`Expected status 'Ready to Contact', got: ${newlyCreated.status}`);
  
  const previews = fs.readdirSync(path.join(__dirname, 'previews'));
  console.log(`[Verify] Staged preview sites: ${previews.join(', ')}`);
  
  // Verify ribbon styled banner exists in built files
  const htmlContent = fs.readFileSync(path.join(__dirname, 'previews', 'srinivasa-dental-hospital', 'index.html'), 'utf8');
  if (!htmlContent.includes("free preview website built for Srinivasa Dental Hospital")) {
    throw new Error("Preview website missing top banner ribbon!");
  }
  
  console.log("✅ Test 2/5: Preview Builder PASS.");

  // Test 3: WhatsApp Outreach
  console.log("\n🧪 Test 3/5: Running WhatsApp Outreach Agent...");
  execSync('node agents/whatsapp_outreach.js', { stdio: 'inherit' });
  
  // Verify Status updated to Contacted and follow-up assigned
  const postOutreachLeads = JSON.parse(fs.readFileSync(crmPath, 'utf8'));
  const contactedLead = postOutreachLeads.find(l => l.name === "Srinivasa Dental Hospital");
  
  if (contactedLead.status !== "Contacted") throw new Error(`Expected status 'Contacted', got: ${contactedLead.status}`);
  if (!contactedLead.assignedFollowUpDate) throw new Error("Assigned follow-up date missing!");
  
  console.log("✅ Test 3/5: WhatsApp Outreach PASS.");

  // Test 4: Conversation Handler
  console.log("\n🧪 Test 4/5: Running Conversation Handler Objection & Pricing checks...");
  
  // Test Pricing objection response
  const pricePayload = JSON.stringify({
    leadName: "Srinivasa Dental Hospital",
    niche: "dental clinics",
    city: "Hyderabad",
    message: "how much is this going to cost me?",
    previewUrl: "/previews/srinivasa-dental-hospital"
  });
  
  const priceReply = execFileSync('node', ['agents/conversation_handler.js', pricePayload], { encoding: 'utf-8' });
  const parsedPrice = JSON.parse(priceReply.trim());
  console.log(`[Verify] Pricing Response: "${parsedPrice.reply}"`);
  if (!parsedPrice.reply.includes("Depends on what you need — the basic site is pretty affordable")) {
    throw new Error("Pricing query response template does not match specification!");
  }
  
  // Test Stop/Opt-out response
  const stopPayload = JSON.stringify({
    leadName: "Srinivasa Dental Hospital",
    niche: "dental clinics",
    city: "Hyderabad",
    message: "no thanks, already have someone looking at our marketing",
    previewUrl: "/previews/srinivasa-dental-hospital"
  });
  const stopReply = execFileSync('node', ['agents/conversation_handler.js', stopPayload], { encoding: 'utf-8' });
  const parsedStop = JSON.parse(stopReply.trim());
  console.log(`[Verify] Objection Response: "${parsedStop.reply}"`);
  if (parsedStop.status !== 'Cold' || !parsedStop.reply.includes("Totally fair, no worries at all")) {
    throw new Error("Objection response template or status mapping failed!");
  }
  
  console.log("✅ Test 4/5: Conversation Handler PASS.");

  // Test 5: Pipeline Manager
  console.log("\n🧪 Test 5/5: Running Pipeline Manager report generator...");
  execSync('node agents/pipeline_manager.js', { stdio: 'inherit' });
  
  const reportPath = path.join(__dirname, 'weekly_report.md');
  if (!fs.existsSync(reportPath)) throw new Error("Pipeline report weekly_report.md not created!");
  
  const reportText = fs.readFileSync(reportPath, 'utf8');
  if (!reportText.includes("SALES MACHINE — WEEK OF")) {
    throw new Error("Report missing correct SALES MACHINE visual headers!");
  }
  
  console.log("✅ Test 5/5: Pipeline Manager PASS.");

  console.log("\n==================================================");
  console.log("🎉 REFACTORED PIPELINE VERIFIED SUCCESSFULLY! 🎉");
  console.log("==================================================");
} catch (error) {
  console.error("\n❌ VERIFICATION SUITE FAILED:", error.message);
  process.exit(1);
}
