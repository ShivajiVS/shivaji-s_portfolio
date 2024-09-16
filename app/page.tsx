import { RoughNotation } from "react-rough-notation";

import { About } from "@/components/about";
import { Education } from "@/components/education";
import { TeckStack } from "@/components/teck-stack";

export default function Home() {
  return (
    <main className="relative flex flex-col pt-5 space-y-6">
      <div>
        <h1 className="mb-3 text-2xl md:text-4xl">
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
        <h3 className="px-1 text-base font-medium tracking-tight">
          A Self-taught Frontend Developer
        </h3>
      </div>
      <About />
      <TeckStack />
      <Education />
    </main>
  );
}
