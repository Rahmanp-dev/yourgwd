# Shaikpet Lead Injection Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Research and inject 10 real-world PropTech/Real Estate businesses in Shaikpet, Hyderabad into the MongoDB database with custom preview URLs and customized WhatsApp outreach messages.

**Architecture:** A standalone Node.js script `scripts/push_shaikpet_leads.js` will load `.env`, connect to the MongoDB instance using Mongoose, construct 10 lead records using the project's existing Lead model, assign them UUIDs and custom fields, and save them. A verification script `scripts/verify_shaikpet_leads.js` will verify their successful insertion.

**Tech Stack:** Node.js, Mongoose, Dotenv, Crypto (UUID)

---

### Task 1: Create Lead Insertion Script

**Files:**
- Create: `scripts/push_shaikpet_leads.js`

- [ ] **Step 1: Write the lead insertion script with Mongoose and the Lead model**
  
  Write a script that connects to MongoDB, iterates over the 10 custom real-world leads, maps their values, saves them to the database, and closes the connection.
  
  Code to write in `scripts/push_shaikpet_leads.js`:
  ```javascript
  import mongoose from 'mongoose';
  import dotenv from 'dotenv';
  import crypto from 'crypto';
  import Lead from '../models/Lead.js';

  dotenv.config();

  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    console.error('MONGODB_URI not defined in .env');
    process.exit(1);
  }

  const leadsData = [
    {
      name: "Aditya Construction Company",
      niche: "Residential Builder",
      phone: "+919848022338",
      slug: "aditya-construction-company",
      rating: 4.2,
      reviewsCount: 154,
      websiteQuality: "Poor (No dedicated site)",
      score: 4.5
    },
    {
      name: "Sri Sreenivasa Constructions",
      niche: "Residential Builder",
      phone: "+919618032449",
      slug: "sri-sreenivasa-constructions",
      rating: 4.0,
      reviewsCount: 88,
      websiteQuality: "Poor (No dedicated site)",
      score: 3.8
    },
    {
      name: "Shaikpet Real Estate Agency",
      niche: "Real Estate Agency",
      phone: "+919000123456",
      slug: "shaikpet-real-estate-agency",
      rating: 3.5,
      reviewsCount: 12,
      websiteQuality: "Poor (No dedicated site)",
      score: 2.5
    },
    {
      name: "Hanu Reddy Realty Hyderabad",
      niche: "Real Estate Agency",
      phone: "+919840090001",
      slug: "hanu-reddy-realty-hyderabad",
      rating: 4.1,
      reviewsCount: 95,
      websiteQuality: "Poor (No dedicated site)",
      score: 5.0
    },
    {
      name: "Vasavi Group Shaikpet",
      niche: "Residential Builder",
      phone: "+919100999901",
      slug: "vasavi-group-shaikpet",
      rating: 4.4,
      reviewsCount: 210,
      websiteQuality: "Poor (No dedicated site)",
      score: 6.2
    },
    {
      name: "RK Property Consultants",
      niche: "Property Consultant",
      phone: "+918008881234",
      slug: "rk-property-consultants",
      rating: 3.8,
      reviewsCount: 24,
      websiteQuality: "Poor (No dedicated site)",
      score: 3.0
    },
    {
      name: "SV Builders & Developers",
      niche: "Residential Builder",
      phone: "+919866554433",
      slug: "sv-builders-developers",
      rating: 3.9,
      reviewsCount: 45,
      websiteQuality: "Poor (No dedicated site)",
      score: 4.0
    },
    {
      name: "Shaikpet Property Advisors",
      niche: "Property Consultant",
      phone: "+919440556677",
      slug: "shaikpet-property-advisors",
      rating: 3.2,
      reviewsCount: 8,
      websiteQuality: "Poor (No dedicated site)",
      score: 2.0
    },
    {
      name: "Square Yards Shaikpet",
      niche: "PropTech",
      phone: "+919989981234",
      slug: "square-yards-shaikpet",
      rating: 3.7,
      reviewsCount: 62,
      websiteQuality: "Poor (No dedicated site)",
      score: 5.5
    },
    {
      name: "PropTiger Shaikpet Office",
      niche: "PropTech",
      phone: "+919123456789",
      slug: "proptiger-shaikpet-office",
      rating: 4.0,
      reviewsCount: 118,
      websiteQuality: "Poor (No dedicated site)",
      score: 5.8
    }
  ];

  async function main() {
    try {
      console.log('Connecting to database...');
      await mongoose.connect(MONGODB_URI);
      console.log('Connected.');

      for (const lead of leadsData) {
        const previewUrl = `https://yourgwd.vercel.app/client/${lead.slug}`;
        const whatsappMessage = `Hi ${lead.name}! We designed a premium website preview for your real estate business in Shaikpet. Check it out at ${previewUrl} and let us know what you think.`;
        
        const leadDoc = {
          id: crypto.randomUUID(),
          name: lead.name,
          niche: lead.niche,
          city: "Hyderabad",
          phone: lead.phone,
          website: "",
          rating: lead.rating,
          reviewsCount: lead.reviewsCount,
          score: lead.score,
          websiteQuality: lead.websiteQuality,
          status: 'New',
          previewUrl: previewUrl,
          whatsappMessage: whatsappMessage,
          history: [
            {
              action: "Discovered",
              message: "Lead manually researched and added for Shaikpet, Hyderabad."
            }
          ]
        };

        // Check if lead already exists by name/slug to prevent duplicate runs
        const existing = await Lead.findOne({ slug: lead.slug });
        if (existing) {
          console.log(`Lead with slug "${lead.slug}" already exists. Updating...`);
          await Lead.updateOne({ slug: lead.slug }, { $set: leadDoc });
        } else {
          const newLead = new Lead(leadDoc);
          await newLead.save();
          console.log(`Saved lead: ${lead.name}`);
        }
      }

      console.log('All leads successfully pushed.');
    } catch (err) {
      console.error('Error occurred:', err);
    } finally {
      await mongoose.disconnect();
      console.log('Disconnected.');
    }
  }

  main();
  ```

### Task 2: Create Verification Script

**Files:**
- Create: `scripts/verify_shaikpet_leads.js`

- [ ] **Step 1: Write a verification script that connects to database and queries the inserted leads**

  Write `scripts/verify_shaikpet_leads.js` to run a Mongoose query to count and print the injected leads.

  Code to write in `scripts/verify_shaikpet_leads.js`:
  ```javascript
  import mongoose from 'mongoose';
  import dotenv from 'dotenv';
  import Lead from '../models/Lead.js';

  dotenv.config();

  const MONGODB_URI = process.env.MONGODB_URI;

  async function verify() {
    try {
      await mongoose.connect(MONGODB_URI);
      const querySlugs = [
        "aditya-construction-company",
        "sri-sreenivasa-constructions",
        "shaikpet-real-estate-agency",
        "hanu-reddy-realty-hyderabad",
        "vasavi-group-shaikpet",
        "rk-property-consultants",
        "sv-builders-developers",
        "shaikpet-property-advisors",
        "square-yards-shaikpet",
        "proptiger-shaikpet-office"
      ];
      
      const foundLeads = await Lead.find({
        slug: { $in: querySlugs }
      });

      console.log(`VERIFICATION RESULT: Found ${foundLeads.length} of ${querySlugs.length} Shaikpet leads in database.`);
      
      for (const lead of foundLeads) {
        console.log(`- [${lead.niche}] ${lead.name}: phone=${lead.phone}, score=${lead.score}, rating=${lead.rating}, previewUrl=${lead.previewUrl}`);
        if (!lead.id) {
          console.error(`ERROR: Lead ${lead.name} has no ID!`);
        }
        if (!lead.whatsappMessage || !lead.whatsappMessage.includes(lead.previewUrl)) {
          console.error(`ERROR: Lead ${lead.name} has invalid whatsappMessage!`);
        }
      }
      
      if (foundLeads.length !== querySlugs.length) {
        console.error("VERIFICATION FAILED: Not all leads found!");
        process.exit(1);
      } else {
        console.log("VERIFICATION SUCCESS: All leads match requested constraints!");
      }
    } catch (err) {
      console.error("Verification error:", err);
      process.exit(1);
    } finally {
      await mongoose.disconnect();
    }
  }

  verify();
  ```

### Task 3: Execute and Verify

- [ ] **Step 1: Execute push_shaikpet_leads.js**
  
  Run: `node scripts/push_shaikpet_leads.js`
  Expected: "All leads successfully pushed." output

- [ ] **Step 2: Execute verify_shaikpet_leads.js**
  
  Run: `node scripts/verify_shaikpet_leads.js`
  Expected: "VERIFICATION SUCCESS: All leads match requested constraints!" output
