import { forwardRef } from "react";
import type { SelectProps } from "../types";

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      options,
      placeholder,
      variant = "secondary",
      fullWidth = false,
      error,
      ...rest
    },
    ref,
  ) => {
    const variants = {
      primary: "bg-primary-dark text-neutral-cream",
      secondary: "bg-transparent border border-primary-dark text-primary-dark",
      disabled: "bg-gray-200 text-gray-500 cursor-not-allowed",
    };

    return (
      <div className={`flex flex-col gap-1 ${fullWidth ? "w-full" : "w-auto"}`}>
        <select
          ref={ref}
          {...rest}
          disabled={variant === "disabled"}
          className={`h-10 rounded-md px-4 outline-none appearance-none w-full ${variants[variant]}`}
        >
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className="text-accent-red text-sm">{error}</p>}
      </div>
    );
  },
);

Select.displayName = "Select";
