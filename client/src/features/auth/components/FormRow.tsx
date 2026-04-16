import type { FormRowProps } from "../types";

export const FormRow = ({ children, cols = 1 }: FormRowProps) => {
  const colsMap = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
  };

  return <div className={`grid gap-4 ${colsMap[cols]}`}>{children}</div>;
};
