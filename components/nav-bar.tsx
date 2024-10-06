import { HomeIcon, Linkedin, GithubIcon, Code2 } from "lucide-react";
import Link from "next/link";

import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import { DarkmoodToggler } from "./dark-mode-toggler";
import { Separator } from "./ui/separator";

const navLinks = [
  {
    title: "Home",
    icon: (
      <HomeIcon className="w-full h-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "/",
  },
  {
    title: "Projects",
    icon: (
      <Code2 className="w-full h-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "/projects",
  },
  {
    title: "Linkedin",
    icon: (
      <Linkedin className="w-full h-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "https://www.linkedin.com/in/shivajiks/",
  },

  {
    title: "Github",
    icon: (
      <GithubIcon className="w-full h-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "https://github.com/ShivajiVS",
  },
] as const;

export function NavBar() {
  return (
    <div className="absolute z-50 max-w-full -translate-x-1/2 bottom-1 left-1/2">
      <Dock className="items-end px-4 pb-3 bg-white rounded-full bg-opacity-95 dark:bg-slate-500">
        {navLinks.map(({ href, title, icon }) => (
          <Link
            href={href}
            key={title}
            prefetch={false}
            target={
              title === "Linkedin" || title === "Github" ? "_blank" : "_self"
            }
          >
            <DockItem className="rounded-full hover:bg-gray-100 aspect-square dark:hover:bg-slate-700">
              <DockLabel>{title}</DockLabel>
              <DockIcon>{icon}</DockIcon>
            </DockItem>
          </Link>
        ))}
        <Separator orientation="vertical" className="h-10" />
        <DockItem className="rounded-full hover:bg-gray-100 aspect-square dark:hover:bg-slate-700">
          <DockLabel>Theme</DockLabel>
          <DockIcon>
            <DarkmoodToggler />
          </DockIcon>
        </DockItem>
      </Dock>
    </div>
  );
}
