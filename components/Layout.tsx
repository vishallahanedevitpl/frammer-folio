import React, { ReactNode } from 'react';
import { Sora } from 'next/font/google';
import TopLeftImg from './TopLeftImg';
import Nav from './Nav';
import Header from './Header';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

type LayoutProps = {
  children: ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
}
