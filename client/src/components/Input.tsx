import type { InputProps } from "../types";

export const Input = ({
  placeholder,
  type = "text",
  value,
  onChange,
  variant = "secondary",
  fullWidth = false,
}: InputProps) => {
  const variants = {
    primary:
      "bg-primary-dark text-neutral-cream placeholder:text-neutral-cream/60",
    secondary:
      "bg-transparent border border-primary-dark text-primary-dark placeholder:text-primary-dark/60",
    disabled:
      "bg-gray-200 text-gray-500 placeholder:text-gray-500/60 cursor-not-allowed",
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`h-10 rounded-md px-4 outline-none ${variants[variant]} ${fullWidth ? "w-full" : "w-auto"}`}
      disabled={variant === "disabled"}
    />
  );
};
