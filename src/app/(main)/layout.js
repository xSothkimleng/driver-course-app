'use client';
import { Inter } from 'next/font/google';
import '../globals.css';
import { ThemeProvider } from '@material-tailwind/react';
import StyledComponentsRegistry from '../registry';
import NextTopLoader from 'nextjs-toploader';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>
        <ThemeProvider>
          <StyledComponentsRegistry>
            <NextTopLoader />
            {children}
          </StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
