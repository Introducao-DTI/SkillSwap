import type { ButtonProps } from "../types";

const themeClasses = {
  "primary-dark": {
    primary: "bg-primary-dark text-neutral-cream hover:bg-primary-light",
    secondary: "bg-transparent border border-primary-dark text-primary-dark",
  },
  "accent-red": {
    primary: "bg-accent-red text-neutral-cream hover:bg-accent-peach",
    secondary: "bg-transparent border border-accent-red text-accent-red",
  },
};

export const Button = ({
  children,
  onClick,
  variant = "primary",
  theme = "primary-dark",
  fullWidth = false,
  type = "button",
}: ButtonProps) => {
  const base = "py-3 px-6 rounded-md font-medium transition-colors";

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${base} ${themeClasses[theme][variant]} ${fullWidth ? "w-full" : ""}`}
    >
      {children}
    </button>
  );
};
