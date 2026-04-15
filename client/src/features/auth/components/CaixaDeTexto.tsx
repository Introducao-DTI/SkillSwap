type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export const CaixaDeTexto = ({ children, variant = "primary" }: Props) => {
  const variants = {
    primary:
      "bg-primary-dark text-xl text-neutral-cream placeholder:text-neutral-cream/60",
    secondary:
      "bg-transparent text-sm border border-primary-dark text-primary-dark placeholder:text-primary-dark/60",
  };

  return (
    <div className={`${variants[variant]} p-4 rounded-md w-full`}>
      {children}
    </div>
  );
};
