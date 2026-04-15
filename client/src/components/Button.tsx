type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  theme?: "primary-dark" | "accent-red";
};

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
}: Props) => {
  const base = "py-3 px-6 rounded-md font-medium transition-colors";

  return (
    <button
      onClick={onClick}
      className={`${base} ${themeClasses[theme][variant]} ${fullWidth ? "w-full" : ""}`}
    >
      {children}
    </button>
  );
};
