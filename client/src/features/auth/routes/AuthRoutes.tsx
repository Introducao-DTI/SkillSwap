import { Route, Routes } from "react-router-dom";
import BemVindoPage from "../pages/BemVindoPage";
import CriarContaPage from "../pages/CriarContaPage";
import CompleteDadosPage from "../pages/CompleteDadosPage";
import ProtegerContaPage from "../pages/ProtegerContaPage";
import GerarConvitePage from "../pages/GerarConvitePage";
import TokenInvalidoPage from "../pages/TokenInvalidoPage";
import { RotaProtegida } from "../components/RotaProtegida";
import LoginPage from "../pages/LoginPage";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/token-invalido" element={<TokenInvalidoPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/bem-vindo"
        element={
          <RotaProtegida>
            <BemVindoPage />
          </RotaProtegida>
        }
      />
      <Route
        path="/criar-conta"
        element={
          <RotaProtegida>
            <CriarContaPage />
          </RotaProtegida>
        }
      />
      <Route
        path="/completar-dados"
        element={
          <RotaProtegida>
            <CompleteDadosPage />
          </RotaProtegida>
        }
      />
      <Route
        path="/proteger-conta"
        element={
          <RotaProtegida>
            <ProtegerContaPage />
          </RotaProtegida>
        }
      />
      <Route
        path="/gerar-convite"
        element={
          <RotaProtegida>
            <GerarConvitePage />
          </RotaProtegida>
        }
      />
    </Routes>
  );
};
