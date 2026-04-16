import type { TituloHeaderProps } from "../types";

export const TituloHeader = ({ children }: TituloHeaderProps) => (
  <div className="w-full">
    <h1 className="text-left text-accent-red">{children}</h1>
  </div>
);
