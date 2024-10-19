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
          <div className="text-sm leading-6 text-justify whitespace-normal md:leading-7 hyphens-auto space-y-1.5">
            <p>
              <span className="font-semibold mx-1 tracking-tighter">
                I&apos;m Shivaji, A Self-taught Frontend Developer
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
                    className=" font-semibold px-2 hover:font-bold hover:text-muted-foreground text-base"
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
