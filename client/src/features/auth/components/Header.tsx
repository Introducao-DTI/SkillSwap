import type { HeaderProps } from "../types";

export const Header = ({ children }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2 sm:gap-4">
      {children}
    </div>
  );
};
