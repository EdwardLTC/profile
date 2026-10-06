import { PortfolioConfig } from '@/app/types/config';
import { socials } from '@/app/config/socials';
import { skills } from '@/app/config/skills';
import { projects } from '@/app/config/projects';

/**
 * Default portfolio configuration
 * Edit this file to customize your portfolio
 */
export const portfolioConfig: PortfolioConfig = {
  siteMetadata: {
    title: 'Edward',
    description: 'Portfolio website by Edward',
    author: 'Edward',
  },

  navigation: {
    logo: {
      text: 'LTC',
    },
    links: [
      { href: 'home', label: 'Home' },
      { href: 'about', label: 'About' },
      { href: 'projects', label: 'Projects' },
      { href: 'skills', label: 'Skills' },
      { href: 'connect', label: 'Connect' },
    ],
  },

  sections: {
    home: {
      greeting: "Hi, I'm",
      name: 'Edward LTC',
      typingTexts: [
        'Building Backend Systems',
        'Engineering Developer Tools',
        'Solving complex problems',
      ],
      description:
        'Backend-focused software engineer and developer tools creator, specialized in scalable microservices, distributed systems, and IDE developer tooling.',
      scrollIndicatorText: 'Scroll to explore',
    },

    about: {
      title: 'About',
      subtitle: 'Me',
      bio: [
        "I'm Lê Thành Công (Edward) — a backend engineer based in Hồ Chí Minh City, Việt Nam. I specialize in building production-grade backend systems: from InsurTech & FinTech platforms to distributed microservices and developer tooling.",
        "Since July 2023, I've been the sole backend engineer at FISSolution, owning the full backend end-to-end — refactoring legacy flows, building payment and partner integrations, and supporting day-to-day business operations from the system side. Alongside that, I spent two years freelancing for FPT Education, shipping backend APIs for three internal mobile apps used across campuses.",
        "Outside of work, I build for fun and learning — most recently publishing Apple Container Manager, an open-source JetBrains IDE plugin for managing Apple's native container runtime. I'm also currently pursuing a B.Sc. in Information Technology at UIT while wrapping up my applied degree at FPT Polytechnic.",
      ],
      details: [
        { label: 'Location', value: 'Hồ Chí Minh City, Việt Nam' },
        { label: 'Experience', value: '3+ Years Professional' },
        { label: 'Status', value: 'Open to opportunities' },
      ],
      qualities: [
        {
          icon: 'Rocket',
          title: 'Solo Ownership',
          description:
            'Comfortable owning a full backend system alone — from architecture decisions and code reviews to production incidents and business support.',
          gradient: 'from-emerald-500 to-blue-500',
        },
        {
          icon: 'Code',
          title: 'Clean Code Advocate',
          description:
            'I refactor legacy codebases into clean, maintainable structures and hold myself to high standards on API design and code quality.',
          gradient: 'from-blue-500 to-violet-500',
        },
        {
          icon: 'Lightbulb',
          title: 'Builder by Nature',
          description:
            'I build things outside of work too — open-source tools, architecture experiments, and thesis projects that push me into new domains.',
          gradient: 'from-purple-500 to-indigo-500',
        },
        {
          icon: 'BarChart3',
          title: 'Integration-Focused',
          description:
            'My sweet spot is complex integrations: insurance providers, payment gateways, partner systems, event-driven flows, and on-chain/off-chain sync.',
          gradient: 'from-indigo-500 to-cyan-500',
        },
      ],
    },

    projects: {
      title: 'My',
      subtitle: 'Projects',
      description:
        "Here's a selection of projects that showcase my skills and passion for building exceptional digital experiences across different platforms.",
      projects: projects,
      viewMoreButton: {
        label: 'View More Projects',
        url: 'https://github.com/EdwardLTC',
      },
    },

    skills: {
      title: 'Technical',
      subtitle: 'Skills',
      description:
        "I've gained proficiency in various technologies throughout my career. Here are the key tools and frameworks I use to build exceptional products.",
      categories: skills,
    },

    connect: {
      title: 'Connect',
      subtitle: 'With Me',
      description:
        'Feel free to connect with me on these platforms to discuss tech, share ideas, or just say hello!',
      socials: socials,
    },
  },

  footer: {
    copyright: `© ${new Date().getFullYear()}. All rights reserved.`,
    tagline: 'Designed and built with ❤️',
  },
};

export default portfolioConfig;
