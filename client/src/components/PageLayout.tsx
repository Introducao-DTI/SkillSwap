type Props = {
  children: React.ReactNode;
};

export const PageLayout = ({ children }: Props) => {
  return (
    <div
      className="
    min-h-screen w-full
    flex flex-col items-center justify-evenly
    bg-neutral-cream
    p-8
    lg:p-16
    gap-6
  "
    >
      {children}
    </div>
  );
};
