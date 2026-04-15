type Option = {
  value: string;
  label: string;
};

type Props = {
  options: Option[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  variant?: "primary" | "secondary" | "disabled";
  fullWidth?: boolean;
};

export const Select = ({
  options,
  value,
  onChange,
  placeholder,
  variant = "secondary",
  fullWidth = false,
}: Props) => {
  const variants = {
    primary: "bg-primary-dark text-neutral-cream",
    secondary: "bg-transparent border border-primary-dark text-primary-dark",
    disabled: "bg-gray-200 text-gray-500 cursor-not-allowed",
  };

  return (
    <select
      value={value}
      onChange={onChange}
      disabled={variant === "disabled"}
      className={`h-10 rounded-md px-4 outline-none appearance-none ${variants[variant]} ${fullWidth ? "w-full" : "w-auto"}`}
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
  );
};
