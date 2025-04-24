export interface Quality {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface Language {
  name: string;
  level: {
    nl: string;
    en: string;
  };
  proficiency: number;
}

export interface SocialIcon {
  name: string;
  icon: string;
  url: string;
}

export interface ContactIcon {
  name: string;
  icon: string;
  type: 'email' | 'phone' | 'address' | 'birthday' | 'other';
}

export interface Experience {
  title: string;
  period: string;
  organization: string;
  logo: string;
  website?: string;
  highlights: string[];
  tags?: string[];
}

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
    birthday: string;
  };
  socialIcons: SocialIcon[];
  contactIcons: ContactIcon[];
  services: {
    title: string;
    icon: string;
    description: string;
  }[];
  education: { 
    school: string; 
    degree: string; 
    years: string;
    logo?: string;
    description?: string;
  }[];
  experience: Experience[];
  languages: Language[];
  hobbies: string[];
  qualities: Quality[];
} 