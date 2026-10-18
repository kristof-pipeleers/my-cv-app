import type { CV } from "./types";

export const cv = {
  person: {
    name: "Kristof Pipeleers",
    role: "Data Analytics Engineer",
    headline: "Data platforms people and AI agents can *trust*.",
    summary:
      "I turn business knowledge into simple, reliable data models, and bring AI agents into the data platform in a secure, reviewable way.",
    location: "Madrid, Spain",
    email: "kristof01@live.be",
    phone: "+32 468 12 88 94",
    website: "https://kristofpipeleers.be",
    portrait: "profile-image.png",
  },

  socials: [
    { id: "linkedin", label: "LinkedIn", url: "https://linkedin.com/in/kristof-pipeleers/", onResume: true },
    { id: "github", label: "GitHub", url: "https://github.com/kristof-pipeleers", onResume: true },
    { id: "instagram", label: "Instagram", url: "https://instagram.com/kristofpipeleers" },
  ],

  // Tools I have worked with; shown as the moving logo corridor on the website.
  stack: [
    { name: "Microsoft Fabric", logo: "fabric" },
    { name: "dbt", logo: "dbt" },
    { name: "BigQuery", logo: "bigquery", next: true },
    { name: "Power BI", logo: "power-bi" },
    { name: "Claude Code", logo: "claude-code" },
    { name: "Airflow", logo: "airflow", next: true },
    { name: "Azure", logo: "azure" },
    { name: "Python", logo: "python" },
    { name: "Google Cloud", logo: "google-cloud", next: true },
    { name: "Azure DevOps", logo: "azure-devops" },
    { name: "PostgreSQL", logo: "postgresql" },
    { name: "Sigma", logo: "sigma", next: true },
    { name: "SAP", logo: "sap" },
    { name: "Git", logo: "git" },
    { name: "OpenAI", logo: "openai" },
    { name: "LangChain", logo: "langchain" },
  ],

  services: [
    {
      title: "Data Platforms",
      icon: "database",
      description:
        "End-to-end platforms on Microsoft Fabric and dbt: medallion and Data Vault modelling, incremental loading, CI/CD across environments, and monitoring that alerts before the business notices.",
      short: "Fabric + dbt platforms with Data Vault, CI/CD across environments and proactive monitoring.",
    },
    {
      title: "Business-Ready Models",
      icon: "chart",
      description:
        "Semantic models, Power BI reports and data-quality worklists built with analysts and business users, so the numbers match how the business actually works.",
      short: "Semantic models, Power BI and data-quality worklists built with the business.",
    },
    {
      title: "AI in the Data Platform",
      icon: "brain",
      description:
        "Ontologies and data agents that answer business questions within security rules, and AI coding agents that speed up delivery behind reviews, tests and human-approved releases.",
      short: "Ontologies, data agents and AI-assisted engineering with guardrails.",
    },
  ],

  // Most recent first.
  experience: [
    {
      // TODO(Nov 2026): remove `upcoming` + `startMonth` here and set Sparkle `end: 2026`.
      id: "ebury",
      role: "Analytics Engineer",
      organization: "Ebury",
      website: "https://ebury.com",
      logo: "ebury-logo.png",
      start: 2026,
      startMonth: "November",
      end: null,
      upcoming: true,
      highlights: [
        "Joining a fast-growing fintech for cross-border payments, FX and hedging, to own the data models of a core product domain.",
        "Bringing my Fabric and dbt experience to a Google Cloud stack: dbt, BigQuery and Airflow, with Sigma for BI.",
      ],
      tags: ["dbt", "BigQuery", "Airflow", "Sigma", "Fintech"],
    },
    {
      id: "sparkle",
      role: "Data Analytics Engineer",
      organization: "Sparkle NV",
      website: "https://www.sparkle.consulting",
      logo: "sparkle-logo.png",
      start: 2024,
      end: null,
      highlights: [
        "International trading group: built a finance data platform on Fabric and dbt that unifies several ERPs across countries, using Data Vault, reconciliation against the legacy system, row-level security and CI/CD across four environments.",
        "Public-sector IT services company: split a monolithic Fabric setup into integration, transformation and consumption workspaces, archived ~275 legacy dbt models and set up central monitoring and alerting.",
        "Traced half a day per week of manual invoice corrections back to the linking logic, and raised automatic invoice-to-order matching to ~81%.",
        "Built an ontology and knowledge graph on governed gold models, so a Fabric data agent answers multi-hop business questions within row-level security.",
        "Brought AI coding agents into daily delivery behind isolated branches, a convention-checking reviewer agent, CI checks and human-approved production releases.",
      ],
      tags: ["Microsoft Fabric", "dbt", "Data Vault", "Power BI", "Fabric IQ", "Claude Code"],
    },
    {
      id: "werecircle",
      role: "Innovation Internship",
      organization: "werecircle",
      website: "https://www.werecircle.be",
      logo: "werecircle-logo.png",
      start: 2023,
      end: 2024,
      highlights: [
        "Prototyped chatbots and generative-AI tools with OpenAI, LangChain and LlamaIndex, and competed in the Microsoft OpenAI Hackathon.",
        "Explored Azure ML Studio (Prompt Flow), AI Studio and web scraping, working independently in a start-up environment.",
      ],
      tags: ["Web Scraping", "Gen AI", "Microsoft Azure", "Start-up"],
    },
  ],

  // Most recent first.
  education: [
    {
      id: "postgrad",
      degree: "Postgraduate Programme in Innovation & Entrepreneurship in Engineering",
      school: "KU Leuven",
      logo: "postgrad-logo.png",
      start: 2023,
      end: 2024,
      description:
        "Specialized program focusing on innovation management, business development, and entrepreneurial skills in engineering contexts.",
    },
    {
      id: "master",
      degree: "Master's in Industrial Sciences: Internet Computing",
      school: "KU Leuven Campus Groep T",
      logo: "kuleuven-logo.png",
      start: 2022,
      end: 2023,
      description:
        "Advanced studies in cloud computing, distributed systems, and web technologies, with a master's thesis focused on a machine learning topic.",
    },
    {
      id: "bachelor",
      degree: "Bachelor's in Industrial Sciences: Electronics-ICT",
      school: "KU Leuven Campus Groep T",
      logo: "kuleuven-logo.png",
      start: 2019,
      end: 2023,
      description:
        "Foundation in electronics and information technology, covering programming, networking, and system design. Gained practical experience through hands-on (team) projects and laboratory work.",
    },
    {
      id: "secondary",
      degree: "Science & Mathematics",
      school: "Scholen Kindsheid Jesu",
      logo: "ksj-logo.png",
      start: 2013,
      end: 2019,
      description: "Proper foundation in mathematics, sciences, and analytical thinking.",
    },
  ],

  // "How I work": short, opinionated principles, each backed by one public source.
  principles: [
    {
      id: "understand",
      title: "Understand what is built",
      description:
        "AI agents now write a growing share of data code. My job is to know exactly what was built and why, whoever wrote it, and to spend my time on the business problem rather than on boilerplate.",
      short: "Whoever writes the code, me or an agent, I make sure I understand what was built and why.",
      evidence: {
        label: "dbt Labs, State of Analytics Engineering 2026: 72% of teams prioritise AI-assisted coding, only 24% AI-assisted testing.",
        url: "https://www.getdbt.com/resources/state-of-analytics-engineering-2026",
      },
    },
    {
      id: "simple",
      title: "Keep models simple",
      description:
        "I sit with analysts and business users and turn their daily knowledge into data models. Clear names, one definition per concept and good documentation make a model readable for people and for AI agents alike.",
      short: "I turn business knowledge into simple, documented models that both people and AI agents can read.",
      evidence: {
        label: "Spider 2.0 (ICLR 2025): LLM agents solve 21% of tasks on complex enterprise schemas vs 91% on simple ones.",
        url: "https://arxiv.org/abs/2411.07763",
      },
    },
    {
      id: "guardrails",
      title: "AI, with guardrails",
      description:
        "I went from building everything by hand to working with agents every day. That only works with isolated branches, automated reviews, tests in dev first and a human approval before anything reaches production.",
      short: "From manual work to daily agents, behind reviews, tests in dev and human-approved releases.",
      evidence: {
        label: "KPMG & University of Melbourne, 2025: 66% of people use AI regularly, but only 46% are willing to trust it.",
        url: "https://mbs.edu/news/global-study-reveals-trust-of-AI-remains-a-critical-challenge",
      },
    },
    {
      id: "together",
      title: "Remote by default, together when it matters",
      description:
        "Working from coworking spaces in Madrid taught me that remote work delivers, flexibly and reliably. Trust is still built in person, so I make time to meet the people I build for.",
      short: "Remote from Madrid coworking spaces, and in person when it builds trust.",
      evidence: {
        label: "Bloom et al., Nature 2024: hybrid work cut resignations by a third with no loss in performance.",
        url: "https://doi.org/10.1038/s41586-024-07500-2",
      },
    },
  ],

  languages: [
    { name: "Dutch", level: "Native", proficiency: 100 },
    { name: "English", level: "Fluent", proficiency: 85 },
    { name: "French", level: "Intermediate", proficiency: 40 },
    { name: "Spanish", level: "Intermediate", proficiency: 30 },
  ],

  hobbies: ["Running", "Tennis & Padel", "Drums", "Percussion"],

  // LinkedIn posts (synced with `npm run linkedin:sync`). Add post URLs to pin specific ones.
  writing: {
    featured: [],
    max: 3,
  },
} satisfies CV;
