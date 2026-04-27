import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "./features/auth/routes/AuthRoutes";
import { useTokenConvite } from "./features/auth/hooks/useTokenConvite";

const App = () => {
  useTokenConvite();

  return (
    <Routes>
      <Route path="/*" element={<AuthRoutes />} />
    </Routes>
  );
};

export default App;
