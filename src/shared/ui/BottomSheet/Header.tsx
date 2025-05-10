import { HTMLAttributes } from "react";
import clsx from "clsx";

export const Header = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={clsx("px-4 pt-4 pb-2 text-center text-base font-semibold relative ", className)}
      {...props}>
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
        <img src="/img/bottom-sheet.svg" alt="drag handle" />
      </div>
      {props.children}
    </div>
  );
};
