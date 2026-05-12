import type { ResumeContent } from '@/app/types/resume';

export const resumeContent: ResumeContent = {
  header: {
    firstName: 'LÊ THÀNH',
    lastName: 'CÔNG',
    title: 'Junior Lead Backend Engineer',
    tagline: '// InsurTech · FinTech · Microservices',
    contacts: [
      { kind: 'plain', text: 'Hồ Chí Minh City, Việt Nam' },
      { kind: 'plain', text: '0794628973' },
      {
        kind: 'link',
        text: 'lethanhcong06062003@gmail.com',
        href: 'mailto:lethanhcong06062003@gmail.com',
      },
      {
        kind: 'link',
        text: 'edwardltc.github.io/profile',
        href: 'https://edwardltc.github.io/profile/',
      },
    ],
  },

  sectionTitles: {
    careerPath: "Where I'm headed",
    experience: 'Experience',
    projects: 'Projects',
    education: 'Education',
    skills: 'Skills',
    languages: 'Languages',
    awards: 'Awards',
  },

  careerPath: {
    lines: [
      [
        { kind: 'strong', text: 'Next five years — target position' },
        {
          kind: 'text',
          text: ': I aim to grow from ',
        },
        { kind: 'strong', text: 'Junior Lead Backend Engineer' },
        {
          kind: 'text',
          text: ' into a ',
        },
        { kind: 'strong', text: 'Senior Backend / Backend Tech Lead' },
        {
          kind: 'text',
          text: ' role (IC-first) where I own a major product surface or shared platform area—features, reliability, cost, and safe evolution across services—not just tickets.',
        },
      ],
      [
        { kind: 'text', text: 'I want my seat at the table to be ' },
        { kind: 'strong', text: 'trusted technical authority' },
        {
          kind: 'text',
          text: ': shaping backend roadmaps with product, setting review standards for APIs and data changes, and leading the hardest integration and payout-style work.',
        },
      ],
      [
        { kind: 'text', text: 'I plan to widen influence to ' },
        { kind: 'strong', text: 'cross-team architecture' },
        {
          kind: 'text',
          text: '—RFCs, migration plans, and incident learnings that raise the bar beyond my immediate squad, while staying accountable for production outcomes.',
        },
      ],
      [
        { kind: 'text', text: 'I expect to keep ' },
        { kind: 'strong', text: 'hands-on coding' },
        {
          kind: 'text',
          text: ' as a default, with more time on design reviews, mentoring mid-level engineers, and hiring support—without drifting into a purely meeting-only role.',
        },
      ],
      [
        { kind: 'text', text: 'I see myself anchored in ' },
        { kind: 'strong', text: 'high-trust domains' },
        {
          kind: 'text',
          text: ' (finance/insurance-style or similar): correctness, auditability, and partner ecosystems stay central to how I am measured, not only velocity.',
        },
      ],
    ],
  },

  experience: [
    {
      company: 'Fissolution',
      dateRange: 'Jul 2023 — Present',
      role: 'Junior Lead Backend Engineer',
      summary:
        'InsurTech & FinTech platform — modular monolith (microservice-ready) backend for insurance/finance product suite built on 4 NestJS + Prisma services.',
      bullets: [
        [
          { kind: 'text', text: 'Integrated ' },
          { kind: 'strong', text: 'insurance provider APIs' },
          { kind: 'text', text: ' and ' },
          { kind: 'strong', text: 'Payment Gateway' },
          { kind: 'text', text: ' across multiple product lines.' },
        ],
        [
          { kind: 'text', text: 'Designed and implemented ' },
          { kind: 'strong', text: 'end-to-end order + contract lifecycle' },
          { kind: 'text', text: ' management.' },
        ],
        [
          { kind: 'text', text: 'Standardized ' },
          { kind: 'strong', text: 'API contracts' },
          {
            kind: 'text',
            text: ' between multiple insurance and financial service providers for interoperability.',
          },
        ],
        [
          { kind: 'text', text: 'Built ' },
          { kind: 'strong', text: 'affiliate & partner integrations' },
          { kind: 'text', text: ' including tracking, orders, and disbursement items.' },
        ],
        [
          { kind: 'text', text: 'Automated insurance creation workflows, ' },
          { kind: 'strong', text: 'reducing manual operations by 40%' },
          { kind: 'text', text: '.' },
        ],
        [
          { kind: 'text', text: 'Built ' },
          { kind: 'strong', text: 'payments + payouts flows' },
          {
            kind: 'text',
            text: ': withdrawals, bank/payment info handling, and reconciliation reporting.',
          },
        ],
        [
          { kind: 'text', text: 'Integrated ' },
          { kind: 'strong', text: 'AWS IaaS' },
          { kind: 'text', text: ' (EC2, RDS, S3) for cloud infrastructure.' },
        ],
        [
          { kind: 'text', text: 'Delivered ' },
          { kind: 'strong', text: 'admin / corp / provider portal' },
          { kind: 'text', text: ' backend APIs as separate services.' },
        ],
        [
          { kind: 'text', text: 'Built ' },
          { kind: 'strong', text: 'audit logging & change history' },
          {
            kind: 'text',
            text: ' (Audit / AuditEvent / AuditEntry / AuditReadLog) for compliance.',
          },
        ],
      ],
      tags: ['NestJS', 'Prisma', 'PostgreSQL', 'AWS EC2', 'RDS', 'S3', 'TypeScript'],
    },
    {
      company: 'FPT Education',
      dateRange: 'Mar 2023 — Mar 2025',
      role: 'Backend Freelancer',
      bullets: [
        [
          { kind: 'strong', text: 'MyFPS' },
          {
            kind: 'text',
            text: " — App for parents to monitor children's learning progress.",
          },
        ],
        [
          { kind: 'strong', text: 'MyFPL' },
          {
            kind: 'text',
            text: ' — App for students to register for school services and view grades.',
          },
        ],
        [
          { kind: 'strong', text: 'FPL Save Electricity' },
          { kind: 'text', text: ' — App for IoT device management app for school environments.' },
        ],
      ],
      tags: ['NestJS', 'Node.js', 'PostgreSQL', 'Socket.IO'],
    },
  ],

  projects: [
    {
      title: 'E-Commerce Microservice System',
      linkLabel: 'github.com/EdwardLTC/e-commerce-microservice',
      linkHref: 'https://github.com/EdwardLTC/e-commerce-microservice',
      bullets: [
        [
          { kind: 'text', text: 'Designed a ' },
          { kind: 'strong', text: 'polyglot microservice' },
          { kind: 'text', text: ' system spanning 4 languages/frameworks.' },
        ],
        [
          { kind: 'text', text: 'Distributed transactions via ' },
          { kind: 'strong', text: 'Saga pattern' },
          { kind: 'text', text: ' (choreography) for order processing.' },
        ],
        [
          { kind: 'text', text: 'Internal ' },
          { kind: 'strong', text: 'gRPC' },
          { kind: 'text', text: ' service-to-service communication.' },
        ],
        [
          { kind: 'strong', text: 'Transaction Outbox pattern' },
          { kind: 'text', text: ' for reliable event publishing post-DB commit.' },
        ],
        [
          { kind: 'text', text: 'Event-driven architecture with ' },
          { kind: 'strong', text: 'Apache Kafka' },
          { kind: 'text', text: ' + Avro schema contracts.' },
        ],
      ],
      tags: ['Spring Boot', 'NestJS', 'ASP.Net Core', 'Go', 'Kafka', 'gRPC', 'Redis', 'PostgreSQL'],
    },
    {
      title: 'Meta Chain API',
      subtitle: [
        { kind: 'text', text: 'UIT thesis — ' },
        { kind: 'em', text: 'MetaChain - NFT Marketplace' },
      ],
      linkLabel: 'github.com/EdwardLTC/meta-chain-api',
      linkHref: 'https://github.com/EdwardLTC/meta-chain-api',
      bullets: [
        [
          { kind: 'text', text: 'NestJS API for ' },
          { kind: 'strong', text: 'collections, tokens, listings, and likes' },
          { kind: 'text', text: ' with Prisma on PostgreSQL, Redis, JWT, and Swagger.' },
        ],
        [
          { kind: 'strong', text: 'Chain listener' },
          {
            kind: 'text',
            text: ' over WebSocket: replay missed logs, cursor-based ingestion, reconcile domain state with Factory / Marketplace events.',
          },
        ],
        [
          { kind: 'strong', text: 'Hardhat' },
          { kind: 'text', text: ' contracts (OpenZeppelin) and deployment scripts; ' },
          { kind: 'strong', text: 'ethers v6' },
          { kind: 'text', text: ' for RPC reads and wallet-signed listing flows.' },
        ],
        [
          { kind: 'text', text: 'Off-chain media via ' },
          { kind: 'strong', text: 'IPFS (Pinata / NFT.Storage)' },
          { kind: 'text', text: ' and optional ' },
          { kind: 'strong', text: 'Azure Blob' },
          { kind: 'text', text: ' storage.' },
        ],
      ],
      tags: [
        'NestJS',
        'Prisma',
        'PostgreSQL',
        'Redis',
        'Solidity',
        'Hardhat',
        'OpenZeppelin',
        'TypeScript',
      ],
    },
    {
      title: 'DogDom API',
      subtitle: [
        { kind: 'text', text: 'FPT Polytechnic thesis — ' },
        { kind: 'em', text: 'Dogdom – Social Network for Pet Lovers' },
      ],
      linkLabel: 'github.com/EdwardLTC/dogdom-api',
      linkHref: 'https://github.com/EdwardLTC/dogdom-api',
      bullets: [
        [
          { kind: 'strong', text: 'Express + TypeScript' },
          {
            kind: 'text',
            text: ' REST API using routing-controllers, class-validator, and Swagger/OpenAPI docs.',
          },
        ],
        [
          { kind: 'strong', text: 'MongoDB + Mongoose' },
          { kind: 'text', text: ' for domain models; ' },
          { kind: 'strong', text: 'Redis / Redis OM' },
          { kind: 'text', text: ' for cache-oriented data paths.' },
        ],
        [
          { kind: 'strong', text: 'Socket.IO' },
          { kind: 'text', text: ' for real-time features; ' },
          { kind: 'strong', text: 'Elasticsearch' },
          { kind: 'text', text: ' for search-heavy queries.' },
        ],
        [
          { kind: 'strong', text: 'Azure' },
          {
            kind: 'text',
            text: ' integrations (Blob, Notification Hubs, Communication Email) and ',
          },
          { kind: 'strong', text: 'GitHub Actions → Azure Web Apps' },
          { kind: 'text', text: ' CI/CD with PM2/Docker-style deploy flows.' },
        ],
      ],
      tags: [
        'TypeScript',
        'Express',
        'MongoDB',
        'Mongoose',
        'Redis',
        'Socket.IO',
        'Elasticsearch',
        'Azure',
      ],
    },
  ],

  education: [
    {
      degree: 'B.Sc. Information Technology',
      school: 'UIT — VNUHCM',
      date: 'Sep 2024 — Jun 2026',
      specialization: 'Specialization: Information Technology',
      thesisTitle: 'MetaChain - NFT Marketplace',
    },
    {
      degree: 'Applied B.Sc. Software Engineering',
      school: 'FPT Polytechnic',
      date: 'Sep 2021 — Jan 2024',
      specialization: 'Specialization: Mobile Programming',
      thesisTitle: 'Dogdom – Social Network for Pet Lovers',
    },
  ],

  skillGroups: [
    {
      label: 'Core',
      highlight: true,
      items: ['TypeScript', 'NestJS', 'Node.js', 'Express', 'PostgreSQL'],
    },
    {
      label: 'Architecture',
      highlight: false,
      items: [
        'Microservices',
        'Event-Driven',
        'Saga Pattern',
        'gRPC',
        'Outbox Pattern',
        'On-chain event ingestion',
      ],
    },
    {
      label: 'Other Languages',
      highlight: false,
      items: ['Spring Boot', 'ASP.Net Core', 'Go', 'Solidity'],
    },
    {
      label: 'Infra & Tools',
      highlight: false,
      items: [
        'AWS',
        'Apache Kafka',
        'Redis',
        'Docker',
        'Prisma',
        'Hardhat',
        'MongoDB',
        'Elasticsearch',
      ],
    },
  ],

  languages: [
    { name: 'Vietnamese', level: 'Native', pct: 100 },
    { name: 'English', level: 'Professional', pct: 50 },
  ],

  awards: [
    'Academic Preparatory English Level 3 — Topnotch 2',
    'Finalist — Startup Kite Competition',
  ],

  footer: {
    fullName: 'LÊ THÀNH CÔNG',
    roleLabel: 'Backend Engineer',
    locationDate: 'HỒ CHÍ MINH CITY · 2026',
  },
};
