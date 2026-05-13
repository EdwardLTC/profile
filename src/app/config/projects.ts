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
      'Built a multi-tenant SaaS platform enabling partners to lease and operate isolated instances of the system.',
      'Designed and implemented an affiliate tracking & commission system for publishers and partner campaigns.',
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
    title: 'Meta Chain API',
    description:
      'NestJS backend for the MetaChain NFT marketplace thesis: collections, tokens, listings, and likes with Prisma on PostgreSQL, Redis, JWT auth, Swagger, and off-chain media via IPFS/Pinata and optional Azure Blob.',
    role: 'Backend & Smart Contract Engineer (UIT thesis)',
    problem:
      'Marketplace backends must stay consistent with on-chain state: index Factory and Marketplace events over WebSocket, reconcile listings after wallet-signed txs, handle metadata and media uploads, and expose reliable REST APIs to the Flutter client.',
    highlights: [
      'Implemented core modules (collections, tokens, listings, likes) with REST + Swagger and JWT auth.',
      'Built a chain listener that follows logs over WebSocket, replays missed events, and persists cursors for idempotent ingestion into Postgres.',
      'Integrated Hardhat-deployed Factory and Marketplace contracts (local / Sepolia) with ethers v6 for reads and transaction payloads.',
      'Wired optional IPFS (Pinata / NFT.Storage) and Azure Blob storage for media flows alongside Prisma migrations.',
      'Used Redis for caching and operational data paths aligned with the NestJS modules.',
    ],
    impact:
      'End-to-end thesis stack combining NestJS service design, Prisma data modeling, EVM contract integration, and event-driven on-chain/off-chain synchronization.',
    tags: [
      'NestJS',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Redis',
      'Solidity',
      'Openzeppelin',
      'Hardhat',
      'Ethers',
      'Azure',
    ],
    liveLink: '',
    type: 'Backend & Smart Contract',
    githubLink: 'https://github.com/EdwardLTC/meta-chain-api',
  },
  {
    id: 4,
    title: 'DogDom API',
    description:
      'TypeScript Express backend for the DogDom pet social network (FPT Polytechnic thesis): REST APIs with routing-controllers, MongoDB via Mongoose, Redis caching with Redis OM, Socket.IO for real-time features, and Elasticsearch for search — deployed on Azure with CI/CD.',
    role: 'Backend Engineer (FPT thesis)',
    problem:
      'A social product needs fast feeds and discovery, reliable auth, real-time presence and notifications, and cloud-native deployment without sacrificing validation, observability, or operational ergonomics.',
    highlights: [
      'Built REST APIs with routing-controllers, class-validator, and OpenAPI/Swagger documentation.',
      'Modeled domain data in MongoDB with Mongoose and used Redis (including Redis OM) for cache-oriented paths.',
      'Implemented real-time flows with Socket.IO (including admin tooling) alongside cron jobs and background-style processing.',
      'Integrated Elasticsearch for search-heavy endpoints and Azure services (Blob, Notification Hubs, Communication Email).',
      'Shipped with GitHub Actions CI/CD toward Azure Web Apps, PM2 process management, and Docker-based workflows.',
    ],
    impact:
      'Full-stack-adjacent backend ownership for a production-shaped social API: document store, cache, search, WebSockets, and Azure operations.',
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
    liveLink: 'http://dogdom.eastus.cloudapp.azure.com/api-docs/',
    type: 'Backend',
    githubLink: 'https://github.com/EdwardLTC/dogdom-api',
  },
];
