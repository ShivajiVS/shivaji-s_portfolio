import { ReactNode } from "react";
import { RoughNotation } from "react-rough-notation";

export const RoughNotationWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <span className="mx-1.5">
      <RoughNotation
        type="circle"
        show={true}
        color="orange"
        animationDuration={1300}
        animationDelay={300}
        padding={1}
      >
        {children}
      </RoughNotation>
    </span>
  );
};
