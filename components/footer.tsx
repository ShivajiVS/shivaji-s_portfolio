import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

import { Year } from "@/components/year";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="py-2 mt-3 border-t dark:border-white mb-24 md:mt-10">
      <footer className="w-full flex flex-col items-center space-y-3 md:flex-row md:justify-between md:items-baseline">
        <div className="flex space-x-2 tracking-tight">
          <span className="text-base font-semibold"> Built with:</span>
          <div className="flex items-center space-x-1 text-sm font-normal">
            <RiNextjsFill className="w-6 h-6" />
            <span>Nextjs</span>
          </div>
          <div className="flex items-center space-x-1 text-sm font-normal">
            <RiTailwindCssFill className="w-6 h-6" />
            <span>TailwindCss</span>
          </div>
        </div>

        <div className="flex justify-center space-x-1 text-base font-semibold tracking-tighter md:self-baseline text-muted-foreground ">
          <div className="flex items-center mt-4 md:mt-0 space-x-2 ">
            <h2 className="capitalize ">
              <span>
                © <Year />
              </span>
              <Link
                href="https://shivaji.vercel.app/"
                target="_blank"
                className="px-1 hover:underline hover:border-b-blue-600"
              >
                Shivaji.
              </Link>
              all rights reserved.
            </h2>
          </div>
        </div>
      </footer>
    </div>
  );
};
