import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Link from "next/link";

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

        <div className="mt-4">
          <div className="text-sm leading-6 whitespace-normal md:leading-7 hyphens-auto space-y-1.5 text-pretty">
            <p>
              <span className="font-bold dark:font-extrabold tracking-tighter mr-1">
                I&apos;m Shivaji, A Self-taught Frontend Developer
              </span>
              based in Hyderabad, India. I specialize in creating modern,
              responsive, and user-friendly web applications. My tech stack
              includes
              <span className="font-bold dark:font-extrabold mx-1">
                JavaScript, TypeScript, ReactJS, NextJS, React Native,
              </span>
              TailwindCSS, and Node, enabling me to deliver seamless,
              <span className="font-bold dark:font-extrabold mx-1">
                performant, and scalable solutions.
              </span>
              With a keen eye for design, I excel at
              <span className="font-bold dark:font-extrabold mx-1">
                transforming Figma designs into fully functional, SEO-optimized,
                and accessible websites
              </span>
              that prioritize exceptional user experiences.
            </p>
            <p>
              With a strong focus on
              <span className="font-bold dark:font-extrabold mx-1">
                design, usability, and performance,
              </span>{" "}
              I’m passionate about crafting digital experiences that are both
              intuitive and inclusive. If you&apos;re
              <span className="font-bold dark:font-extrabold mx-1">
                looking for a Junior Developer
              </span>
              to join your team, I would love the opportunity to discuss
              potential openings. You can see my
              <RoughNotation
                type="circle"
                show={true}
                color="orange"
                animationDuration={1300}
                animationDelay={300}
              >
                <span>
                  <Link
                    href="/shivaji-resume.pdf"
                    download="shivaji-resume"
                    target="_blank"
                    className=" font-semibold dark:font-extrabold px-2 hover:font-bold hover:text-muted-foreground text-base"
                  >
                    Resume
                  </Link>
                </span>
              </RoughNotation>
            </p>
          </div>
        </div>
      </RoughNotationGroup>
    </div>
  );
};
