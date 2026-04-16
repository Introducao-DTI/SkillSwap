import { Route, Routes } from "react-router-dom";
import BemVindoPage from "../pages/BemVindoPage";
import CriarContaPage from "../pages/CriarContaPage";
import CompleteDadosPage from "../pages/CompleteDadosPage";
import ProtegerContaPage from "../pages/ProtegerContaPage";
import GerarConvitePage from "../pages/GerarConvitePage";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/bem-vindo" element={<BemVindoPage />} />
      <Route path="/criar-conta" element={<CriarContaPage />} />
      <Route path="/complete-dados" element={<CompleteDadosPage />} />
      <Route path="/proteger-conta" element={<ProtegerContaPage />} />
      <Route path="/gerar-convite" element={<GerarConvitePage />} />
    </Routes>
  );
};
