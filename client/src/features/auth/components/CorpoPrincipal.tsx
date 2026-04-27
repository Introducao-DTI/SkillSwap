import type { CorpoPrincipalProps } from "../types";

export const CorpoPrincipal = ({ children }: CorpoPrincipalProps) => {
  return (
    <div className="w-full flex flex-col items-center gap-2 sm:gap-4">
      {children}
    </div>
  );
};
