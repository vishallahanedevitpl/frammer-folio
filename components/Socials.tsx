'use client';
import Link from 'next/link';
import React from 'react';
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from 'react-icons/ri';

import { motion } from 'framer-motion';
import { hoverScale, tapScale } from '@/app/variants';
export default function Socials() {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href="https://www.youtube.com/user/DevTelecasts"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <motion.div whileHover={hoverScale} whileTap={tapScale}>
          <RiYoutubeLine />
        </motion.div>
      </Link>
      <Link
        href="https://twitter.com/Devitpl"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <motion.div whileHover={hoverScale} whileTap={tapScale}>
          <RiInstagramLine />
        </motion.div>
      </Link>
      <Link
        href="https://www.facebook.com/devitpl"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <motion.div whileHover={hoverScale} whileTap={tapScale}>
          <RiFacebookBoxLine />
        </motion.div>
      </Link>
      <Link
        href="https://www.youtube.com/user/DevTelecasts"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <motion.div whileHover={hoverScale} whileTap={tapScale}>
          <RiDribbbleLine />
        </motion.div>
      </Link>
      <Link
        href="https://www.youtube.com/user/DevTelecasts"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <motion.div whileHover={hoverScale} whileTap={tapScale}>
          <RiBehanceLine />
        </motion.div>
      </Link>
      <Link
        href="https://www.youtube.com/user/DevTelecasts"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <motion.div whileHover={hoverScale} whileTap={tapScale}>
          <RiPinterestLine />
        </motion.div>
      </Link>
    </div>
  );
}
