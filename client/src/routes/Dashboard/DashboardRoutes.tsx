import { Route, Routes } from "react-router-dom";

import { DashboardAdm } from "../../pages/Dashboard/dashboardAdm";
import { RotaAutenticada } from "../../components/Auth/RotaAutenticada";

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route
        path="/adm"
        element={
          <RotaAutenticada>
            <DashboardAdm />
          </RotaAutenticada>
        }
      />
    </Routes>
  );
};
