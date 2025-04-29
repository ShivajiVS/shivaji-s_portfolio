import { ProjectsList } from "@/components/projects-list";
import { RoughNotation } from "react-rough-notation";

export default function Projects() {
  return (
    <section className="relative flex flex-col space-y-4 md:space-y-5">
      <div>
        <RoughNotation
          type="underline"
          show={true}
          color="orange"
          animationDuration={1300}
          animationDelay={300}
        >
          <span className="inline pb-3 text-lg font-bold tracking-tight capitalize md:text-2xl text-black dark:text-white">
            Projects
          </span>
        </RoughNotation>
      </div>
      <p className="font-semibold text-sm text-justify leading-6 whitespace-normal md:leading-7 hyphens-auto space-y-1.5 text-black dark:text-white">
        From concept to execution, ideas are the seeds that grow into powerful
        solutions, nurtured by design, developed with care, and refined with
        user experience in mind.
      </p>
      <ProjectsList />
    </section>
  );
}
