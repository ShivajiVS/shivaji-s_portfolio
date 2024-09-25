import { RoughNotation } from "react-rough-notation";

import { Button } from "./ui/button";

const technologies = [
  "JavaScript",
  "React.js",
  "TypeScript",
  "Redux Toolkit",
  "Zustand",
  "Next.js",
  "Tailwind CSS",
  "React Native",
  "Zod",
  "React Hook Form",
  "React Query",
  "Firebase",
  "PostgreSQL",
  "Drizzle ORM",
  "Clerk Auth",
  "Git",
  "Photoshop",
  "Figma",
  "Vs Code",
] as const;

export const TeckStack = () => {
  return (
    <div>
      <RoughNotation
        type="underline"
        show={true}
        color="orange"
        animationDuration={1300}
        animationDelay={300}
      >
        <span className="inline pb-3 text-lg font-bold tracking-tight capitalize text-slate-700 md:text-2xl dark:text-white">
          Tech stack & Tools
        </span>
      </RoughNotation>
      <div className="flex flex-wrap gap-2 mt-4 ">
        {technologies.map((item) => (
          <div
            key={item}
            className="flex items-center justify-center text-center"
          >
            <Button
              size="sm"
              variant="secondary"
              className="cursor-default dark:bg-slate-700"
            >
              {item}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
