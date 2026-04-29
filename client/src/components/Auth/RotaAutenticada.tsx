import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";

type Props = { children: React.ReactNode };

export const RotaAutenticada = ({ children }: Props) => {
  const { token } = useAppSelector((state) => state.auth);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
