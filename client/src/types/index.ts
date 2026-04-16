export type ButtonProps = React.PropsWithChildren<{
  onClick?: () => void;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  theme?: "primary-dark" | "accent-red";
}>;

export type InputProps = {
  placeholder?: string;
  type?: "text" | "email" | "password" | "tel";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: "primary" | "secondary" | "disabled";
  fullWidth?: boolean;
};

export type PageLayoutProps = React.PropsWithChildren;

export type SelectProps = {
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  variant?: "primary" | "secondary" | "disabled";
  fullWidth?: boolean;
};
