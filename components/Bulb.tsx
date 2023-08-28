import Image from 'next/image';
import React from 'react';

export default function Bulb() {
  return (
    <div className="absolute -left-32 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]">
      <Image
        src="/bulb.png"
        width={260}
        height={200}
        alt=""
        className="w-full h-full"
      />
    </div>
  );
}
