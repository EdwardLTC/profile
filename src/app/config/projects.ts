/*
 * Copyright 2025 Praveen Kumar
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Project } from '../types/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'FISSolution',
    description:
      'InsurTech and FinTech product suite built with a modular monolith backend that is prepared for future microservice separation.',
    role: 'Junior Lead Backend Engineer',
    problem:
      'Insurance and finance workflows require stable provider integrations, order and contract lifecycle management, partner tracking, payouts, and compliance-ready audit history.',
    highlights: [
      'Integrated insurance provider APIs and payment gateway flows across multiple product lines.',
      'Designed and implemented end-to-end order and contract lifecycle management.',
      'Standardized API contracts across insurance and financial service providers for interoperability.',
      'Built affiliate and partner integrations for tracking, orders, and disbursement items.',
      'Automated insurance creation workflows, reducing manual operations by 40%.',
      'Built payments and payouts flows including withdrawals, bank/payment info, and reconciliation reporting.',
      'Delivered admin, corporate, and provider portal backend APIs as separate services.',
      'Built audit logging and change history for compliance workflows.',
    ],
    impact:
      'Production backend experience across provider integrations, payment operations, auditability, and AWS infrastructure.',
    tags: ['NestJS', 'Prisma', 'PostgreSQL', 'AWS EC2', 'RDS', 'S3', 'TypeScript'],
    liveLink: 'https://fiss.com.vn',
    type: 'Lead Backend',
  },
  {
    id: 2,
    title: 'E-Commerce Microservice System',
    description:
      'Polyglot e-commerce backend designed around microservices, distributed transactions, and event-driven communication.',
    role: 'Backend Engineer',
    problem:
      'Order processing in a distributed commerce system needs reliable service communication, consistent transaction flow, and dependable event publishing after database commits.',
    highlights: [
      'Designed a polyglot microservice system spanning 4 languages and frameworks.',
      'Implemented distributed transactions with the Saga pattern using choreography for order processing.',
      'Used internal gRPC communication for service-to-service calls.',
      'Applied the Transaction Outbox pattern for reliable event publishing after database commits.',
      'Built event-driven flows with Apache Kafka and Avro schema contracts.',
    ],
    impact:
      'Demonstrates my strongest backend architecture skills: microservices, Saga, gRPC, Outbox, Kafka, schema contracts, Redis, and PostgreSQL.',
    tags: ['Spring Boot', 'NestJS', 'ASP.NET Core', 'Go', 'Kafka', 'gRPC', 'Redis', 'PostgreSQL'],
    githubLink: 'https://github.com/EdwardLTC/e-commerce-microservice',
    liveLink: '',
    type: 'Backend',
  },
  {
    id: 3,
    title: 'NFT Marketplace Thesis',
    description:
      'Academic thesis project focused on marketplace backend flows for minting, listing, buying, selling, and ownership verification.',
    role: 'Backend & Smart Contract Engineer',
    problem:
      'NFT marketplace systems need a backend that coordinates blockchain transactions, asset metadata, listing state, and ownership verification.',
    highlights: [
      'Built backend APIs for NFT minting, listing, buying, and marketplace transaction flows.',
      'Integrated Solidity smart contracts using OpenZeppelin standards.',
      'Designed base, listing, and minting flows for marketplace operations.',
      'Used PostgreSQL for marketplace metadata and transaction-related records.',
    ],
    impact:
      'Connects my backend API design experience with smart contract workflows from my UIT thesis topic.',
    tags: ['NestJS', 'TypeScript', 'PostgreSQL', 'Solidity', 'Openzeppelin', '...'],
    liveLink: '',
    type: 'Backend & Smart Contract',
    githubLink: 'https://github.com/EdwardLTC/meta-chain-api',
  },
];
