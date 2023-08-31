'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/app/variants';
import Avatar from '../Avatar';
export default function AvatarContainer() {
  return (
    <motion.div
      variants={fadeIn('up', 0.5)}
      initial="hidden"
      animate="show"
      exit="hidden"
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
    >
      <Avatar />
    </motion.div>
  );
}
