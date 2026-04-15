type Props = {
  children: React.ReactNode;
};

export const CorpoPrincipal = ({ children }: Props) => {
  return (
    <div
      className="
      w-full
      max-w-10/12
      flex flex-col items-center gap-4
  "
    >
      {children}
    </div>
  );
};
