import { RoughNotation } from "react-rough-notation";

import { About } from "@/components/about";
import { Education } from "@/components/education";
import { TeckStack } from "@/components/teck-stack";
import Projects from "./projects/page";

export default function Home() {
  return (
    <main className="relative flex flex-col pt-5 space-y-6 text-black dark:text-white">
      <section>
        <h1 className="mb-3 text-2xl md:text-5xl">
          <span className="mr-2">Hey there,</span>
          <RoughNotation
            animationDuration={1000}
            strokeWidth={4}
            type="highlight"
            show={true}
            color="orange"
          >
            <b className="px-2"> I&apos;m Shivaji 👋</b>
          </RoughNotation>
        </h1>
        <h3 className="px-1 text-lg font-medium tracking-tight">
          A Frontend Developer.
        </h3>
      </section>
      <About />
      <Projects />
      <TeckStack />
      <Education />
    </main>
  );
}

// Self-driven
