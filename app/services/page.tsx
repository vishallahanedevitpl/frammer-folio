import Bulb from '@/components/Bulb';
import Circles from '@/components/Circles';
import ServiceSlider from '@/components/ServiceSlider';
import React from 'react';

export default function Services() {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex flex-col xl:w-[30vw] lg:text-left mb-4 xl:mb-0">
            <h2 className="h2 xl:mt-8">
              My Services <span className="text-accent">.</span>
            </h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              alias unde voluptate et
            </p>
          </div>
          <ServiceSlider />
        </div>
      </div>
      <Bulb />
    </div>
  );
}
