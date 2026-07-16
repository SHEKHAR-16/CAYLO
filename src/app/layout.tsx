import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Navbar from '../components/layout/Navbar';
import { Barlow_Condensed, Mulish, Poppins, Rubik, Lato, Chewy } from "next/font/google";


import './globals.css'; // Note: One extra level up now!

const barlow = Barlow_Condensed({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700"], 
  variable: "--font-barlow" 
});

const chewy = Chewy({ 
  subsets: ["latin"], 
  weight: "400", 
  variable: "--font-chewy" 
});

const mulish = Mulish({ 
  subsets: ["latin"], 
  variable: "--font-mulish" 
});

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"], 
  variable: "--font-poppins" 
});

const rubik = Rubik({ 
  subsets: ["latin"], 
  variable: "--font-rubik" 
});

const lato = Lato({ 
  subsets: ["latin"], 
  weight: ["400", "700"], 
  variable: "--font-lato" 
});

interface LayoutProps {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  
  // Fetch messages mapped from src/i18n/request.ts setup
  const messages = await getMessages();

  return (
    <html lang={lang} suppressHydrationWarning>
       <body className={`
        ${barlow.variable} 
        ${mulish.variable} 
        ${poppins.variable} 
        ${rubik.variable} 
        ${lato.variable} 
        ${chewy.variable}
        antialiased
      `} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <Navbar key={lang} />
          <main>{children}</main>
        
        </NextIntlClientProvider>
      </body>
    </html>
  );
}