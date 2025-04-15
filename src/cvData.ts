import { CVData } from "./types";

export const cvData: CVData = {
  hero: {
    welcome: "Welcome",
    name: "Kristof Pipeleers",
    role: "Data Analytics Engineer",
    description: "Data Analytics Engineer with a passion for building scalable data cloud solutions, and exploring AI-driven innovations in analytics and automation."
  },
  name: "Kristof Pipeleers",
  contact: {
    email: "kristof01@live.be",
    phone: "+32 468 12 88 94",
    address: "Zavelvennestraat 121, 3500 Hasselt",
  },
  socialIcons: [
    { 
      name: "LinkedIn", 
      icon: "fab fa-linkedin", 
      url: "https://linkedin.com/in/kristof-pipeleers" 
    },
    { 
      name: "GitHub", 
      icon: "fab fa-github", 
      url: "https://github.com/kristofpipeleers" 
    },
    { 
      name: "Twitter", 
      icon: "fab fa-twitter", 
      url: "https://twitter.com/kristofpip" 
    },
    { 
      name: "Instagram", 
      icon: "fab fa-instagram", 
      url: "https://instagram.com/kristofpip" 
    }
  ],
  contactIcons: [
    { 
      name: "Email",
      icon: "fas fa-envelope",
      type: "email"
    },
    { 
      name: "Phone",
      icon: "fas fa-phone",
      type: "phone"
    },
    { 
      name: "Address",
      icon: "fas fa-map-marker-alt",
      type: "address"
    }
  ],
  services: [
    {
      "title": "Data Engineering & Cloud Solutions",
      "icon": "fas fa-database",
      "description": "Designing scalable data pipelines and orchestrating workflows using Microsoft Fabric, dbt, and medallion architecture. Leveraging Microsoft Azure for cloud-based data solutions."
    },
    {
      "title": "Data Analytics & Visualization",
      "icon": "fas fa-chart-line",
      "description": "Transforming raw data into actionable insights through advanced analytics and reporting. Building interactive dashboards with Power BI to support data-driven decision-making."
    },
    {
      "title": "AI & Machine Learning",
      "icon": "fas fa-brain",
      "description": "Exploring generative AI, predictive modeling, and AI-powered automation. Developing chatbots and AI-driven tools with OpenAI and Azure AI services."
    }
  ],
  education: [
    { 
      school: "KU Leuven", 
      degree: "Postgraduate Programme in Innovation & Entrepreneurship in Engineering", 
      years: "2023 - 2024",
      logo: "postgrad-logo.png"
    },
    { 
      school: "KU Leuven Campus Groep T", 
      degree: "Master's Degree, Internet Computing", 
      years: "2022 - 2023",
      logo: "kuleuven-logo.png" 
    },
    { 
      school: "KU Leuven Campus Groep T", 
      degree: "Bacherlor's in Industrial Sciences: Electronics-ICT", 
      years: "2019 - 2023",
      logo: "kuleuven-logo.png" 
    },
    { 
      school: "Scholen Kindsheid Jesu", 
      degree: "Science & Mathematics", 
      years: "2013 - 2019",
      logo: "ksj-logo.png" 
    }
  ],
  experience: [
    {
      title: "Innovation Internship",
      period: "2023 – 2024",
      organization: "werecircle",
      logo: "werecircle-logo.png",
      website: "https://www.werecircle.be",
      highlights: [
        "Conducted experiments in web scraping and generative AI.",
        "Explored Microsoft Azure tools including ML Studio (Prompt Flows) and AI Studio.",
        "Built and tested chatbots using OpenAI, Langchain, LlamaIndex, and other frameworks.",
        "Participated in the Microsoft OpenAI Hackathon.",
        "Contributed independently and proactively to a start-up environment as part of the SOCS (Sustainability Open Source Center for Knowledge and Support) project."
      ],
      tags: ["Web Scraping", "Generative AI", "Microsoft Azure", "Start-up"]
    },
    {
      title: "Data Engineering, Cloud Solutions & Analytics",
      period: "2024 – 2025",
      organization: "Sparkle NV",
      logo: "sparkle-logo.png",
      website: "https://www.sparkle.consulting",
      highlights: [
        "Designed scalable data pipelines and orchestrated workflows using Microsoft Fabric, dbt, and medallion architecture.",
        "Implemented cloud-based data solutions using Microsoft Azure.",
        "Transformed raw data into actionable insights using advanced analytics techniques.",
        "Built interactive dashboards with Power BI to support data-driven decision-making."
      ],
      tags: ["Data Engineering", "Cloud Solutions", "Analytics", "Microsoft Azure", "Power BI"]
    }
  ],
  languages: [
    {
      name: "Nederlands",
      level: { nl: "Moedertaal", en: "Native" },
      proficiency: 100
    },
    {
      name: "Engels",
      level: { nl: "Vloeiend", en: "Fluent" },
      proficiency: 90
    },
    {
      name: "Frans",
      level: { nl: "Matig", en: "Intermediate" },
      proficiency: 60
    },
    {
      name: "Duits",
      level: { nl: "Matig", en: "Intermediate" },
      proficiency: 50
    }
  ],
  hobbies: ["Tennis", "Zaalvoetbal", "Drum", "Instrumentaal slagwerk"],
  qualities: [
    {
      id: "planning",
      title: "PLANNING",
      icon: "fas fa-calendar-check",
      description: "A full schedule doesn't intimidate me. On the contrary, planning my work efficiently gives me a sense of calm. I prefer starting tasks early to ensure satisfactory results."
    },
    {
      id: "perseverance", 
      title: "PERSEVERANCE",
      icon: "fas fa-fist-raised",
      description: "When I start something, I strive for the best possible outcome. I don't like giving up - whether in professional work or personal hobbies like tennis or music."
    },
    {
      id: "teamwork",
      title: "TEAMWORK",
      icon: "fas fa-users",
      description: "Groups that work with mutual consideration and initiative create great results. Diversity in personalities and talents significantly enhances outcomes."
    },
    {
      id: "diligence",
      title: "DILIGENCE",
      icon: "fas fa-fire", 
      description: "When interested in a topic, I commit 100%. I find fulfillment in continuous learning and seeing my professional growth."
    }
  ]
}; 