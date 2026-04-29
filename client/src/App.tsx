import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "./routes/Auth/AuthRoutes";
import { DashboardRoutes } from "./routes/Dashboard/DashboardRoutes";
import { useTokenConvite } from "./hooks/Auth/useTokenConvite";

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
