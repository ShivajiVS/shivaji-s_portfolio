// import { ProjectsList } from "@/components/projects-list";
import { RoughNotation } from "react-rough-notation";

export default function page() {
  return (
    <section className="relative flex flex-col space-y-4  h-[calc(100vh-200px)]">
      <div>
        <RoughNotation
          type="underline"
          show={true}
          color="orange"
          animationDuration={1300}
          animationDelay={300}
        >
          <span className="inline pb-3 text-lg font-bold tracking-tight capitalize text-slate-700 md:text-2xl dark:text-white">
            Projects
          </span>
        </RoughNotation>
      </div>
      <div className="mt-8 h-full flex items-center justify-center">
        <h2 className="tracking-tight text-justify font-semibold capitalize text-2xl animate-ping">
          Coming soon..
        </h2>
      </div>
      {/* <ProjectsList /> */}
    </section>
  );
}
