export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}