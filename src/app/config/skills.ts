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

import { Skill } from '../types/types';

export const skills: Skill[] = [
  {
    category: 'Backend',
    technologies: [
      {
        name: 'Go',
        color: '#00ADD8',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg',
      },
      {
        name: 'Node.js',
        color: '#339933',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
      {
        name: 'Express',
        color: '#000000',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      },
      {
        name: 'Spring Boot',
        color: '#6DB33F',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      },
      {
        name: 'NestJS',
        color: '#E0234E',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg',
      },
      {
        name: 'ASP.NET Core',
        color: '#512BD4',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
      },
    ],
  },
  {
    category: 'Database',
    technologies: [
      {
        name: 'PostgreSQL',
        color: '#336791',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      },
      {
        name: 'Redis',
        color: '#DC382D',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
      },
      {
        name: 'MongoDB',
        color: '#47A248',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      },
      {
        name: 'MySQL',
        color: '#4479A1',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      },
    ],
  },
  {
    category: 'Mobile',
    technologies: [
      {
        name: 'React Native',
        color: '#61DAFB',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
      {
        name: 'Compose Multiplatform',
        color: '#3DDC84',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
      },
    ],
  },
  {
    category: 'Message Broker',
    technologies: [
      {
        name: 'Kafka',
        color: '#231F20',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg',
      },
    ],
  },
  {
    category: 'Cloud',
    technologies: [
      {
        name: 'AWS',
        color: '#FF9900',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      },
      {
        name: 'Azure',
        color: '#0078D4',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
      },
    ],
  },
  {
    category: 'Architecture & Patterns',
    technologies: [
      {
        name: 'Microservices',
        color: '#FF6F61',
        icon: 'https://cdn-icons-png.flaticon.com/512/4248/4248443.png',
      },
      {
        name: 'Event-Driven',
        color: '#4CAF50',
        icon: 'https://cdn-icons-png.flaticon.com/512/906/906361.png',
      },
    ],
  },
];
