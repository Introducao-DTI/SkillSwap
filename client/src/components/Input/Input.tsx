import { forwardRef } from "react";
import type { InputProps } from "../../types";
import { inputVariants, inputWrapperVariants } from "./inputStyles";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant = "secondary", fullWidth = false, error, ...rest }, ref) => (
    <div className={inputWrapperVariants({ fullWidth })}>
      <input
        ref={ref}
        {...rest}
        disabled={variant === "disabled"}
        className={inputVariants({ variant })}
      />
      {error && <p className="text-accent-red text-sm">{error}</p>}
    </div>
  ),
);

Input.displayName = "Input";
