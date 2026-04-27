import type { CaixaDeTextoProps } from "../types";

export const CaixaDeTexto = ({
  children,
  variant = "primary",
}: CaixaDeTextoProps) => {
  const variants = {
    primary: "bg-primary-dark text-base text-neutral-cream",
    secondary:
      "bg-transparent text-sm border border-primary-dark text-primary-dark",
  };

  return (
    <div className={`${variants[variant]} p-2 sm:p-4 rounded-md w-full`}>
      {children}
    </div>
  );
};
