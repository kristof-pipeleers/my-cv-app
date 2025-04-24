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
    birthday: "January 29, 2001",
    email: "kristof01@live.be",
    phone: "+32 468 12 88 94",
    address: "Zavelvennestraat 121, 3500 Hasselt",
  },
  socialIcons: [
    { 
      name: "LinkedIn", 
      icon: "fab fa-linkedin", 
      url: "https://linkedin.com/in/kristof-pipeleers/" 
    },
    { 
      name: "GitHub", 
      icon: "fab fa-github", 
      url: "https://github.com/kristof-pipeleers" 
    },
    { 
      name: "Instagram", 
      icon: "fab fa-instagram", 
      url: "https://instagram.com/kristofpipeleers" 
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
    },
    { 
      name: "Birthday",
      icon: "fas fa-birthday-cake",
      type: "birthday"
    }
  ],
  services: [
    {
      "title": "Data Engineering & Cloud Solutions",
      "icon": "fas fa-database",
      "description": "Building end-to-end data solutions with Microsoft Fabric and Azure. Creating reliable data pipelines from raw data to insights, using dbt to transform and organize data following medallion architecture principles."
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
      logo: "postgrad-logo.png",
      description: "Specialized program focusing on innovation management, business development, and entrepreneurial skills in engineering contexts."
    },
    { 
      school: "KU Leuven Campus Groep T", 
      degree: "Master's in Industrial Sciences: Internet Computing", 
      years: "2022 - 2023",
      logo: "kuleuven-logo.png",
      description: "Advanced studies in cloud computing, distributed systems, and web technologies, with a master's thesis focused on a machine learning topic."
    },
    { 
      school: "KU Leuven Campus Groep T", 
      degree: "Bacherlor's in Industrial Sciences: Electronics-ICT", 
      years: "2019 - 2023",
      logo: "kuleuven-logo.png",
      description: "Foundation in electronics and information technology, covering programming, networking, and system design. Gained practical experience through hands-on (team) projects and laboratory work."
    },
    { 
      school: "Scholen Kindsheid Jesu", 
      degree: "Science & Mathematics", 
      years: "2013 - 2019",
      logo: "ksj-logo.png",
      description: "Proper foundation in mathematics, sciences, and analytical thinking."
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
        "Contributed independently and proactively to a start-up environment."
      ],
      tags: ["Web Scraping", "Gen AI", "Microsoft Azure", "Start-up"]
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
      tags: ["Data Engineering", "Cloud Solutions", "Analytics", "Microsoft Fabric", "Power BI"]
    }
  ],
  languages: [
    {
      name: "Dutch",
      level: { nl: "Moedertaal", en: "Native" },
      proficiency: 100
    },
    {
      name: "English",
      level: { nl: "Vloeiend", en: "Fluent" },
      proficiency: 85
    },
    {
      name: "French",
      level: { nl: "Matig", en: "Intermediate" },
      proficiency: 40
    },
    {
      name: "Spanish",
      level: { nl: "Matig", en: "Intermediate" },
      proficiency: 10
    }
  ],
  hobbies: ["Tennis", "Indoor Football", "Drums", "Percussion"],
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
      description: "I aim for the best outcome in everything I start, whether it's work or hobbies like tennis or music. I value consistency and clarity, especially in writing queries or building pipelines, where clean code shows care and professionalism."
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
      icon: "fas fa-book-open", 
      description: "When I'm curious about something, I dive in fully. I enjoy learning, growing professionally, and staying up to date with new technologies through events and meetups."
    }
  ]
}; 