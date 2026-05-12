'use client';

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

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Network, ServerCog, Sparkles, Workflow } from 'lucide-react';
import { Button } from '@/app/components/button';
import { projects } from '@/app/config/projects';

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const getTagColor = (tag: string) => {
    const tagColors: Record<string, string> = {
      TypeScript: 'bg-blue-600/20 text-blue-300 border-blue-600/20',
      Express: 'bg-neutral-500/20 text-neutral-200 border-neutral-500/30',
      MongoDB: 'bg-green-600/20 text-green-200 border-green-600/20',
      Mongoose: 'bg-green-700/20 text-green-200 border-green-700/20',
      Elasticsearch: 'bg-teal-600/20 text-teal-200 border-teal-600/20',
      'Socket.IO': 'bg-fuchsia-600/20 text-fuchsia-200 border-fuchsia-600/20',
      NestJS: 'bg-red-500/20 text-red-200 border-red-500/20',
      Go: 'bg-cyan-600/20 text-cyan-300 border-cyan-600/20',
      PostgreSQL: 'bg-blue-700/20 text-blue-300 border-blue-700/20',
      Kafka: 'bg-orange-500/20 text-orange-200 border-orange-500/20',
      gRPC: 'bg-violet-500/20 text-violet-200 border-violet-500/20',
      Prisma: 'bg-slate-500/20 text-slate-200 border-slate-500/20',
      Redis: 'bg-red-600/20 text-red-200 border-red-600/20',
      'Spring Boot': 'bg-lime-500/20 text-lime-200 border-lime-500/20',
      'ASP.NET Core': 'bg-purple-500/20 text-purple-200 border-purple-500/20',
      Solidity: 'bg-gray-500/20 text-gray-200 border-gray-500/20',
      Openzeppelin: 'bg-indigo-500/20 text-indigo-200 border-indigo-500/20',
      Hardhat: 'bg-yellow-500/20 text-yellow-200 border-yellow-500/20',
      Ethers: 'bg-violet-600/20 text-violet-200 border-violet-600/20',
      Azure: 'bg-sky-500/20 text-sky-200 border-sky-500/20',
      'AWS EC2': 'bg-amber-500/20 text-amber-200 border-amber-500/20',
      RDS: 'bg-amber-500/20 text-amber-200 border-amber-500/20',
      S3: 'bg-amber-500/20 text-amber-200 border-amber-500/20',
      default: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    };

    return tagColors[tag] || tagColors.default;
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      <div className="absolute -right-20 top-1/3 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute -left-20 bottom-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
              Projects
            </span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full" />
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Backend-focused projects spanning InsurTech operations, polyglot microservices, social
            APIs with search and real-time WebSockets, Web3 marketplace backends with on-chain event
            ingestion, and production cloud infrastructure.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map(project => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group h-full"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div
                className={`bg-gray-800/30 backdrop-blur-sm rounded-2xl border transition-all duration-500 h-full ${
                  hoveredProject === project.id
                    ? 'border-emerald-500/50 shadow-xl shadow-emerald-500/10 translate-y-[-5px]'
                    : 'border-gray-700/50 shadow-lg shadow-black/20'
                }`}
              >
                <div className="p-6 sm:p-8">
                  <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                        {project.type && (
                          <span className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                            {project.type}
                          </span>
                        )}
                      </div>

                      {project.role && (
                        <p className="mt-2 text-sm font-semibold text-blue-200">{project.role}</p>
                      )}

                      <p className="mt-4 text-sm leading-6 text-gray-300">{project.description}</p>

                      {project.problem && (
                        <div className="mt-6 border-l-2 border-emerald-400/40 pl-4">
                          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                            Backend Challenge
                          </p>
                          <p className="mt-2 text-sm leading-6 text-gray-300">{project.problem}</p>
                        </div>
                      )}
                    </div>

                    <div className="rounded-xl border border-gray-700/60 bg-gray-900/40 p-4">
                      <div className="grid grid-cols-3 gap-3 text-center">
                        {[
                          { icon: ServerCog, label: project.type },
                          { icon: Workflow, label: 'Lifecycle' },
                          { icon: Network, label: 'Integrations' },
                        ].map(item => (
                          <div
                            key={item.label}
                            className="rounded-lg border border-gray-700/60 bg-gray-800/40 px-3 py-4"
                          >
                            <item.icon
                              size={20}
                              className="mx-auto text-emerald-300"
                              aria-hidden="true"
                            />
                            <div className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-gray-300">
                              {item.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {project.impact && (
                        <div className="mt-4 rounded-lg border border-blue-500/20 bg-blue-500/10 p-4">
                          <p className="text-xs font-semibold uppercase tracking-wider text-blue-200">
                            Result
                          </p>
                          <p className="mt-2 text-sm leading-6 text-gray-300">{project.impact}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-7 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
                    {project.highlights && project.highlights.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                          Resume Highlights
                        </p>
                        <ul className="mt-3 space-y-2">
                          {project.highlights.map((highlight, index) => (
                            <li key={index} className="flex gap-2 text-sm leading-6 text-gray-300">
                              <Sparkles
                                size={15}
                                className="mt-1 shrink-0 text-emerald-300"
                                aria-hidden="true"
                              />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Stack
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`px-2.5 py-1 text-xs rounded-full border ${getTagColor(tag)}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-4">
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                            aria-label={`View page of ${project.title}`}
                          >
                            <ExternalLink size={18} className="mr-1.5" />
                            <span>Page</span>
                          </a>
                        )}

                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                            aria-label={`View code for ${project.title} on GitHub`}
                          >
                            <Github size={18} className="mr-1.5" />
                            <span>Code</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <Button
            href="https://github.com/EdwardLTC"
            label="View More Projects"
            icon={<Github size={18} />}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
            iconType="default"
            className="inline-flex"
          />
        </div>
      </div>
    </section>
  );
};

export { Projects };
