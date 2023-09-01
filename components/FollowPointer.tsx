import React from 'react';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useFollowPointer } from '@/hooks/use-follow-pointer';
export default function FollowPointer() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  return (
    <motion.div
      ref={ref}
      className="w-10 h-10 rounded-full bg-accent/80"
      animate={{ x, y }}
      transition={{
        type: 'spring',
        damping: 3,
        stiffness: 50,
        restDelta: 0.001,
      }}
    />
  );
}
