export type ButtonProps = React.PropsWithChildren<{
  onClick?: () => void;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  theme?: "primary-dark" | "accent-red";
  type?: "button" | "submit" | "reset";
}>;

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: "primary" | "secondary" | "disabled";
  fullWidth?: boolean;
  error?: string;
};

export type PageLayoutProps = React.PropsWithChildren;

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: { value: string; label: string }[];
  placeholder?: string;
  variant?: "primary" | "secondary" | "disabled";
  fullWidth?: boolean;
  error?: string;
};
