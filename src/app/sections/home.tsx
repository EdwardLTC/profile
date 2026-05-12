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

'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react';
import { portfolioConfig } from '@/app/config';
import { Button } from '@/app/components/button';
import dynamic from 'next/dynamic';
import { isMinimal } from '@/app/utils';
import { useRouter } from 'next/navigation';

const TechSphere = dynamic(
  async () => {
    if (isMinimal) {
      return Promise.resolve(() => null);
    }
    const mod = await import('@/app/components/tech-sphere');
    return mod.TechSphere;
  },
  { ssr: false }
);

interface HomeProps {
  onConnectClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const Home: React.FC<HomeProps> = ({ onConnectClick }) => {
  const config = portfolioConfig.sections.home;
  const router = useRouter();

  // For the typing effect
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isNavigatingResume, setIsNavigatingResume] = useState(false);

  // Handle typing effect
  useEffect(() => {
    if (isMinimal) return;

    if (index < config.typingTexts[currentPhrase].length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + config.typingTexts[currentPhrase][index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setIndex(0);
        setText('');
        setCurrentPhrase(prev => (prev + 1) % config.typingTexts.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [index, currentPhrase, config.typingTexts]);

  const onResumeClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (isNavigatingResume) return;

    setIsNavigatingResume(true);
    router.push('/resume');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center relative pt-24 md:pt-24 lg:pt-16 pb-16 md:pb-12 overflow-hidden"
    >
      <AnimatePresence>
        {isNavigatingResume && (
          <motion.div
            className="fixed inset-0 z-[60] pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-page-from via-page-via to-page-to"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.95 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1, filter: 'blur(0px)' }}
              animate={{ scale: 1.04, filter: 'blur(3px)' }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
              className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent"
              initial={{ opacity: 0, y: -2 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient background with mesh pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(74, 222, 128, 0.1) 0%, transparent 8%)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/3 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl opacity-40"
          animate={{
            x: [0, 10, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl opacity-40"
          animate={{
            x: [0, -10, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex items-center h-full"
        animate={
          isNavigatingResume
            ? { opacity: 0, y: -6, scale: 0.99, filter: 'blur(1px)' }
            : { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }
        }
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center w-full">
          {/* Main content area */}
          <motion.div
            className="lg:col-span-7 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main heading */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-tight"
              variants={itemVariants}
            >
              <span className="text-foreground">{config.greeting} </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                {config.name}
              </span>
            </motion.h1>

            {/* Animated typing text */}
            <motion.div variants={itemVariants} className="h-12 mb-8 overflow-hidden">
              <div className="relative h-full flex items-center justify-center lg:justify-start">
                {isMinimal ? (
                  // For mobile
                  <span className="text-xl sm:text-2xl text-muted-foreground flex justify-center flex-wrap">
                    <span className="mr-2">I&apos;m passionate about</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                      {config.typingTexts[0]}
                    </span>
                  </span>
                ) : (
                  // For desktop
                  <span className="text-xl sm:text-2xl text-muted-foreground flex flex-wrap">
                    <span className="mr-2">I&apos;m passionate about</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                      {text}
                    </span>
                    <span className="animate-blink ml-1 h-6 w-0.5 bg-emerald-400 self-center"></span>
                  </span>
                )}
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8"
            >
              {config.description}
            </motion.p>

            {/* Action buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6"
            >
              <Button
                href="/resume"
                label="View Resume"
                icon={<ArrowUpRight size={18} />}
                variant="primary"
                iconType="default"
                onClick={onResumeClick}
              />

              <Button
                href="#connect"
                label="Connect With Me"
                icon={<ArrowRight size={18} />}
                variant="outline"
                onClick={onConnectClick}
                iconType="arrow"
              />
            </motion.div>
          </motion.div>
          {/* Interactive Tech Sphere */}
          {!isMinimal && (
            <motion.div
              className="lg:col-span-5 h-[280px] sm:h-[320px] md:h-[340px] lg:h-[350px] relative mt-2 sm:mt-0 mb-16 sm:mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {/* TechSphere component */}
              <TechSphere />

              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-48 h-12 bg-gradient-to-t from-background to-transparent blur-lg"></div>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-muted-foreground text-sm mb-2">{config.scrollIndicatorText}</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="text-emerald-600 dark:text-emerald-400" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export { Home };
