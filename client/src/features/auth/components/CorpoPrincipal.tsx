import type { CorpoPrincipalProps } from "../types";

export const CorpoPrincipal = ({ children }: CorpoPrincipalProps) => {
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
