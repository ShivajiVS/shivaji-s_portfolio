import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "./ui/button";

export const About = () => {
  return (
    <div>
      <RoughNotationGroup show>
        <RoughNotation
          type="underline"
          show={true}
          color="orange"
          animationDuration={1300}
          animationDelay={300}
        >
          <span className="inline pb-3 text-lg font-bold tracking-tight capitalize text-slate-700 md:text-2xl dark:text-white">
            About Me
          </span>
        </RoughNotation>

        <div className="mt-4 ">
          <div className="text-sm leading-6 text-justify whitespace-normal md:text-base md:leading-7 hyphens-auto space-y-1.5">
            <p>
              <span className="font-semibold mx-1">
                I&apos;m Shivaji, A Self-driven Frontend Developer
              </span>{" "}
              based in Hyderabad, India. Born and raised in Andhra Pradesh. I
              started coding in 2017 during my first year of diploma studies,
              with C as my first language. After facing challenges with C, I
              transitioned to Java, where I found comfort. My passion for coding
              eventually led me to web development, and once I discovered{" "}
              <span className="font-semibold mx-1">JavaScript</span>, I embraced
              the React ecosystem fully.
            </p>

            <p>
              I have a strong foundation in{" "}
              <span className="font-semibold mx-1">
                JavaScript, TypeScript, ReactJS, NextJS, React Native,
                TailwindCSS, and Node,
              </span>{" "}
              which gives me a comprehensive understanding of modern web
              technologies. I have a keen eye for design, user experience, and
              accessibility.{" "}
              <span className="font-semibold mx-1">
                My great ability to convert Figma designs into fully functional,
                SEO-optimized and performant websites.
              </span>
              ensuring that my projects not only look great but are intuitive
              and accessible to all users.
            </p>

            <p>
              If you&apos;re
              <span className="font-semibold">
                {" "}
                looking for a junior developer
              </span>{" "}
              to join your team, I would love the opportunity to discuss
              potential openings. You can download my
              <span>
                <Link
                  href="/shivaji-resume.pdf"
                  download="shivaji-resume"
                  target="_blank"
                  className="hover:underline text-blue-700 font-semibold px-1 hover:text-blue-500"
                >
                  Cv
                </Link>
                here
              </span>
            </p>
          </div>
        </div>
      </RoughNotationGroup>
      {/* <div className="flex space-x-4">
        <Button
          variant="secondary"
          className="px-4 mt-4 font-semibold dark:bg-slate-500"
        >
          <Link
            href="/shivaji-resume.pdf"
            download="shivaji-resume"
            target="_blank"
            className="flex space-x-2 items-center"
          >
            <span>Resume</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>

        <Button
          variant="secondary"
          className="px-4 mt-4 font-semibold cursor-default dark:bg-slate-500"
        >
          <span>Hire me</span>
        </Button>
      </div> */}
    </div>
  );
};
