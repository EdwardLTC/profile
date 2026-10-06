import { ReactElement } from 'react';

// 🚀 Technology Type: Detailed Information for Each Tech Skill
export interface Technology {
  /** Name of the technology/skill */
  name: string;

  /** Hex color code representing the technology */
  color: string;

  /** Path or URL to the technology's icon */
  icon: string;
}

// 🧩 Skill Category: Organized Grouping of Technologies
export interface Skill {
  /** Category name for skills (e.g., 'Frontend', 'Backend') */
  category: string;

  /** Collection of technologies within this category */
  technologies: Technology[];
}

// 💻 Project Showcase: Comprehensive Project Details
export interface Project {
  /** Unique identifier for the project */
  id: number;

  /** Project title */
  title: string;

  /** Short description of the project */
  description: string;

  /** Your role or responsibility on the project */
  role?: string;

  /** Main problem or goal the project addresses */
  problem?: string;

  /** Important implementation details or responsibilities */
  highlights?: string[];

  /** Outcome, learning, or business/technical value */
  impact?: string;

  /** Technologies and skills used in the project */
  tags: string[];

  /** Link to the project's GitHub repository */
  githubLink?: string;

  /** Type of project (Web, Mobile, Desktop, etc.) */
  type: string;

  /** Category: 'professional' for paid employment, 'personal' for pet/side projects */
  category?: 'professional' | 'personal';

  /** Optional live demo or deployment link */
  liveLink?: string;

  /** Optional custom label for live link (e.g. 'Marketplace', 'Demo', 'Docs') */
  liveLinkLabel?: string;

  /** Optional JetBrains or other marketplace link */
  marketplaceLink?: string;

  /** Optional project thumbnail or cover image */
  thumbnail?: string;

  /** Optional GIF that plays on hover */
  gifUrl?: string;

  /** Optional array of images for the carousel */
  carouselImages?: string[];

  /** Carousel configuration */
  carouselConfig?: {
    /** Interval between slides in ms (default: 3000) */
    interval?: number;
    /** Whether to loop the carousel (default: true) */
    infinite?: boolean;
  };
}

// 🌐 Social Media Connection: Professional Network Links
export interface Social {
  /** Name of the social platform */
  name: string;

  /** React icon component for the social platform */
  icon: ReactElement;

  /** Full URL to the social profile */
  url: string;

  /** Brand color of the social platform */
  color: string;
}
