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
              <span className="font-semibold mr-1 tracking-tighter">
                I&apos;m Shivaji, A Self-taught Frontend Developer
              </span>{" "}
              based in Hyderabad, India. Originally from Andhra Pradesh, I
              discovered my passion for coding in 2017 during my first year of
              diploma studies. Starting with C, I faced challenges but
              persevered, eventually finding my footing with Java. This journey
              ignited my love for programming, leading me to explore web
              development. When I discovered JavaScript and the React ecosystem,
              I knew I had found my calling.
            </p>

            <p>
              Today, I specialize in building modern, responsive, and
              user-friendly web applications. My tech stack includes
              <span className="font-semibold mx-1">
                JavaScript, TypeScript, ReactJS, NextJS, React Native,
                TailwindCSS, and Node,
              </span>{" "}
              allowing me to create seamless, performant, and scalable
              solutions.{" "}
              <span className="font-semibold mx-1">
                I take pride in my ability to transform Figma designs into fully
                functional, SEO-optimized, and accessible websites,
              </span>
              ensuring they not only look great but also deliver exceptional
              user experiences.
            </p>
            <p>
              With a strong focus on design, usability, and performance, I’m
              passionate about crafting digital experiences that are both
              intuitive and inclusive. If you&apos;re
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
