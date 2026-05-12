'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Resume: React.FC = () => {
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
          className="resume-print-card relative w-full max-w-5xl overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-800/30 backdrop-blur-sm shadow-xl shadow-black/20"
          variants={fadeUp}
        >
          <motion.header
            className="relative border-b border-gray-700/50 px-6 py-8 sm:px-10"
            variants={fadeUp}
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">LÊ THÀNH</h2>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                CÔNG
              </h2>
            </div>

            <div className="mt-3 text-xs sm:text-sm uppercase tracking-[0.25em] text-gray-400">
              Junior Lead Backend Engineer{' '}
              <span className="text-blue-300">{'// InsurTech · FinTech · Microservices'}</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-300">
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Hồ Chí Minh City, Việt Nam
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                0794628973
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <a
                  href="mailto:lethanhcong06062003@gmail.com"
                  className="text-blue-300 hover:text-emerald-400 transition-colors"
                >
                  lethanhcong06062003@gmail.com
                </a>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <a
                  href="https://edwardltc.github.io/profile/"
                  className="text-blue-300 hover:text-emerald-400 transition-colors"
                >
                  edwardltc.github.io/profile
                </a>
              </div>
            </div>
          </motion.header>

          <motion.div className="grid grid-cols-1 lg:grid-cols-12" variants={fadeUp}>
            <main className="lg:col-span-8 border-b lg:border-b-0 lg:border-r border-gray-700/50 px-6 py-8 sm:px-10">
              {/* Experience */}
              <motion.section className="mb-10" variants={fadeUp}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">
                    Experience
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-gray-700/70 to-transparent" />
                </div>

                <motion.div className="space-y-8" variants={container}>
                  <motion.div
                    className="pb-8 border-b border-gray-700/50 last:pb-0 last:border-b-0"
                    variants={fadeUp}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold text-white">Fissolution</h3>
                      <span className="shrink-0 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                        Jul 2023 — Present
                      </span>
                    </div>

                    <div className="mt-1 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                      Junior Lead Backend Engineer
                    </div>

                    <p className="mt-3 text-sm text-gray-300 leading-relaxed italic">
                      InsurTech &amp; FinTech platform — modular monolith (microservice-ready)
                      backend for insurance/finance product suite built on 4 NestJS + Prisma
                      services.
                    </p>

                    <ul className="mt-4 space-y-2 text-sm text-gray-300">
                      {[
                        <>
                          Integrated{' '}
                          <strong className="text-white font-semibold">
                            insurance provider APIs
                          </strong>{' '}
                          and <strong className="text-white font-semibold">Payment Gateway</strong>{' '}
                          across multiple product lines.
                        </>,
                        <>
                          Designed and implemented{' '}
                          <strong className="text-white font-semibold">
                            end-to-end order + contract lifecycle
                          </strong>{' '}
                          management.
                        </>,
                        <>
                          Standardized{' '}
                          <strong className="text-white font-semibold">API contracts</strong>{' '}
                          between multiple insurance and financial service providers for
                          interoperability.
                        </>,
                        <>
                          Built{' '}
                          <strong className="text-white font-semibold">
                            affiliate &amp; partner integrations
                          </strong>{' '}
                          including tracking, orders, and disbursement items.
                        </>,
                        <>
                          Automated insurance creation workflows,{' '}
                          <strong className="text-white font-semibold">
                            reducing manual operations by 40%
                          </strong>
                          .
                        </>,
                        <>
                          Built{' '}
                          <strong className="text-white font-semibold">
                            payments + payouts flows
                          </strong>
                          : withdrawals, bank/payment info handling, and reconciliation reporting.
                        </>,
                        <>
                          Integrated <strong className="text-white font-semibold">AWS IaaS</strong>{' '}
                          (EC2, RDS, S3) for cloud infrastructure.
                        </>,
                        <>
                          Delivered{' '}
                          <strong className="text-white font-semibold">
                            admin / corp / provider portal
                          </strong>{' '}
                          backend APIs as separate services.
                        </>,
                        <>
                          Built{' '}
                          <strong className="text-white font-semibold">
                            audit logging &amp; change history
                          </strong>{' '}
                          (Audit / AuditEvent / AuditEntry / AuditReadLog) for compliance.
                        </>,
                      ].map((item, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {['NestJS', 'Prisma', 'PostgreSQL', 'AWS EC2', 'RDS', 'S3', 'TypeScript'].map(
                        tag => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs rounded-full border bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
                          >
                            {tag}
                          </span>
                        )
                      )}
                    </div>
                  </motion.div>

                  <motion.div
                    className="pb-8 border-b border-gray-700/50 last:pb-0 last:border-b-0"
                    variants={fadeUp}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold text-white">FPT Education</h3>
                      <span className="shrink-0 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                        Mar 2023 — Mar 2025
                      </span>
                    </div>

                    <div className="mt-1 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                      Backend Freelancer
                    </div>

                    <ul className="mt-4 space-y-2 text-sm text-gray-300">
                      {[
                        <>
                          <strong className="text-white font-semibold">MyFPS</strong> — App for
                          parents to monitor children&apos;s learning progress.
                        </>,
                        <>
                          <strong className="text-white font-semibold">MyFPL</strong> — App for
                          students to register for school services and view grades.
                        </>,
                        <>
                          <strong className="text-white font-semibold">FPL Save Electricity</strong>{' '}
                          — App for IoT device management app for school environments.
                        </>,
                      ].map((item, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {['NestJS', 'Node.js', 'PostgreSQL', 'Socket.IO'].map(tag => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full border bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.section>

              {/* Projects */}
              <motion.section variants={fadeUp}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">
                    Projects
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-gray-700/70 to-transparent" />
                </div>

                <motion.div className="space-y-8" variants={container}>
                  <motion.div
                    className="pb-8 border-b border-gray-700/50 last:pb-0 last:border-b-0"
                    variants={fadeUp}
                  >
                    <h3 className="text-lg font-semibold text-white">
                      E-Commerce Microservice System
                    </h3>
                    <a
                      className="mt-2 inline-block text-xs text-blue-300 hover:text-emerald-400 transition-colors"
                      href="https://github.com/EdwardLTC/e-commerce-microservice"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/EdwardLTC/e-commerce-microservice
                    </a>

                    <ul className="mt-4 space-y-2 text-sm text-gray-300">
                      {[
                        <>
                          Designed a{' '}
                          <strong className="text-white font-semibold">
                            polyglot microservice
                          </strong>{' '}
                          system spanning 4 languages/frameworks.
                        </>,
                        <>
                          Distributed transactions via{' '}
                          <strong className="text-white font-semibold">Saga pattern</strong>{' '}
                          (choreography) for order processing.
                        </>,
                        <>
                          Internal <strong className="text-white font-semibold">gRPC</strong>{' '}
                          service-to-service communication.
                        </>,
                        <>
                          <strong className="text-white font-semibold">
                            Transaction Outbox pattern
                          </strong>{' '}
                          for reliable event publishing post-DB commit.
                        </>,
                        <>
                          Event-driven architecture with{' '}
                          <strong className="text-white font-semibold">Apache Kafka</strong> + Avro
                          schema contracts.
                        </>,
                      ].map((item, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {[
                        'Spring Boot',
                        'NestJS',
                        'ASP.Net Core',
                        'Go',
                        'Kafka',
                        'gRPC',
                        'Redis',
                        'PostgreSQL',
                      ].map(tag => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full border bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    className="pb-8 border-b border-gray-700/50 last:pb-0 last:border-b-0"
                    variants={fadeUp}
                  >
                    <h3 className="text-lg font-semibold text-white">Meta Chain API</h3>
                    <div className="mt-1 text-xs text-gray-400">
                      UIT thesis — <em>MetaChain - NFT Marketplace</em>
                    </div>
                    <a
                      className="mt-2 inline-block text-xs text-blue-300 hover:text-emerald-400 transition-colors"
                      href="https://github.com/EdwardLTC/meta-chain-api"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/EdwardLTC/meta-chain-api
                    </a>

                    <ul className="mt-4 space-y-2 text-sm text-gray-300">
                      {[
                        <>
                          NestJS API for{' '}
                          <strong className="text-white font-semibold">
                            collections, tokens, listings, and likes
                          </strong>{' '}
                          with Prisma on PostgreSQL, Redis, JWT, and Swagger.
                        </>,
                        <>
                          <strong className="text-white font-semibold">Chain listener</strong> over
                          WebSocket: replay missed logs, cursor-based ingestion, reconcile domain
                          state with Factory / Marketplace events.
                        </>,
                        <>
                          <strong className="text-white font-semibold">Hardhat</strong> contracts
                          (OpenZeppelin) and deployment scripts;{' '}
                          <strong className="text-white font-semibold">ethers v6</strong> for RPC
                          reads and wallet-signed listing flows.
                        </>,
                        <>
                          Off-chain media via{' '}
                          <strong className="text-white font-semibold">
                            IPFS (Pinata / NFT.Storage)
                          </strong>{' '}
                          and optional <strong className="text-white font-semibold">Azure Blob</strong>{' '}
                          storage.
                        </>,
                      ].map((item, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {[
                        'NestJS',
                        'Prisma',
                        'PostgreSQL',
                        'Redis',
                        'Solidity',
                        'Hardhat',
                        'OpenZeppelin',
                        'TypeScript',
                      ].map(tag => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full border bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    className="pb-8 border-b border-gray-700/50 last:pb-0 last:border-b-0"
                    variants={fadeUp}
                  >
                    <h3 className="text-lg font-semibold text-white">DogDom API</h3>
                    <div className="mt-1 text-xs text-gray-400">
                      FPT Polytechnic thesis — <em>Dogdom – Social Network for Pet Lovers</em>
                    </div>
                    <a
                      className="mt-2 inline-block text-xs text-blue-300 hover:text-emerald-400 transition-colors"
                      href="https://github.com/EdwardLTC/dogdom-api"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/EdwardLTC/dogdom-api
                    </a>

                    <ul className="mt-4 space-y-2 text-sm text-gray-300">
                      {[
                        <>
                          <strong className="text-white font-semibold">Express + TypeScript</strong>{' '}
                          REST API using routing-controllers, class-validator, and Swagger/OpenAPI
                          docs.
                        </>,
                        <>
                          <strong className="text-white font-semibold">MongoDB + Mongoose</strong>{' '}
                          for domain models;{' '}
                          <strong className="text-white font-semibold">Redis / Redis OM</strong> for
                          cache-oriented data paths.
                        </>,
                        <>
                          <strong className="text-white font-semibold">Socket.IO</strong> for
                          real-time features; <strong className="text-white font-semibold">Elasticsearch</strong>{' '}
                          for search-heavy queries.
                        </>,
                        <>
                          <strong className="text-white font-semibold">Azure</strong> integrations
                          (Blob, Notification Hubs, Communication Email) and{' '}
                          <strong className="text-white font-semibold">GitHub Actions → Azure Web Apps</strong>{' '}
                          CI/CD with PM2/Docker-style deploy flows.
                        </>,
                      ].map((item, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {[
                        'TypeScript',
                        'Express',
                        'MongoDB',
                        'Mongoose',
                        'Redis',
                        'Socket.IO',
                        'Elasticsearch',
                        'Azure',
                      ].map(tag => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full border bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.section>
            </main>

            <aside className="lg:col-span-4 px-6 py-8 sm:px-10 bg-gray-900/20">
              {/* Education */}
              <motion.section className="mb-10" variants={fadeUp}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">
                    Education
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-gray-700/70 to-transparent" />
                </div>

                <motion.div className="space-y-6" variants={container}>
                  {[
                    {
                      degree: 'B.Sc. Information Technology',
                      school: 'UIT — VNUHCM',
                      date: 'Sep 2024 — Jun 2026',
                      detail: (
                        <>
                          Specialization: Information Technology
                          <br />
                          Thesis: <em>MetaChain - NFT Marketplace</em>
                        </>
                      ),
                    },
                    {
                      degree: 'Applied B.Sc. Software Engineering',
                      school: 'FPT Polytechnic',
                      date: 'Sep 2021 — Jan 2024',
                      detail: (
                        <>
                          Specialization: Mobile Programming
                          <br />
                          Thesis: <em>Dogdom – Social Network for Pet Lovers</em>
                        </>
                      ),
                    },
                  ].map(item => (
                    <motion.div
                      key={item.degree}
                      className="pb-6 border-b border-gray-700/50 last:pb-0 last:border-b-0"
                      variants={fadeUp}
                    >
                      <div className="text-sm font-semibold text-white">{item.degree}</div>
                      <div className="mt-1 text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                        {item.school}
                      </div>
                      <div className="mt-2 text-xs text-gray-400">{item.date}</div>
                      <div className="mt-3 text-sm text-gray-300 leading-relaxed">
                        {item.detail}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>

              {/* Skills */}
              <motion.section className="mb-10" variants={fadeUp}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">
                    Skills
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-gray-700/70 to-transparent" />
                </div>

                <motion.div variants={container}>
                  {[
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
                  ].map(group => (
                    <motion.div key={group.label} className="mb-6 last:mb-0" variants={fadeUp}>
                      <div className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-3">
                        {group.label}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map(skill => (
                          <span
                            key={skill}
                            className={[
                              'px-3 py-1 text-xs rounded-full border',
                              group.highlight
                                ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
                                : 'bg-gray-800/60 text-gray-300 border-gray-700/60',
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

              {/* Languages */}
              <motion.section className="mb-10" variants={fadeUp}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">
                    Languages
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-gray-700/70 to-transparent" />
                </div>

                <motion.div variants={container}>
                  {[
                    { name: 'Vietnamese', level: 'Native', pct: 100 },
                    { name: 'English', level: 'Professional', pct: 72 },
                  ].map(lang => (
                    <motion.div key={lang.name} className="mb-5 last:mb-0" variants={fadeUp}>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-white">{lang.name}</span>
                        <span className="text-xs text-gray-400">{lang.level}</span>
                      </div>
                      <div className="mt-2 h-1.5 rounded-full bg-gray-700/60 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-400 to-blue-500"
                          style={{ width: `${lang.pct}%` }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>

              {/* Awards */}
              <motion.section variants={fadeUp}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">
                    Awards
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-gray-700/70 to-transparent" />
                </div>

                <motion.div className="space-y-3 text-sm text-gray-300" variants={container}>
                  {[
                    'Academic Preparatory English Level 3 — Topnotch 2',
                    'Finalist — Startup Kite Competition',
                  ].map(award => (
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
            className="flex flex-col sm:flex-row gap-2 sm:gap-0 sm:items-center sm:justify-between border-t border-gray-700/50 px-6 py-4 sm:px-10 bg-gray-900/20"
            variants={fadeUp}
          >
            <span className="text-xs tracking-[0.25em] uppercase text-gray-400">
              LÊ THÀNH CÔNG ·{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                Backend Engineer
              </span>
            </span>
            <span className="text-xs tracking-[0.25em] uppercase text-gray-500">
              HỒ CHÍ MINH CITY · 2026
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export { Resume };
