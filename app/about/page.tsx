import React from 'react';
import Circles from '@/components/Circles';
import AvatarContainer from '@/components/about/AvatarContainer';
import AboutData from '@/components/about/AboutData';
import AboutTabs from '@/components/about/AboutTabs';

export default function About() {
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <AvatarContainer />
      <div className="container mx-auto flex flex-col items-center xl:flex-row gap-x-6 h-full">
        <AboutData />
        <AboutTabs />
      </div>
    </div>
  );
}
