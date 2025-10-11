import { ReactNode } from "react";

export const HighlightText = ({ children }: { children: ReactNode }) => {
  return <span className="font-bold dark:font-extrabold mx-1">{children}</span>;
};
