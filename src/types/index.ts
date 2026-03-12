
export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  level?: number;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface IContactFormData {  
  name: string;
  email: string;
  message: string;
}

export interface IFormErrors {  
  name?: string;
  email?: string;
  message?: string;
}

// Also export as a type
export type ContactFormData = IContactFormData;
export type FormErrors = IFormErrors;