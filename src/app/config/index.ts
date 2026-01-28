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
      typingTexts: ['Building Backend Systems', 'Solving complex problems'],
      description:
        'Backend-focused software engineer specialized in building scalable microservices and distributed systems.',
      scrollIndicatorText: 'Scroll to explore',
    },

    about: {
      title: 'About',
      subtitle: 'Me',
      bio: [
        "Hi, I'm a Software Engineering enthusiast living in Việt Nam. I enjoy turning creative ideas into working solutions in my spare time.",
        "I've been exploring tech for about 2 years, with interests spanning across different development areas. I'm fascinated by intuitive digital experiences that just feel right.",
        "When I'm not working on code professionally, you'll find me reading about emerging technologies, contributing to open-source projects, and constantly picking up new skills and hobbies.",
      ],
      details: [
        { label: 'Location', value: 'Hồ Chí Minh City, Việt Nam' },
        { label: 'Experience', value: '2+ Years Experience' },
      ],
      qualities: [
        {
          icon: 'Rocket',
          title: 'Problem Solver',
          description:
            'I approach complex challenges with analytical thinking and break them down into manageable solutions.',
          gradient: 'from-emerald-500 to-blue-500',
        },
        {
          icon: 'Code',
          title: 'Clean Code Advocate',
          description:
            'I value maintainable, well-structured code that follows best practices and industry standards.',
          gradient: 'from-blue-500 to-violet-500',
        },
        {
          icon: 'Lightbulb',
          title: 'System Designer',
          description:
            'I architect backend solutions with a focus on clean design, reliability, and long-term scalability.',
          gradient: 'from-purple-500 to-indigo-500',
        },
        {
          icon: 'BarChart3',
          title: 'Scalable Architect',
          description:
            'I design backend systems and microservices that are reliable, scalable, and easy to maintain.',
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
