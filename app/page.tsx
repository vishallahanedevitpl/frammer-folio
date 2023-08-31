'use client';
import ParticlesContainer from '@/components/ParticlesContainer';
import TitleAndDesc from '@/components/home/TitleAndDesc';
import AvatarContainer from '@/components/home/AvatarContainer';
export default function Home() {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <TitleAndDesc />
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        <ParticlesContainer />
        <AvatarContainer />
      </div>
    </div>
  );
}
