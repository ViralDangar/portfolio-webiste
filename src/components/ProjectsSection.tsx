import { ExternalLink, Calendar } from "lucide-react";

// const projects = [
//   {
//     title: "FinFlow – Agentic Automation Studio",
//     period: "Apr 2025 – Present",
//     description: "Developed backend and agentic engine with FastAPI, LangChain, LangGraph. Built dynamic workflow assembly, runtime agent creation, observability, and visual builder.",
//     highlights: [
//       "Redis + Pinecone memory adapters",
//       "Multi-agent DAGs with 20+ tools",
//       "150+ automated actions",
//       "Used by 2+ enterprise clients",
//     ],
//     technologies: ["FastAPI", "LangChain", "LangGraph", "Redis", "Pinecone", "Python"],
//   },
//   {
//     title: "Car Buddy Chat – Renewals Automation",
//     period: "Aug 2024 – Mar 2025",
//     description: "Scalable Django backend with Celery, Redis, Docker. AI-powered conversational engine via SMS, Email, WhatsApp, and voice for insurance operations.",
//     highlights: [
//       "Multi-channel communication",
//       "Automated workflow reports",
//       "Transcript generation",
//       "Insurance renewals automation",
//     ],
//     technologies: ["Django", "Celery", "Redis", "Docker", "AI/NLP", "WhatsApp API"],
//   },
//   {
//     title: "IIFL (360.one) – Financial Data Automation",
//     period: "Aug 2023 – Aug 2024",
//     description: "Automated financial workflows including debt processing, PMS segregation, and equity validation. Developed Mutual Fund ISIN mapping system with automated updates.",
//     highlights: [
//       "Debt processing automation",
//       "ISIN mapping system",
//       "Data pipelines for compliance",
//       "TIFF document generator",
//     ],
//     technologies: ["Python", "Pandas", "FastAPI", "PostgreSQL", "Automation"],
//   },
// ];

const projects = [
  {
    title: "FinFlow – Agentic Automation Studio",
    period: "Sept 2025 – Present",
    description: "Full-stack agentic automation platform with dynamic workflow orchestration, runtime agent creation, visual builder, and enterprise-grade observability.",
    highlights: [
      "Redis + Pinecone memory adapters for long-term & vector memory",
      "Multi-agent DAGs with 20+ tools and conditional logic",
      "150+ automated actions across finance, CRM & operations",
      "Live with 2+ enterprise clients",
    ],
    technologies: ["FastAPI", "LangChain", "LangGraph", "Redis", "Pinecone", "Python", "React Flow"],
  },
  {
    title: "Car Buddy Chat – Insurance Renewals Automation",
    period: "May 2024 – Sept 2025",
    description: "Scalable omni-channel AI conversational engine for insurance policy renewals via SMS, Email, WhatsApp, and voice.",
    highlights: [
      "Multi-channel orchestration (SMS, Email, WhatsApp, Voice)",
      "Automated reports & transcript generation",
      "End-to-end renewals automation with high conversion",
    ],
    technologies: ["Django", "Celery", "Redis", "Docker", "AI/NLP", "WhatsApp Business API", "Twilio"],
  },
  {
    title: "IIFL (360.one) – Automated PMS Document Processing & OCR Platform",
    period: "2024 - 2025",
    description: "Independent project: Role-based React + Python platform for automated document upload, OCR verification, and PMS processing with custom PDF-to-TIFF conversion pipeline.",
    highlights: [
      "Custom algorithm: PDF → optimized & resized multi-page TIFF + merger",
      "OCR verification with Tesseract + confidence scoring",
      "Role-based UI with audit trails",
      "Reduced manual effort by 90%+",
    ],
    technologies: ["React", "Python", "FastAPI", "Tesseract OCR", "Pillow", "PyMuPDF", "PostgreSQL"],
  },
  {
    title: "IIFL (360.one) – HNI & Caliber Data Reconciliation Engine",
    period: "2024",
    description: "Independent project: High-volume data processing pipeline to map, validate, and reconcile HNI/client data across multiple sources using complex confirmation logic.",
    highlights: [
      "Processed 100K+ records daily",
      "Rule-based matching with confidence scoring",
      "Automated discrepancy reports & resolution workflows",
    ],
    technologies: ["Python", "Pandas", "NumPy", "FastAPI", "PostgreSQL"],
  },
  {
    title: "In-house Sales Automation – n8n + WhatsApp + LinkedIn Workflows",
    period: "2024",
    description: "Built advanced n8n automation workflows for sales: WhatsApp auto-replies, dynamic follow-up emails, meeting booking, and LinkedIn lead scraping & personalization.",
    highlights: [
      "Engagement-based smart follow-up sequences",
      "LinkedIn scraping + personalized outreach",
      "Funnel analytics & goal tracking",
    ],
    technologies: ["n8n", "Python", "Puppeteer", "WhatsApp API", "Google Sheets"],
  },
  {
    title: "IIFL (360.one) – Equity Trade & Orbis Reconciliation Automation",
    period: "2024",
    description: "Independent project: Automated reconciliation of equity trades between internal systems, Orbis broker files, buy/sell logic execution, and real-time bank balance validation.",
    highlights: [
      "End-to-end trade lifecycle automation",
      "Broker file parsing & discrepancy detection",
      "Auto-correction and balance reconciliation",
    ],
    technologies: ["Python", "Pandas", "FastAPI", "PostgreSQL", "Scheduler"],
  },
  {
    title: "IIFL (360.one) – Financial Data Automation Suite",
    period: "Aug 2023 – Aug 2024",
    description: "Comprehensive automation of financial workflows: debt processing, PMS segregation, equity validation, MF ISIN mapping with daily auto-updates, and compliance TIFF generation.",
    highlights: [
      "Debt processing & reclassification automation",
      "Dynamic Mutual Fund ISIN mapping engine",
      "Regulatory data pipelines",
      "Compliant TIFF document generator",
    ],
    technologies: ["Python", "Pandas", "FastAPI", "PostgreSQL", "Automation"],
  },
  {
    title: "LGT Wealth – MF ISIN Upload & Mapping Tool",
    period: "2023",
    description: "Independent project: Web tool for uploading mutual fund statements → automatic ISIN mapping → edit & download cleaned files.",
    highlights: [
      "One-click upload → map → download workflow",
      "Fuzzy matching + manual override UI",
      "Export in Excel/CSV",
    ],
    technologies: ["React", "Node.js", "Express", "Python", "Pandas"],
  },
  {
    title: "DCX Diamond – Price Prediction Engine (Confidential Client)",
    period: "2023",
    description: "Independent project: Machine learning-powered diamond pricing system using carat, cut, color, clarity, and historical market data.",
    highlights: [
      "Trained on 100K+ GIA-certified diamond records",
      "Real-time valuation dashboard",
      "High prediction accuracy",
    ],
    technologies: ["Node.js", "React", "Python", "Scikit-learn", "MongoDB"],
  },
  {
    title: "In-house CodeGen – Schema-to-CRUD Generator",
    period: "2023",
    description: "Team project: Internal low-code platform that instantly generates complete CRUD apps (backend + frontend) with validation, RBAC, and audit logs from a simple schema.",
    highlights: [
      "Schema → Node.js/Express + React (AntD) full app in one click",
      "Built-in validation, permissions, logging",
      "Cut internal tool dev time by 80%+",
    ],
    technologies: ["Node.js", "React", "TypeScript", "Prisma", "PostgreSQL"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative bg-secondary/20">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
            Featured Projects
          </h2>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group glass-card p-8 md:p-10 hover-glow transition-all duration-500 hover:border-primary/50"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar size={16} className="text-primary" />
                    <span className="text-sm text-muted-foreground">{project.period}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {project.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-sm text-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* <button className="lg:self-start p-4 bg-secondary/50 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 group-hover:bg-primary/10">
                  <ExternalLink size={20} />
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
