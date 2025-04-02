import { CVData } from "./types";

export const cvData: CVData = {
  hero: {
    welcome: "Welcome To Dreamer",
    name: "Kristof Pipeleers",
    role: "Web Developer",
    description: "There are many variations of passages of forum available dreamers have suffered We put your ideas and thus your wishes variations of"
  },
  name: "Kristof Pipeleers",
  contact: {
    email: "kristof01@live.be",
    phone: "+32 468 12 88 94",
    address: "Zavelvennestraat 121, 3500 Hasselt",
  },
  education: [
    { 
      school: "Postgraduaat Innoverend Ondernemen", 
      degree: "Postgraduate Programme in Innovation & Entrepreneurship in Engineering", 
      years: "2023 - 2024",
      logo: "postgrad-logo.jpg"
    },
    { 
      school: "KU Leuven Campus Groep T", 
      degree: "Master Degree, Internet Computing", 
      years: "2022 - 2023",
      logo: "kuleuven-logo.jpg" 
    },
    { 
      school: "KU Leuven Campus Groep T", 
      degree: "Master in Industriële Wetenschappen: Elektronica-ICT", 
      years: "2019 - 2023",
      logo: "kuleuven-logo.jpg" 
    },
    { 
      school: "Scholen Kindsheid Jesu", 
      degree: "Science & Math", 
      years: "2013 - 2019",
      logo: "ksj-logo.jpg" 
    }
  ],
  experience: [
    { company: "Bpost Masspost Hypercentra Hasselt", role: "Postbode - Jobstudent", years: "2018 - 2022", description: "Bezorging van post en kranten" },
    { company: "Werecircle", role: "Innovatie Stage", years: "2023 - heden", description: "Onderzoek naar OpenAI, LangChain en AI-tools" },
  ],
  skills: ["Java", "C / C++", "Python", "Assembly", "SQL", "HTML/CSS", "JavaScript"],
  languages: [
    { name: "Nederlands", level: "Moedertaal" },
    { name: "Engels", level: "Vloeiend" },
    { name: "Frans", level: "Matig" },
    { name: "Duits", level: "Matig" },
  ],
  hobbies: ["Tennis", "Zaalvoetbal", "Drum", "Instrumentaal slagwerk"],
}; 