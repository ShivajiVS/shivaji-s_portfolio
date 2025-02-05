"use client";

import { cn } from "@/lib/utils";
import { Code2, GithubIcon, HomeIcon, Linkedin } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/Link";
import type { FC } from "react";
import { DarkmoodToggler } from "./dark-mode-toggler";

const pages = [
  { name: "Home", path: "/", icon: HomeIcon },
  { name: "Projects", path: "/projects", icon: Code2 },
  {
    name: "LinkedIn",
    path: "https://www.linkedin.com/in/shivajiks/",
    icon: Linkedin,
  },
  { name: "Github", path: "/https://github.com/ShivajiVS", icon: GithubIcon },
];

const BottomNavbar: FC = () => {
  const pathname = usePathname();
  const isActive = (path: string) =>
    path === "/" ? path === pathname : pathname.startsWith(path);

  return (
    <nav
      className={cn(
        "-translate-x-1/2 fixed bottom-2 md:bottom-4 lg:bottom-6 left-1/2 isolate z-50 flex items-center gap-6 rounded-full border bg-opacity-50 py-1 px-6 text-sm shadow-lg backdrop-blur-sm backdrop-filter dark:bg-slat",
        "border-neutral-950/10 bg-white/80 dark:bg-zinc-600 ",
        "dark:border-neutral-100/10 dark:bg-slate-600"
      )}
    >
      {pages.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          aria-label={link.name}
          className={cn(
            "relative py-3",
            isActive(link.path)
              ? "font-medium text-orange-500"
              : "text-neutral-500 dark:text-neutral-400"
          )}
          prefetch={false}
          target={
            link.name === "LinkedIn" || link.name === "Github"
              ? "_blank"
              : "_self"
          }
        >
          <span className="block sm:hidden">
            <link.icon className="h-5 w-5" />
          </span>
          <span className="hidden sm:block">{link.name}</span>
          {isActive(link.path) && (
            <span className="absolute top-full left-0 h-px w-full bg-current" />
          )}
        </Link>
      ))}

      <DarkmoodToggler />
    </nav>
  );
};

export default BottomNavbar;
