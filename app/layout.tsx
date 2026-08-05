import type { Metadata } from "next";
import { Geist, Geist_Mono , JetBrains_Mono, VT323 } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const vt323 = VT323({
  variable: "--font-vt323",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Syed Minhaj",
  description: "Portfolio of full stack developer Syed Minhaj Ul Haque",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetBrainsMono.variable} ${vt323.variable} antialiased overflow-x-hidden`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
