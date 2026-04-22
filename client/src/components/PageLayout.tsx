import type { PageLayoutProps } from "../types";

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div
      className="
    min-h-screen w-full
    flex flex-col items-center justify-evenly
    bg-neutral-cream
    p-8
    lg:p-16
    gap-2
  "
    >
      {children}
    </div>
  );
};
