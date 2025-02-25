import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/Navbar";
import Footer from "./(components)/Footer";
import localFont from 'next/font/local'


export const metadata: Metadata = {
  title: "Flex Global",
  description: "Flex Global Insurance",
};



/* const myFont = localFont({
  src: '../../public/fonts/regular.otf',
  display: 'swap',
}) */

const myFont = localFont({
  display: 'swap',
  src: [
    {
      path: '../../public/fonts/regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/The Northern Block Ltd - Typold Book 500.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/The Northern Block Ltd - Typold Extended ExtraBold.otf',
      weight: '800',
      style: 'normal',
    }

  ],
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={myFont.className}>
      <body
       
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
