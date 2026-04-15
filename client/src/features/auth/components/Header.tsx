type Props = {
  children: React.ReactNode;
};

export const Header = ({ children }: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      {children}
    </div>
  );
};
