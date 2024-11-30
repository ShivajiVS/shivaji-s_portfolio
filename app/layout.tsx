import type { Metadata, Viewport } from "next";
import { Lora } from "next/font/google";

import "./globals.css";
import { NavBar } from "@/components/nav-bar";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";

const lora = Lora({ subsets: ["latin-ext"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Shivajii.dev",
  description:
    "Frontend Developer skilled in React, Next.js, and Tailwind CSS. Experienced in building SEO-optimized, responsive web applications with a focus on user experience.",
  authors: [{ name: "Kondeti Shivaji", url: "https://shivaji.vercel.app" }],
  keywords: [
    "shivajii.dev",
    "kondeti shivaji",
    "kondeti sivaji",
    "sivaji kondeti",
    "shivaji kondeti",
    "shivaji Portfolio",
    "Shivajii's portfolio",
    "Frontend Developer",
    "React Developer",
    "Frontend React Developer",
    "React Native Developer",
    "web Developer",
    "Next.js Developer",
    "Tailwind CSS",
    "Responsive Design",
    "SEO",
    "JavaScript",
    "Web Developer Portfolio",
    "User Experience",
    "Accessible Web Design",
    "High-performance Websites",
    "Full-stack Developer",
    "TypeScript",
    "Next.js 14",
    "React Native",
    "UI/UX Design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lora.className} antialiased flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="w-full h-screen overflow-y-auto grow bg-light-mode-gradient bg-[length:400%_400%] animate-gradient-light dark:bg-dark-mode-gradient dark:animate-gradient-dark">
            <div className="max-w-3xl p-3 mb-20 mx-auto selection:bg-purple-500 selection:text-white dark:text-white">
              {children}
              <Footer />
            </div>
          </div>
          <NavBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
