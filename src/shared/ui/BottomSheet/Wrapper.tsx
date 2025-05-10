import { forwardRef, HTMLAttributes } from "react";
import clsx from "clsx";

interface WrapperProps extends HTMLAttributes<HTMLDivElement> {
  translateY: number;
}

export const Wrapper = forwardRef<HTMLDivElement, WrapperProps>(
  ({ children, translateY, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "fixed bottom-0 left-0 right-0 z-50 bg-[#FFFDF7] rounded-t-2xl shadow-lg transition-transform duration-300 will-change-transform touch-none max-w-[430px] mx-auto",
          className
        )}
        style={{ transform: `translateY(${translateY}%)` }}
        {...props}>
        {children}
      </div>
    );
  }
);

Wrapper.displayName = "Wrapper";
