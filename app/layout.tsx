'use client';
import './globals.css';
// import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import TopLeftImg from '@/components/TopLeftImg';
import Nav from '@/components/Nav';
import Header from '@/components/Header';
import Transition from '@/components/Transition';
import FollowPointer from '@/components/FollowPointer';

const inter = Inter({ subsets: ['latin'] });
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});
// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <AnimatePresence mode="wait"> */}
        <Transition />
        <div className="h-full">
          <div
            className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
          >
            <TopLeftImg />
            <Nav />
            <Header />
            {children}
          </div>
        </div>
        {/* </AnimatePresence> */}
        <FollowPointer />
      </body>
    </html>
  );
}
