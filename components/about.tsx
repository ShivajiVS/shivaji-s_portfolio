import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { MoveRight } from "lucide-react";
import Link from "next/link";

import { RoughNotationWrapper } from "./rough-notation-wrapper";
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
          <p className="text-sm leading-6 text-justify whitespace-normal md:text-base md:leading-7 hyphens-auto">
            I am Shivaji, a
            <span className="mx-1">
              <RoughNotationWrapper>
                <span className="mx-2">self-taught</span>
              </RoughNotationWrapper>
            </span>
            frontend React developer based in Hyderabad, India. Born and raised
            in Andhra Pradesh, I am motivated, enthusiastic, and always up for
            new challenges. With a strong background in JavaScript, TypeScript,
            ReactJS, NextJS, React Native, TailwindCSS and Node, I have a keen
            eye for design, user experience, and accessibility. My great ability
            to convert
            <RoughNotationWrapper>
              <span className="mx-2"> Figma designs</span>
            </RoughNotationWrapper>
            into fully functional,
            <RoughNotationWrapper>
              <span className="mx-2">SEO-optimized </span>
            </RoughNotationWrapper>
            and performant websites. ensuring that my projects not only look
            great but are intuitive and accessible to all users.
          </p>
        </div>
      </RoughNotationGroup>
      <div className="flex space-x-4">
        <Button
          variant="secondary"
          className="px-4 mt-4 font-semibold dark:bg-slate-500"
        >
          <Link
            href="/shivaji-resume.pdf"
            download="shivaji-resume"
            target="_blank"
            className="flex space-x-2"
          >
            <span>Resume</span>
            <MoveRight />
          </Link>
        </Button>

        <Button
          variant="secondary"
          className="px-4 mt-4 font-semibold cursor-default dark:bg-slate-500"
        >
          <span>Hire me</span>
        </Button>
      </div>
    </div>
  );
};
