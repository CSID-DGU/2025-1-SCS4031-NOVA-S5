import { HTMLAttributes } from "react";
import clsx from "clsx";

export const Content = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={clsx("p-4 overflow-y-auto max-h-[70vh]", className)} {...props} />;
};
