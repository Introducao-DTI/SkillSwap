type Props = {
  children: React.ReactNode;
  cols?: 1 | 2 | 3;
};

export const FormRow = ({ children, cols = 1 }: Props) => {
  const colsMap = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
  };

  return <div className={`grid gap-4 ${colsMap[cols]}`}>{children}</div>;
};
