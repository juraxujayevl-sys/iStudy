export type Category = 'All' | 'AI Agents' | 'AI Web Apps' | 'Automations' | 'LLM & Fine-tuning' | 'Experiments';

export interface AiProject {
  id: string;
  title: string;
  category: Category;
  shortDescription: string;
  fullDescription: string;
  image: string;
  tags: string[];
  role: string;
  architecture: string[];
  results: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export type ContentCategory = 'All' | 'Short-Form Reels' | 'Tech Breakdowns' | 'AI Tutorials' | 'Documentaries';

export interface ContentItem {
  id: string;
  title: string;
  category: ContentCategory;
  views: string;
  platform: 'Instagram' | 'YouTube' | 'TikTok' | 'Telegram';
  thumbnail: string;
  description: string;
  link: string;
  metrics: {
    likes?: string;
    shares?: string;
    comments?: string;
  };
}

export interface Technology {
  id: string;
  name: string;
  category: 'Languages' | 'AI Frameworks' | 'Web Stack' | 'Automation & Cloud';
  icon: string;
  level: string; // e.g. "Advanced", "Expert"
  experienceYears: string;
  description: string;
  popularUses: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverable: string;
  tools: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  projectType: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}
