import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";

type Props = {
  children: React.ReactNode;
};

export const RotaProtegida = ({ children }: Props) => {
  const { tokenConvite, etapaCadastro } = useAppSelector((state) => state.auth);

  if (!tokenConvite) {
    return <Navigate to="/token-invalido" replace />;
  }

  if (etapaCadastro === "concluido") {
    return <Navigate to="/token-invalido" replace />;
  }

  return <>{children}</>;
};
