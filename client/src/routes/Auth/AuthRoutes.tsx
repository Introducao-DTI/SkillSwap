import { Route, Routes } from "react-router-dom";
import BemVindoPage from "../../pages/Auth/BemVindoPage";
import CriarContaPage from "../../pages/Auth/CriarContaPage";
import CompleteDadosPage from "../../pages/Auth/CompleteDadosPage";
import ProtegerContaPage from "../../pages/Auth/ProtegerContaPage";
import GerarConvitePage from "../../pages/Auth/GerarConvitePage";
import TokenInvalidoPage from "../../pages/Auth/TokenInvalidoPage";
import { RotaProtegida } from "../../components/Auth/RotaProtegida";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/token-invalido" element={<TokenInvalidoPage />} />
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
