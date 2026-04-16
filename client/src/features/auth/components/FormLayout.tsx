import type { FormLayoutProps } from "../types";

export const FormLayout = ({ children, onSubmit }: FormLayoutProps) => {
  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      {children}
    </form>
  );
};
