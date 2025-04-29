import { RoughNotation } from "react-rough-notation";
import { useMemo } from "react";

import { Badge } from "./ui/badge";

export const TeckStack = () => {
  const technologies = useMemo(
    () => [
      "JavaScript",
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Zustand",
      "Next.js",
      "Tailwind CSS",
      "React Native",
      "React Query",
      "Jest",
      "Playwright",
      "Firebase",
      "Supabase",
      "Clerk Auth",
      "Git & Github",
      "Photoshop",
      "Figma",
    ],
    []
  );

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
          Technologies & Tools I Work With
        </span>
      </RoughNotation>

      {/* flex flex-wrap */}
      <div className="flex flex-wrap gap-2 mt-4 ">
        {technologies.map((item) => (
          <div
            key={item}
            className="flex items-center justify-center text-center"
          >
            <Badge
              variant="secondary"
              className="bg-slate-100 dark:bg-slate-700"
            >
              {item}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
};
