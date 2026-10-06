'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  ExternalLink,
  Github,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { Button } from '@/app/components/button';
import { projects } from '@/app/config/projects';
import { Project } from '@/app/types/types';

const professionalProjects = projects.filter(p => p.category === 'professional');
const personalProjects = projects.filter(p => p.category === 'personal');

// ─── shared helpers ──────────────────────────────────────────────────────────

const getTagColor = (tag: string) => {
  const tagColors: Record<string, string> = {
    TypeScript:
      'bg-blue-600/15 text-blue-800 border-blue-600/30 dark:bg-blue-600/20 dark:text-blue-300 dark:border-blue-600/20',
    Express:
      'bg-neutral-500/15 text-neutral-800 border-neutral-500/30 dark:bg-neutral-500/20 dark:text-neutral-200 dark:border-neutral-500/30',
    MongoDB:
      'bg-green-600/15 text-green-900 border-green-600/30 dark:bg-green-600/20 dark:text-green-200 dark:border-green-600/20',
    Mongoose:
      'bg-green-700/15 text-green-900 border-green-700/30 dark:bg-green-700/20 dark:text-green-200 dark:border-green-700/20',
    Elasticsearch:
      'bg-teal-600/15 text-teal-900 border-teal-600/30 dark:bg-teal-600/20 dark:text-teal-200 dark:border-teal-600/20',
    'Socket.IO':
      'bg-fuchsia-600/15 text-fuchsia-900 border-fuchsia-600/30 dark:bg-fuchsia-600/20 dark:text-fuchsia-200 dark:border-fuchsia-600/20',
    NestJS:
      'bg-red-500/15 text-red-900 border-red-500/30 dark:bg-red-500/20 dark:text-red-200 dark:border-red-500/20',
    Go: 'bg-cyan-600/15 text-cyan-900 border-cyan-600/30 dark:bg-cyan-600/20 dark:text-cyan-300 dark:border-cyan-600/20',
    PostgreSQL:
      'bg-blue-700/15 text-blue-950 border-blue-700/30 dark:bg-blue-700/20 dark:text-blue-300 dark:border-blue-700/20',
    Kafka:
      'bg-orange-500/15 text-orange-950 border-orange-500/30 dark:bg-orange-500/20 dark:text-orange-200 dark:border-orange-500/20',
    gRPC:
      'bg-violet-500/15 text-violet-950 border-violet-500/30 dark:bg-violet-500/20 dark:text-violet-200 dark:border-violet-500/20',
    Prisma:
      'bg-slate-500/15 text-slate-900 border-slate-500/30 dark:bg-slate-500/20 dark:text-slate-200 dark:border-slate-500/20',
    Redis:
      'bg-red-600/15 text-red-950 border-red-600/30 dark:bg-red-600/20 dark:text-red-200 dark:border-red-600/20',
    'Spring Boot':
      'bg-lime-500/15 text-lime-950 border-lime-500/30 dark:bg-lime-500/20 dark:text-lime-200 dark:border-lime-500/20',
    'ASP.NET Core':
      'bg-purple-500/15 text-purple-950 border-purple-500/30 dark:bg-purple-500/20 dark:text-purple-200 dark:border-purple-500/20',
    Solidity:
      'bg-gray-500/15 text-gray-900 border-gray-500/30 dark:bg-gray-500/20 dark:text-gray-200 dark:border-gray-500/20',
    Openzeppelin:
      'bg-indigo-500/15 text-indigo-950 border-indigo-500/30 dark:bg-indigo-500/20 dark:text-indigo-200 dark:border-indigo-500/20',
    Hardhat:
      'bg-yellow-500/15 text-yellow-950 border-yellow-500/30 dark:bg-yellow-500/20 dark:text-yellow-200 dark:border-yellow-500/20',
    Ethers:
      'bg-violet-600/15 text-violet-950 border-violet-600/30 dark:bg-violet-600/20 dark:text-violet-200 dark:border-violet-600/20',
    Azure:
      'bg-sky-500/15 text-sky-950 border-sky-500/30 dark:bg-sky-500/20 dark:text-sky-200 dark:border-sky-500/20',
    'AWS EC2':
      'bg-amber-500/15 text-amber-950 border-amber-500/30 dark:bg-amber-500/20 dark:text-amber-200 dark:border-amber-500/20',
    RDS: 'bg-amber-500/15 text-amber-950 border-amber-500/30 dark:bg-amber-500/20 dark:text-amber-200 dark:border-amber-500/20',
    S3: 'bg-amber-500/15 text-amber-950 border-amber-500/30 dark:bg-amber-500/20 dark:text-amber-200 dark:border-amber-500/20',
    Kotlin:
      'bg-violet-600/15 text-violet-900 border-violet-600/30 dark:bg-violet-600/20 dark:text-violet-300 dark:border-violet-600/20',
    'IntelliJ Platform SDK':
      'bg-rose-500/15 text-rose-900 border-rose-500/30 dark:bg-rose-500/20 dark:text-rose-200 dark:border-rose-500/20',
    'Apple Container':
      'bg-sky-600/15 text-sky-900 border-sky-600/30 dark:bg-sky-600/20 dark:text-sky-300 dark:border-sky-600/20',
    'Docker Compose':
      'bg-blue-500/15 text-blue-900 border-blue-500/30 dark:bg-blue-500/20 dark:text-blue-300 dark:border-blue-500/20',
    macOS:
      'bg-slate-500/15 text-slate-900 border-slate-500/30 dark:bg-slate-500/20 dark:text-slate-200 dark:border-slate-500/20',
    Gradle:
      'bg-teal-600/15 text-teal-950 border-teal-600/30 dark:bg-teal-600/20 dark:text-teal-200 dark:border-teal-600/20',
    default:
      'bg-emerald-500/10 text-emerald-800 border-emerald-500/25 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/20',
  };
  return tagColors[tag] || tagColors.default;
};

const TagBadge = ({ tag }: { tag: string }) => (
  <span className={`px-2.5 py-1 text-xs rounded-full border ${getTagColor(tag)}`}>{tag}</span>
);

const ProjectLinks = ({ project }: { project: Project }) => (
  <div className="flex flex-wrap items-center gap-4">
    {project.marketplaceLink && project.marketplaceLink !== project.liveLink && (
      <a
        href={project.marketplaceLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
        aria-label={`View ${project.title} on JetBrains Marketplace`}
      >
        <ExternalLink size={15} />
        <span>Marketplace</span>
      </a>
    )}
    {project.liveLink && (
      <a
        href={project.liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
        aria-label={`View ${project.liveLinkLabel || 'live page'} for ${project.title}`}
      >
        <ExternalLink size={15} />
        <span>{project.liveLinkLabel || 'Live'}</span>
      </a>
    )}
    {project.githubLink && (
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
        aria-label={`View source code of ${project.title} on GitHub`}
      >
        <Github size={15} />
        <span>Code</span>
      </a>
    )}
  </div>
);

// ─── Professional hero card ───────────────────────────────────────────────────

const PROFESSIONAL_META: Record<string, { badge: string; badgeClass: string; date: string }> = {
  'Lead Backend': {
    badge: 'Employed · Full-time',
    badgeClass: 'border-blue-500/30 bg-blue-500/10 text-blue-700 dark:text-blue-300',
    date: 'Jul 2023 — Present',
  },
  'Freelance Contract': {
    badge: 'Freelance · Contract',
    badgeClass: 'border-violet-500/30 bg-violet-500/10 text-violet-700 dark:text-violet-300',
    date: 'Mar 2023 — Mar 2025',
  },
};

const ProfessionalCard = ({ project }: { project: Project }) => {
  const [hovered, setHovered] = useState(false);
  const meta = PROFESSIONAL_META[project.type] ?? {
    badge: 'Professional',
    badgeClass: 'border-blue-500/30 bg-blue-500/10 text-blue-700 dark:text-blue-300',
    date: '',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group"
    >
      <div
        className={`relative rounded-2xl border bg-card/60 backdrop-blur-sm transition-all duration-500 overflow-hidden ${
          hovered
            ? 'border-blue-500/50 shadow-2xl shadow-blue-500/10 -translate-y-1'
            : 'border-border/80 shadow-lg shadow-black/5 dark:shadow-black/20'
        }`}
      >
        {/* top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500" />

        <div className="p-6 sm:p-10">
          {/* Header row */}
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${meta.badgeClass}`}
                >
                  <Briefcase size={12} />
                  {meta.badge}
                </span>
                {meta.date && (
                  <span className="text-xs text-muted-foreground">{meta.date}</span>
                )}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">{project.title}</h3>
              {project.role && (
                <p className="mt-1 text-sm font-semibold text-blue-700 dark:text-blue-300">
                  {project.role}
                </p>
              )}
            </div>
            <span className="inline-flex items-center rounded-lg border border-border/80 bg-muted/50 px-3 py-1.5 text-xs font-medium text-muted-foreground">
              {project.type}
            </span>
          </div>

          {/* Description */}
          <p className="mt-5 text-sm leading-7 text-muted-foreground max-w-3xl">
            {project.description}
          </p>

          {/* Problem statement */}
          {project.problem && (
            <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-700 dark:text-blue-300 mb-2">
                Domain Challenge
              </p>
              <p className="text-sm leading-6 text-muted-foreground">{project.problem}</p>
            </div>
          )}

          {/* Two-column: highlights + stack */}
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {project.highlights && project.highlights.length > 0 && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                  {project.type === 'Freelance Contract' ? 'Delivered Apps' : 'Key Contributions'}
                </p>
                <ul className="space-y-2.5">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2.5 text-sm leading-6 text-muted-foreground">
                      <Sparkles
                        size={14}
                        className="mt-1 shrink-0 text-blue-600 dark:text-blue-400"
                        aria-hidden="true"
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="space-y-6">
              {project.impact && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                    Impact
                  </p>
                  <div className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-4">
                    <p className="text-sm leading-6 text-muted-foreground">{project.impact}</p>
                  </div>
                </div>
              )}

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <TagBadge key={i} tag={tag} />
                  ))}
                </div>
              </div>

              <ProjectLinks project={project} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Personal project showcase tile ──────────────────────────────────────────

const PersonalCard = ({ project, delay }: { project: Project; delay: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex flex-col h-full"
    >
      <div
        className={`flex flex-col h-full rounded-2xl border bg-card/60 backdrop-blur-sm transition-all duration-500 overflow-hidden ${
          hovered
            ? 'border-emerald-500/50 shadow-xl shadow-emerald-500/10 -translate-y-1'
            : 'border-border/80 shadow-lg shadow-black/5 dark:shadow-black/20'
        }`}
      >
        {/* accent bar */}
        <div className="h-0.5 w-full bg-gradient-to-r from-emerald-400 to-blue-500" />

        <div className="flex flex-col flex-1 p-6">
          {/* Project type badge */}
          <div className="flex items-center justify-between mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/8 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
              <Wrench size={11} />
              Personal Project
            </span>
            <span className="text-[11px] text-muted-foreground font-medium">{project.type}</span>
          </div>

          {/* Title + role */}
          <h3 className="text-xl font-bold text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
            {project.title}
          </h3>
          {project.role && (
            <p className="mt-1 text-xs font-semibold text-muted-foreground">{project.role}</p>
          )}

          {/* Description */}
          <p className="mt-3 text-sm leading-6 text-muted-foreground flex-1">{project.description}</p>

          {/* Impact callout */}
          {project.impact && (
            <div className="mt-4 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-4 py-3">
              <p className="text-xs leading-5 text-muted-foreground italic">{project.impact}</p>
            </div>
          )}

          {/* Stack tags */}
          <div className="mt-5">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, i) => (
                <TagBadge key={i} tag={tag} />
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="mt-5 pt-4 border-t border-border/60">
            <ProjectLinks project={project} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Section heading helper ───────────────────────────────────────────────────

const SectionHeading = ({
  label,
  accent,
  description,
}: {
  label: string;
  accent: string;
  description: string;
}) => (
  <motion.div
    className="mb-10"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.45 }}
  >
    <h3
      className={`text-xl font-bold ${accent}`}
    >
      {label}
    </h3>
    <p className="mt-2 text-sm text-muted-foreground max-w-xl">{description}</p>
  </motion.div>
);

// ─── Main section ─────────────────────────────────────────────────────────────

const Projects: React.FC = () => (
  <section id="projects" className="py-24 relative">
    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
    <div className="absolute -right-20 top-1/3 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl" />
    <div className="absolute -left-20 bottom-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* ── Main section title ── */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          My{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
            Work
          </span>
        </h2>
        <div className="mt-4 h-1 w-20 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full" />
        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
          Full-time backend engineering, freelance contracts, open-source developer tooling, and
          architecture explorations — a complete picture of what I build and how I think.
        </p>
      </motion.div>

      {/* ── Professional Experience ── */}
      {professionalProjects.length > 0 && (
        <div className="mb-20">
          <SectionHeading
            label="💼 Professional Experience"
            accent="text-blue-700 dark:text-blue-300"
            description="Paid employment — production systems built as part of my full-time role."
          />
          <div className="space-y-8">
            {professionalProjects.map(project => (
              <ProfessionalCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}

      {/* ── Personal / Pet Projects ── */}
      {personalProjects.length > 0 && (
        <div>
          <SectionHeading
            label="🛠️ Personal Projects"
            accent="text-emerald-700 dark:text-emerald-400"
            description="Side projects, open-source experiments, and thesis work built out of curiosity and passion."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {personalProjects.map((project, i) => (
              <PersonalCard key={project.id} project={project} delay={i * 0.07} />
            ))}
          </div>
        </div>
      )}

      {/* ── CTA ── */}
      <div className="mt-16 text-center">
        <Button
          href="https://github.com/EdwardLTC"
          label="View More on GitHub"
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

export { Projects };
