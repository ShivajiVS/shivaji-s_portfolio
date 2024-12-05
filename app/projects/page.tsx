import { ProjectsList } from "@/components/projects-list";
import { RoughNotation } from "react-rough-notation";

export default function page() {
  return (
    <section className="relative flex flex-col space-y-5 md:space-y-7">
      <div>
        <RoughNotation
          type="underline"
          show={true}
          color="orange"
          animationDuration={1300}
          animationDelay={300}
        >
          <span className="inline pb-3 text-lg font-bold tracking-tight capitalize text-slate-700 md:text-2xl dark:text-white">
            My Projects
          </span>
        </RoughNotation>
      </div>
      <p className="font-medium text-justify hyphens-auto">
        From concept to execution, ideas are the seeds that grow into powerful
        solutions, nurtured by design, developed with care, and refined with
        user experience in mind.
      </p>
      <ProjectsList />
    </section>
  );
}

