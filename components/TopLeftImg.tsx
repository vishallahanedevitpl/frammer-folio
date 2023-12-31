import Image from 'next/image';
import React from 'react';

export default function TopLeftImg() {
  return (
    <div className="absolute top-0 left-0 mix-blend-color-dodge z-0 w-[200px] xl:w-[400px] opacity-50">
      <Image src="/top-left-img.png" width={400} height={400} alt="alt" />
    </div>
  );
}
