'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/app/variants';
import CountUp from 'react-countup';
export default function AboutData() {
  return (
    <div className="flex-1 flex flex-col justify-center">
      <motion.h2
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="h2"
      >
        Captivating <span className="text-accent">stories</span> birth
        magnificent designs.
      </motion.h2>
      <motion.p
        variants={fadeIn('right', 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
      >
        10 years ago, I began freelancing as a developer. Since then, I&apos;ve
        done remote work for agencies, consulted for startups and collaborated
        on digital producs for business and consumer use
      </motion.p>
      <motion.div
        variants={fadeIn('right', 0.6)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
      >
        <div className="flex flex-1 xl:gap-x-6">
          <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
            <div className="text-2xl xl:text-3xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={10} duration={5} /> +
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
              Years of experience
            </div>
          </div>
          <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
            <div className="text-2xl xl:text-3xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={250} duration={5} /> +
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
              Satified clients
            </div>
          </div>
          <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
            <div className="text-2xl xl:text-3xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={650} duration={5} /> +
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
              Finished projects
            </div>
          </div>
          <div className="relative flex-1">
            <div className="text-2xl xl:text-3xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={8} duration={5} /> +
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
              Awards Won
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
