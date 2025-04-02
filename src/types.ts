export interface CVData {
  hero: {
    welcome: string;
    name: string;
    role: string;
    description: string;
  };
  name: string;
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  education: { 
    school: string; 
    degree: string; 
    years: string;
    logo?: string;
  }[];
  experience: { company: string; role: string; years: string; description: string }[];
  skills: string[];
  languages: { name: string; level: string }[];
  hobbies: string[];
} 