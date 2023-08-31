'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/app/variants';
import Avatar from '../Avatar';
export default function AvatarContainer() {
  return (
    <motion.div
      variants={fadeIn('right', 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="hidden xl:flex absolute bottom-0 -left-[370px]"
    >
      <Avatar />
    </motion.div>
  );
}
