export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProjectAnalysis {
  techStack: string[];
  estimatedDuration: string;
  keyFeatures: string[];
  summary: string;
}

export enum NavItem {
  HOME = 'home',
  SERVICES = 'services',
  PRODUCTS = 'products',
  ABOUT = 'about',
  CONTACT = 'contact',
  AI_CONSULTANT = 'ai-consultant'
}

export type Language = 'en' | 'tr';