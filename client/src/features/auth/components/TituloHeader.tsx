type Props = {
  children: React.ReactNode;
};

export const TituloHeader = ({ children }: Props) => (
  <div className="w-full">
    <h1 className="text-left text-accent-red">{children}</h1>
  </div>
);
