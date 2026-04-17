import type { InputProps } from "../types";
import { forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant = "secondary", fullWidth = false, error, ...rest }, ref) => {
    const variants = {
      primary:
        "bg-primary-dark text-neutral-cream placeholder:text-neutral-cream/60",
      secondary:
        "bg-transparent border border-primary-dark text-primary-dark placeholder:text-primary-dark/60",
      disabled:
        "bg-gray-200 text-gray-500 placeholder:text-gray-500/60 cursor-not-allowed",
    };

    return (
      <div className={`flex flex-col gap-1 ${fullWidth ? "w-full" : "w-auto"}`}>
        <input
          ref={ref}
          {...rest}
          disabled={variant === "disabled"}
          className={`h-10 rounded-md px-4 outline-none w-full ${variants[variant]}`}
        />
        {error && <p className="text-accent-red text-sm">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";
