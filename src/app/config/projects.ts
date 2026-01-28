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
    title: 'Ecommerce',
    description: 'A backend system for an e-commerce platform with Microservices architecture.',
    tags: ['Go', 'NestJS', 'Spring Boot', 'ASP.NET Core', 'PostgreSQL', 'Redis', 'Docker', '...'],
    githubLink: 'https://github.com/EdwardLTC/e-commerce-microservice',
    liveLink: '',
    type: 'Backend',
    thumbnail:
      'https://github.com/EdwardLTC/e-commerce-microservice/blob/main/public/system%20overview.png?raw=true',
    carouselImages: [],
    carouselConfig: {
      interval: 2000,
      infinite: true,
    },
  },
  {
    id: 2,
    title: 'FISS',
    description:
      'Smart Financial & Insurance Solutions deliver a modern technology platform that enables financial and insurance companies to optimize operations, enhance customer experience, and drive sustainable revenue growth.',
    tags: ['NestJS', 'React', 'TypeScript', 'PostgreSQL', 'AWS', '...'],
    liveLink: 'https://fiss.com.vn',
    type: 'Lead Backend',
    thumbnail:
      'https://raw.githubusercontent.com/PraveenGongada/Catalyst/refs/heads/main/docs/images/deployment-summary.png',
    gifUrl: undefined,
    carouselImages: [],
    carouselConfig: {
      interval: 2000,
      infinite: true,
    },
  },
  {
    id: 3,
    title: 'Meta Chain',
    description:
      'An NFT marketplace that enables users to mint, buy, sell, and trade digital assets securely and transparently on the blockchain. The platform integrates wallet connectivity, smart contracts, and ownership verification, allowing creators, collectors, and investors to participate in the NFT ecosystem with confidence.',
    tags: ['NestJS', 'TypeScript', 'PostgreSQL', 'Solidity', 'Openzeppelin', '...'],
    liveLink: '',
    type: 'Backend & Smart Contract',
    githubLink: 'https://github.com/EdwardLTC/meta-chain-api',
    thumbnail:
      'https://github.com/EdwardLTC/meta-chain-api/blob/main/public/base_flow.png?raw=true',
    gifUrl: undefined,
    carouselImages: [
      'https://github.com/EdwardLTC/meta-chain-api/blob/main/public/base_flow.png?raw=true',
      'https://github.com/EdwardLTC/meta-chain-api/blob/main/public/listing_flow.png?raw=true',
      'https://github.com/EdwardLTC/meta-chain-api/blob/main/public/mint_flow.png?raw=true',
    ],
    carouselConfig: {
      interval: 2000,
      infinite: true,
    },
  },
];
