import * as React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
  id?: string;
}

function Input({ className, type, label, id, placeholder, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-3 w-full">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-font-green">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        data-slot="input"
        className={cn(
          "w-full h-[51px] bg-yellow-300 rounded-[20px] px-5 border border-[#E7E8EB] outline-none text-sm font-medium text-font-black placeholder:text-[#dcdcdc] focus:border-gray-700",
          className
        )}
        {...props}
      />
    </div>
  );
}

export { Input };
