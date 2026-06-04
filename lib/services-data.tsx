import React from "react";

export type ServiceFeature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export type ServiceData = {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  videoTitle: string;
  features: ServiceFeature[];
  icon: React.ReactNode;
  heroStat: string;
  heroStatCaption: string;
};

export const servicesData: ServiceData[] = [
  {
    slug: "intelligent-document-processing",
    title: "Intelligent Document Processing",
    category: "Automation",
    shortDesc:
      "Automatically extract data from invoices, receipts, bank statements, and tax forms — eliminating manual data entry and reducing errors by 95%.",
    fullDesc:
      "Eliminate manual data entry for good. Our AI extracts structured data from invoices, receipts, W-2s, 1099s, bank statements, and unstructured PDFs — then automatically posts it to QuickBooks or Xero with 99% accuracy. Exceptions are flagged for human review so nothing slips through.",
    tags: ["OCR", "Claude AI", "OpenAI", "QuickBooks API", "Xero API"],
    videoTitle: "Watch: Invoice Processing in Under 60 Seconds",
    heroStat: "99%",
    heroStatCaption: "extraction accuracy, no template setup",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    features: [
      {
        title: "Multi-Format OCR Extraction",
        description:
          "Processes invoices, receipts, W-2s, 1099s, bank statements, and custom PDFs with 99% extraction accuracy. No template configuration required — the AI adapts to any document layout automatically.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
          </svg>
        ),
      },
      {
        title: "Automatic Posting to QuickBooks & Xero",
        description:
          "Extracted data flows directly into your accounting software, mapped to the correct accounts, vendors, and cost categories — no copy-paste, no manual entry, no rework.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 3 21 3 21 8" /><line x1="4" y1="20" x2="21" y2="3" /><polyline points="21 16 21 21 16 21" /><line x1="15" y1="15" x2="21" y2="21" />
          </svg>
        ),
      },
      {
        title: "Exception Handling & Review Queue",
        description:
          "Low-confidence extractions are automatically flagged and routed to a clean approval UI. Your team reviews only the edge cases — spending minutes instead of hours on data entry.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        ),
      },
      {
        title: "Batch Processing at Scale",
        description:
          "Upload hundreds of documents at once. The pipeline processes them in parallel and delivers results in minutes — handling your busiest month-end volumes without breaking a sweat.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        ),
      },
      {
        title: "Audit Trail & Compliance Logging",
        description:
          "Every extraction is logged with the source document, confidence score, extracted values, and timestamps. Full audit history available on demand — ready for client review or regulatory compliance.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
          </svg>
        ),
      },
      {
        title: "Custom Field Mapping",
        description:
          "Define custom extraction fields tailored to your firm's chart of accounts, client codes, and document types. The model learns your preferences over time and improves with every correction.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" />
          </svg>
        ),
      },
    ],
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    category: "Automation",
    shortDesc:
      "Automate routine tasks: client onboarding, month-end close checklists, approval workflows, and reconciliation processes that waste hours every week.",
    fullDesc:
      "Stop running your practice on spreadsheets and sticky notes. We automate the repetitive orchestration work — client onboarding sequences, month-end close checklists, approval routing, reconciliation alerts, and deadline tracking — so your team focuses on the work that actually requires their expertise.",
    tags: ["n8n", "Make", "Zapier", "Python", "Practice APIs"],
    videoTitle: "Watch: Month-End Close Workflow Demo",
    heroStat: "0",
    heroStatCaption: "missed deadlines — every task tracked & escalated",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    features: [
      {
        title: "Client Onboarding Automation",
        description:
          "Trigger engagement letters, intake forms, welcome emails, and portal setup automatically when a new client is added — ensuring every client gets a consistent, professional first experience.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
          </svg>
        ),
      },
      {
        title: "Month-End Close Checklists",
        description:
          "Auto-generated task lists with assigned owners, due dates, and real-time completion tracking — synced to your practice management system and escalating automatically when tasks are overdue.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
          </svg>
        ),
      },
      {
        title: "Approval Routing",
        description:
          "Route transactions, reports, and client communications for approval based on dollar thresholds, client tier, or custom business rules — with email and Slack notifications at each stage.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><path d="M13 6h3a2 2 0 012 2v7" /><line x1="6" y1="9" x2="6" y2="21" />
          </svg>
        ),
      },
      {
        title: "Reconciliation Alerts",
        description:
          "Get notified instantly when accounts fail to reconcile or balances fall outside expected ranges — catching discrepancies before your clients ever notice them.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8h1a4 4 0 010 8h-1" /><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
          </svg>
        ),
      },
      {
        title: "Deadline Tracking & Reminders",
        description:
          "Never miss a filing deadline. Automated reminders are sent to clients and staff, with escalation to managers when tasks remain incomplete as deadlines approach.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
          </svg>
        ),
      },
      {
        title: "Email & Calendar Integration",
        description:
          "Connect Gmail, Outlook, and Google Calendar so workflows trigger from inbound emails, schedule meetings automatically, and send calendar invites as part of any automation.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        ),
      },
    ],
  },
  {
    slug: "ai-client-assistants",
    title: "AI Client Assistants",
    category: "Client Experience",
    shortDesc:
      "Deploy smart chatbots that answer client questions 24/7, schedule appointments, and handle routine inquiries — freeing your team for high-value work.",
    fullDesc:
      "Your clients expect fast, accurate answers — but answering the same tax questions and invoice inquiries consumes hours your team could spend on advisory work. We deploy AI assistants trained on your firm's knowledge base that handle routine client communications 24/7, escalating to your team only when human judgment is genuinely needed.",
    tags: ["Claude", "GPT-4", "RAG", "Vector Databases"],
    videoTitle: "Watch: AI Client Assistant Live Demo",
    heroStat: "24/7",
    heroStatCaption: "answering, scheduling & escalating only the hard ones",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    features: [
      {
        title: "24/7 Client Q&A",
        description:
          "Answer tax questions, explain invoice line items, clarify deadlines, and provide account status updates around the clock — without your team lifting a finger.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
          </svg>
        ),
      },
      {
        title: "Knowledge Base Training",
        description:
          "Train the assistant on your firm's specific policies, fee schedules, service offerings, FAQs, and engagement templates. It speaks in your firm's voice and reflects your actual practices.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
          </svg>
        ),
      },
      {
        title: "Appointment Scheduling",
        description:
          "Let clients book calls, consultations, or document drop-off slots directly through the chatbot — synced to your calendar with confirmation emails sent automatically.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        ),
      },
      {
        title: "Invoice & Statement Explanations",
        description:
          "Clients can ask about specific charges, payment terms, or service descriptions and receive plain-language explanations instantly — reducing billing disputes and support calls.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
          </svg>
        ),
      },
      {
        title: "Escalation to Human Staff",
        description:
          "When a question requires human judgment or a sensitive topic arises, the assistant hands off seamlessly to your team — with the full conversation context attached so staff never need to ask the client to repeat themselves.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="17 11 21 7 17 3" /><line x1="21" y1="7" x2="9" y2="7" /><polyline points="7 21 3 17 7 13" /><line x1="15" y1="17" x2="3" y2="17" />
          </svg>
        ),
      },
      {
        title: "Multi-Channel Deployment",
        description:
          "Deploy on your website, client portal, email, or SMS — wherever your clients prefer to engage. One knowledge base, consistent answers, across every channel.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
          </svg>
        ),
      },
    ],
  },
  {
    slug: "tax-research-compliance-ai",
    title: "Tax Research & Compliance AI",
    category: "Research",
    shortDesc:
      "Get instant answers to complex tax questions with AI trained on IRS publications, state regulations, and case law — with source citations.",
    fullDesc:
      "Tax research that used to take hours now takes seconds. Our AI searches IRS codes, revenue rulings, court cases, state regulations, and technical advisories — returning cited answers with confidence scores so you can verify every response. Built for the nuance and accuracy that accounting professionals demand.",
    tags: ["LangChain", "OpenAI", "Custom Tax DBs", "RAG"],
    videoTitle: "Watch: Complex Tax Research Query Demo",
    heroStat: "seconds",
    heroStatCaption: "not hours — with citations & confidence scores",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    features: [
      {
        title: "IRS Publication Search",
        description:
          "Instantly search across IRS codes, regulations, revenue rulings, private letter rulings, and technical guides using plain English queries — no need to know the exact publication number.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        ),
      },
      {
        title: "State & Local Tax Coverage",
        description:
          "Comprehensive, regularly updated coverage of state income tax, sales tax, nexus rules, and local ordinances across all 50 states — with multi-state comparison views for complex situations.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="3 11 22 2 13 21 11 13 3 11" />
          </svg>
        ),
      },
      {
        title: "Cited Source Responses",
        description:
          "Every answer includes direct citations to primary sources — IRS publications, court decisions, and statutory references — so you can verify accuracy and use responses directly in client memos.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" />
          </svg>
        ),
      },
      {
        title: "Confidence Scoring",
        description:
          "Each response includes a confidence rating and explicitly flags areas of legal ambiguity or conflicting guidance — so you always know when to apply additional professional judgment.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        ),
      },
      {
        title: "Research History & Export",
        description:
          "All research sessions are saved, searchable, and exportable to PDF or Word for client memos, engagement files, or audit documentation — with timestamps and researcher attribution.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        ),
      },
      {
        title: "Custom Knowledge Base Integration",
        description:
          "Supplement public tax law with your firm's internal memos, client-specific rulings, prior research, and proprietary guidance. The AI learns what your firm already knows.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        ),
      },
    ],
  },
  {
    slug: "custom-integrations",
    title: "Custom Integrations",
    category: "Infrastructure",
    shortDesc:
      "Connect your practice management software, QuickBooks, Xero, Excel, and email into one seamless AI-powered workflow.",
    fullDesc:
      "Fragmented tools create fragmented workflows. We connect your entire tech stack — QuickBooks, Xero, Bill.com, Gusto, Excel, Gmail, Slack, SharePoint — into one coherent, AI-powered system. When off-the-shelf connectors don't cut it, we build custom APIs and middleware tailored exactly to your requirements.",
    tags: ["FastAPI", "Node.js", "OAuth", "Webhooks", "Cloud"],
    videoTitle: "Watch: Multi-System Integration Walkthrough",
    heroStat: "8+",
    heroStatCaption: "tools unified into a single workflow",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
      </svg>
    ),
    features: [
      {
        title: "QuickBooks & Xero Connectors",
        description:
          "Deep two-way sync with QuickBooks Online, QuickBooks Desktop, and Xero — including custom fields, multi-entity support, class tracking, and real-time balance updates.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
          </svg>
        ),
      },
      {
        title: "Bill.com & Gusto Integration",
        description:
          "Connect AP/AR workflows and payroll data for a fully automated financial operations stack — eliminating double entry between your accounting and operational systems.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" />
          </svg>
        ),
      },
      {
        title: "Secure OAuth Authentication",
        description:
          "Enterprise-grade OAuth 2.0 authentication with automatic token refresh, scoped permissions, and full audit logging — ensuring your client data stays secure across every connection.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
        ),
      },
      {
        title: "Webhook Event Processing",
        description:
          "Real-time, event-driven integrations that react instantly to changes in your software without polling — ensuring data stays synchronized the moment anything changes, anywhere in your stack.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        ),
      },
      {
        title: "Email & Slack Notifications",
        description:
          "Route alerts, approval requests, and workflow summaries to Gmail, Outlook, or Slack channels based on configurable business rules — keeping your team informed without checking multiple dashboards.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>
        ),
      },
      {
        title: "Custom API Development",
        description:
          "When off-the-shelf connectors don't exist, we build custom REST APIs, GraphQL endpoints, and middleware tailored to your exact data models and business logic.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
          </svg>
        ),
      },
    ],
  },
  {
    slug: "practice-growth-strategy",
    title: "Practice Growth Strategy",
    category: "Consulting",
    shortDesc:
      "Our consultants analyze your operations, identify automation opportunities, and deliver a clear roadmap with ROI projections for each initiative.",
    fullDesc:
      "Not sure where AI can actually move the needle for your practice? We start with a structured audit of your workflows, time allocation, and technology stack — then deliver a prioritized automation roadmap backed by real cost-benefit modeling. You leave knowing exactly what to build, in what order, and what return to expect.",
    tags: ["Process Mapping", "ROI Modeling", "Workshops"],
    videoTitle: "Watch: Strategy Engagement Overview",
    heroStat: "ROI",
    heroStatCaption: "modeled on every initiative before you build",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    features: [
      {
        title: "Workflow Audit & Process Mapping",
        description:
          "A structured analysis of how your team actually spends its time — broken down by task type, frequency, and effort — revealing exactly where automation creates the most leverage.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
          </svg>
        ),
      },
      {
        title: "ROI Modeling",
        description:
          "Quantified cost-benefit analysis for each recommended initiative — hours saved, error reduction, headcount avoided, and revenue unlocked — so you invest with confidence, not guesswork.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
          </svg>
        ),
      },
      {
        title: "Prioritized Automation Roadmap",
        description:
          "A phased implementation plan organized by impact, implementation effort, and dependencies — your firm's blueprint for AI adoption over the next 6–18 months.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        ),
      },
      {
        title: "Technology Stack Assessment",
        description:
          "A review of your current tools, integrations, and data infrastructure — identifying redundancies, gaps, and opportunities to consolidate or upgrade before building automation on top.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        ),
      },
      {
        title: "Team Workshops & Training",
        description:
          "Hands-on sessions to align your team on AI capabilities, address concerns about job impact, and equip everyone with the mental models needed to thrive in an automated practice.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
          </svg>
        ),
      },
      {
        title: "Ongoing Optimization Reviews",
        description:
          "Quarterly check-ins to measure actual vs. projected ROI, identify new automation opportunities as your practice evolves, and keep your roadmap aligned with your growth trajectory.",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
          </svg>
        ),
      },
    ],
  },
];
