'use client';
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, Reorder, useAnimate } from 'framer-motion';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from 'react-icons/si';
import { fadeIn } from '@/app/variants';
import AboutReorderTab from './AboutReorderTab';

const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="icon-array-1" />,
          <FaCss3 key="icon-array-2" />,
          <FaJs key="icon-array-3" />,
          <FaReact key="icon-array-4" />,
          <SiNextdotjs key="icon-array-5" />,
          <SiFramer key="icon-array-6" />,
          <FaWordpress key="icon-array-7" />,
        ],
        stage: null,
      },
      {
        title: 'UI/UX Design',
        icons: [
          <FaFigma key="icon-array-7" />,
          <SiAdobexd key="icon-array-8" />,
          <SiAdobephotoshop key="icon-array-9" />,
        ],
        stage: null,
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
        icons: null,
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
        icons: null,
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
        icons: null,
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
        icons: null,
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
        icons: null,
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
        icons: null,
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
        icons: null,
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
        icons: null,
      },
    ],
  },
];
export default function AboutTabsReorder() {
  const [index, setIndex] = useState(0);
  const [tabs, setTabs] = useState<string[]>([]);
  const [selectedTab, setSelectedTab] = useState<string>('');

  function findAndSetSelectedTab(selectedVal: string) {
    const idx = aboutData.findIndex((ab) => ab.title === selectedVal);
    setIndex(idx);
    setSelectedTab(selectedVal);
  }

  useEffect(() => {
    const tb = aboutData.map((ab) => ab.title);
    setTabs(tb);
    setSelectedTab(tb[0]);
  }, []);

  return (
    <motion.div
      variants={fadeIn('left', 0.4)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
    >
      <Reorder.Group
        as="ul"
        axis="x"
        onReorder={setTabs}
        values={tabs}
        className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4"
      >
        {tabs.map((item, itemIndex) => (
          <AboutReorderTab
            key={itemIndex + item}
            isSelected={item === selectedTab}
            findAndSetSelectedTab={findAndSetSelectedTab}
            item={item}
          />
        ))}
      </Reorder.Group>
      <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
        {aboutData[index].info.map((item, itemIndex) => (
          <div key={itemIndex + 'info'}>
            <AnimatePresence mode="wait">
              <motion.div
                variants={fadeIn('right', 0.2)}
                initial="hidden"
                animate="show"
                key={aboutData[index].title}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {item.icons?.map((icon: any, i: number) => (
                    <div
                      key={i + 'icon'}
                      className="text-2xl transition-all duration-500 text-white"
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
