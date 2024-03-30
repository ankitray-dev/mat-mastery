import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "MatMastery",
  description: "Welcome to MatMastery! Dive into the world of judo and karate learning with our innovative platform built on Next.js and Next UI. Experience seamless navigation and modern design as you enhance your martial arts skills. Join us and embark on your journey to mastery!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
          <Navbar/>
          {children}
      </body>
    </html>
  );
}
