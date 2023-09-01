'use client';
import { Reorder } from 'framer-motion';
import React from 'react';

export default function AboutReorderTab({
  isSelected,
  findAndSetSelectedTab,
  item,
}: any) {
  return (
    <Reorder.Item
      value={item}
      className={`cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]  after:absolute after:-bottom-1 after:left-0 ${
        isSelected
          ? 'text-accent after:w-full after:bg-accent after:transition-all after:duration-300'
          : 'after:bg-white'
      }`}
      onClick={() => findAndSetSelectedTab(item)}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.15 },
      }}
      exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
      //   whileDrag={{ backgroundColor: '#e3e3e3' }}
    >
      {item}
    </Reorder.Item>
  );
}
