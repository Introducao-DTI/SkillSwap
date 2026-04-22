import { Route, Routes } from "react-router-dom";
import BemVindoPage from "../pages/BemVindoPage";
import CriarContaPage from "../pages/CriarContaPage";
import CompleteDadosPage from "../pages/CompleteDadosPage";
import ProtegerContaPage from "../pages/ProtegerContaPage";
import GerarConvitePage from "../pages/GerarConvitePage";
import TokenInvalidoPage from "../pages/TokenInvalidoPage";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/bem-vindo" element={<BemVindoPage />} />
      <Route path="/criar-conta" element={<CriarContaPage />} />
      <Route path="/completar-dados" element={<CompleteDadosPage />} />
      <Route path="/proteger-conta" element={<ProtegerContaPage />} />
      <Route path="/gerar-convite" element={<GerarConvitePage />} />
      <Route path="/token-invalido" element={<TokenInvalidoPage />} />
    </Routes>
  );
};
