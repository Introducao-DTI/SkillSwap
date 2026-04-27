import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "./features/auth/routes/AuthRoutes";
import { DashboardRoutes } from "./routes/DashboardRoutes";
import { useTokenConvite } from "./features/auth/hooks/useTokenConvite";

const App = () => {
  useTokenConvite();

  return (
    <Routes>
      <Route path="/*" element={<AuthRoutes />} />
      <Route path="/dashboard/*" element={<DashboardRoutes />} />
    </Routes>
  );
};

export default App;
