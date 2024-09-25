import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

import { Year } from "@/components/year";

export const Footer = () => {
  return (
    <div className="py-4 mt-3 border-t dark:border-white mb-20 md:mt-6">
      <footer className="flex flex-col items-baseline space-y-3 md:flex-row md:justify-between">
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
        <div className="flex self-center justify-center space-x-1 text-base font-semibold tracking-tight md:self-baseline ">
          <div className="flex items-center mt-4 md:mt-0 space-x-2 ">
            <span>©Shivaji</span>
            <span>
              <Year />
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};
