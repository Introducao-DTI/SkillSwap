type Props = {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent) => void;
};

export const FormLayout = ({ children, onSubmit }: Props) => {
  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      {children}
    </form>
  );
};
