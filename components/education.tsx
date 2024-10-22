import { RoughNotation } from "react-rough-notation";

import { Card, CardContent } from "./ui/card";
import { FadeUp } from "./fade-up";

type EductionType = {
  collageName: string;
  university?: string;
  adacemicYear: string;
  Specialization: string;
};

const education: EductionType[] = [
  {
    collageName: "aditya college of engineering",
    university: "Jntuk university",
    adacemicYear: "2020-2023",
    Specialization: "bachelor's degree in computer science",
  },
  {
    collageName: "prasiddha college of engineering & tech",
    adacemicYear: "2017-2020",
    Specialization: "diploma in computer science",
  },
] as const;

export const Education = () => {
  return (
    <section className="relative">
      <RoughNotation
        type="underline"
        show={true}
        color="orange"
        animationDuration={1300}
        animationDelay={300}
      >
        <span className="inline pb-3 text-lg font-bold tracking-tight capitalize text-slate-700 md:text-2xl dark:text-white">
          Education
        </span>
      </RoughNotation>
      <div className={`flex flex-col gap-6 mt-4 `}>
        {education.map(
          ({
            collageName,
            adacemicYear,
            Specialization,
            ...item
          }: EductionType) => (
            <FadeUp duration={1} delay={0.6} key={adacemicYear}>
              <Card className=" hover:bg-slate-500 dark:hover:bg-slate-600 dark:bg-slate-700 bg-amber-50 group">
                <CardContent className="flex flex-col p-3 space-y-4 md:p-6 group-hover:text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col text-sm font-bold tracking-tight capitalize md:flex-row">
                      <h1>{collageName}</h1>
                      {item.university && (
                        <h1 className="mt-1 md:mt-0 ">
                          <span className="hidden px-2 md:inline">-</span>
                          {item.university}
                        </h1>
                      )}
                    </div>
                    <h3 className="text-xs font-medium">{adacemicYear}</h3>
                  </div>
                  <h2 className="text-sm font-medium tracking-tight capitalize">
                    {Specialization}
                  </h2>
                </CardContent>
              </Card>
            </FadeUp>
          )
        )}
      </div>
      <div></div>
    </section>
  );
};
