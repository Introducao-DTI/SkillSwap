import type { PageLayoutProps } from "../types";

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="h-dvh w-full flex items-center justify-center bg-neutral-cream">
      <div className="w-full max-w-sm sm:max-w-md flex flex-col px-4 py-5 sm:px-8 sm:py-10 h-dvh justify-between sm:h-auto sm:justify-normal sm:gap-8">
        {children}
      </div>
    </div>
  );
};
