import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "./features/auth/routes/AuthRoutes";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<AuthRoutes />} />
    </Routes>
  );
};

export default App;
