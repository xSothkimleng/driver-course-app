'use client';
import { Inter } from 'next/font/google';
import '../globals.css';
import { ThemeProvider } from '@material-tailwind/react';
import StyledComponentsRegistry from '../registry';
import NextTopLoader from 'nextjs-toploader';
import Navbar from '@/components/navbar';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>
        <ThemeProvider>
          <StyledComponentsRegistry>
            <NextTopLoader />
            <Navbar />
            {children}
          </StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
