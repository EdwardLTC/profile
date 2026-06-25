'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { resumeContent } from '@/app/config/resume';
import type { ResumeContact, ResumeRichPart } from '@/app/types/resume';

const strongClass = 'text-foreground font-semibold';

function ResumeRichInline({ parts }: { parts: ResumeRichPart[] }) {
  return (
    <>
      {parts.map((part, i) => {
        if (part.kind === 'text') {
          return <React.Fragment key={i}>{part.text}</React.Fragment>;
        }
        if (part.kind === 'strong') {
          return (
            <strong key={i} className={strongClass}>
              {part.text}
            </strong>
          );
        }
        return <em key={i}>{part.text}</em>;
      })}
    </>
  );
}

function ContactRow({ contact }: { contact: ResumeContact }) {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-emerald-400" />
      {contact.kind === 'plain' ? (
        contact.text
      ) : (
        <a
          href={contact.href}
          className="text-blue-700 dark:text-blue-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
        >
          {contact.text}
        </a>
      )}
    </div>
  );
}

const Resume: React.FC = () => {
  const {
    header,
    sectionTitles,
    careerPath,
    experience,
    projects,
    education,
    skillGroups,
    languages,
    awards,
    footer,
  } = resumeContent;

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="w-full py-10 px-4 sm:px-6 lg:px-8">
      <style>{`
        @media print {
          .resume-print-root {
            background: white !important;
            color: #111 !important;
          }
          .resume-print-card {
            box-shadow: none !important;
            border: 1px solid #e5e7eb !important;
            background: white !important;
          }
        }
      `}</style>

      <motion.div
        className="resume-print-root flex justify-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="resume-print-card relative w-full max-w-5xl overflow-hidden rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm shadow-xl shadow-black/10 dark:shadow-black/25"
          variants={fadeUp}
        >
          <motion.header
            className="relative border-b border-border/80 px-6 py-8 sm:px-10"
            variants={fadeUp}
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                {header.firstName}
              </h2>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                {header.lastName}
              </h2>
            </div>

            <div className="mt-3 text-xs sm:text-sm uppercase tracking-[0.25em] text-muted-foreground">
              {header.title}{' '}
              <span className="text-blue-700 dark:text-blue-300">{header.tagline}</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
              {header.contacts.map((contact, idx) => (
                <ContactRow key={idx} contact={contact} />
              ))}
            </div>
          </motion.header>

          <motion.section
            className="border-b border-border/80 px-6 py-8 sm:px-10 bg-muted/30"
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-800 dark:text-emerald-300">
                {sectionTitles.careerPath}
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            </div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {careerPath.lines.map((line, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span className="leading-relaxed">
                    <ResumeRichInline parts={line} />
                  </span>
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.div className="grid grid-cols-1 lg:grid-cols-12" variants={fadeUp}>
            <main className="lg:col-span-8 border-b lg:border-b-0 lg:border-r border-border/80 px-6 py-8 sm:px-10">
              <motion.section className="mb-10" variants={fadeUp}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-800 dark:text-emerald-300">
                    {sectionTitles.experience}
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                </div>

                <motion.div className="space-y-8" variants={container}>
                  {experience.map(job => (
                    <motion.div
                      key={job.company}
                      className="pb-8 border-b border-border/80 last:pb-0 last:border-b-0"
                      variants={fadeUp}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg font-semibold text-foreground">{job.company}</h3>
                        <span className="shrink-0 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-800 dark:text-blue-300">
                          {job.dateRange}
                        </span>
                      </div>

                      <div className="mt-1 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                        {job.role}
                      </div>

                      {job.summary ? (
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed italic">
                          {job.summary}
                        </p>
                      ) : null}

                      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                        {job.bullets.map((line, idx) => (
                          <li key={idx} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                            <span className="leading-relaxed">
                              <ResumeRichInline parts={line} />
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {job.tags.map(tag => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs rounded-full border bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border-emerald-500/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>

              <motion.section variants={fadeUp}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-800 dark:text-emerald-300">
                    {sectionTitles.projects}
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                </div>

                <motion.div className="space-y-8" variants={container}>
                  {projects.map(project => (
                    <motion.div
                      key={project.title}
                      className="pb-8 border-b border-border/80 last:pb-0 last:border-b-0"
                      variants={fadeUp}
                    >
                      <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                      {project.subtitle ? (
                        <div className="mt-1 text-xs text-muted-foreground">
                          <ResumeRichInline parts={project.subtitle} />
                        </div>
                      ) : null}
                      <a
                        className="mt-2 inline-block text-xs text-blue-700 dark:text-blue-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                        href={project.linkHref}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.linkLabel}
                      </a>

                      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                        {project.bullets.map((line, idx) => (
                          <li key={idx} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                            <span className="leading-relaxed">
                              <ResumeRichInline parts={line} />
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs rounded-full border bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border-emerald-500/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>
            </main>

            <aside className="lg:col-span-4 px-6 py-8 sm:px-10 bg-muted/25">
              <motion.section className="mb-10" variants={fadeUp}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-800 dark:text-emerald-300">
                    {sectionTitles.education}
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                </div>

                <motion.div className="space-y-6" variants={container}>
                  {education.map(item => (
                    <motion.div
                      key={item.degree}
                      className="pb-6 border-b border-border/80 last:pb-0 last:border-b-0"
                      variants={fadeUp}
                    >
                      <div className="text-sm font-semibold text-foreground">{item.degree}</div>
                      <div className="mt-1 text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                        {item.school}
                      </div>
                      <div className="mt-2 text-xs text-muted-foreground">{item.date}</div>
                      <div className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {item.specialization}
                        <br />
                        Thesis: <em>{item.thesisTitle}</em>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>

              <motion.section className="mb-10" variants={fadeUp}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-800 dark:text-emerald-300">
                    {sectionTitles.skills}
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                </div>

                <motion.div variants={container}>
                  {skillGroups.map(group => (
                    <motion.div key={group.label} className="mb-6 last:mb-0" variants={fadeUp}>
                      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">
                        {group.label}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map(skill => (
                          <span
                            key={skill}
                            className={[
                              'px-3 py-1 text-xs rounded-full border',
                              group.highlight
                                ? 'bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border-emerald-500/20'
                                : 'bg-muted/80 text-muted-foreground border-border/60',
                            ].join(' ')}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>

              <motion.section className="mb-10" variants={fadeUp}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-800 dark:text-emerald-300">
                    {sectionTitles.languages}
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                </div>

                <motion.div variants={container}>
                  {languages.map(lang => (
                    <motion.div key={lang.name} className="mb-5 last:mb-0 " variants={fadeUp}>
                      <span
                        key={lang.name}
                        className={[
                          'px-3 py-1 text-xs rounded-full border',
                          'bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border-emerald-500/20',
                        ].join(' ')}
                      >
                        {lang.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>

              <motion.section variants={fadeUp}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-800 dark:text-emerald-300">
                    {sectionTitles.awards}
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                </div>

                <motion.div
                  className="space-y-3 text-sm text-muted-foreground"
                  variants={container}
                >
                  {awards.map(award => (
                    <motion.div key={award} className="flex gap-3" variants={fadeUp}>
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span className="leading-relaxed">{award}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>
            </aside>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-2 sm:gap-0 sm:items-center sm:justify-between border-t border-border/80 px-6 py-4 sm:px-10 bg-muted/25"
            variants={fadeUp}
          >
            <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground">
              {footer.fullName} ·{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                {footer.roleLabel}
              </span>
            </span>
            <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground/80">
              {footer.locationDate}
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export { Resume };
