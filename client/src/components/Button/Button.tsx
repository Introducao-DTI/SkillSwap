import type { ButtonProps } from "../../types";
import { buttonVariants } from "./buttonStyles";

export const Button = ({
  children,
  onClick,
  variant = "primary",
  theme = "primary-dark",
  fullWidth = false,
  type = "button",
}: ButtonProps) => (
  <button
    type={type}
    onClick={onClick}
    className={buttonVariants({ variant, theme, fullWidth })}
  >
    {children}
  </button>
);
