import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../globals.css';
import { ReactNode } from 'react';
import { RootHeader } from '../../shared/components/RootHeader';

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Online medicine',
  description: 'Online medicine main page',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RootHeader />
        {children}
      </body>
    </html>
  );
}
