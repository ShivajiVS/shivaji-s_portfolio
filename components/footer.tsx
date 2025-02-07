import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

import { Year } from "@/components/year";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="py-4 mt-6 border-t dark:border-white md:mt-10">
      <footer className="w-full flex flex-col items-center space-y-0 md:flex-row md:justify-between md:items-baseline">
        <div className="flex space-x-2 text-muted-foreground tracking-tighter">
          <span className="text-sm font-semibold"> Built with:</span>
          <div className="flex items-center space-x-1 text-sm font-normal">
            <RiNextjsFill className="w-5 h-5" />
            <span>NextJS</span>
          </div>
          <div className="flex items-center space-x-1 text-sm font-normal">
            <RiTailwindCssFill className="w-6 h-6" />
            <span>TailwindCSS</span>
          </div>
        </div>

        <div className="flex justify-center space-x-0.5 text-sm font-semibold tracking-tighter md:self-baseline text-muted-foreground ">
          <div className="flex items-center mt-2 md:mt-0 space-x-0.5 ">
            <h2 className="capitalize">
              ©
              <Link
                href="https://shivaji.vercel.app/"
                target="_blank"
                className="px-1 hover:underline hover:border-b-blue-600"
              >
                Shivaji
              </Link>
              <span>
                <Year />
              </span>
            </h2>
          </div>
        </div>
      </footer>
    </div>
  );
};
