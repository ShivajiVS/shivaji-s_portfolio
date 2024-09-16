import type { Metadata } from "next";
import { Lora } from "next/font/google";

import "./globals.css";
import { NavBar } from "@/components/nav-bar";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";

// import localFont from "next/font/local";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// ${geistSans.variable} ${geistMono.variable}

const lora = Lora({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Shivajii.dev",
  description: "Shivajii's portfolio..",
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
          <div className="w-full h-screen overflow-y-auto bg-amber-50 grow dark:bg-slate-800 ">
            <div className="max-w-2xl p-3 mx-auto mb-14 md:mb-20 selection:bg-purple-500 selection:text-white dark:text-white md:p-5">
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
