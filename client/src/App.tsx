import { Route, Routes, useNavigate, useSearchParams } from "react-router-dom";
import { AuthRoutes } from "./features/auth/routes/AuthRoutes";
import { useEffect } from "react";
import { useAppDispatch } from "./store/hooks";
import {
  setEmailConvite,
  setNomeConvite,
  setRoleUsuario,
} from "./store/slices/authSlice";
import { conviteApi } from "./features/auth/api/conviteApi";

const App = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get("token");

    if (!token) return;

    conviteApi
      .validarToken(token)
      .then((convite) => {
        dispatch(setEmailConvite(convite.email));
        dispatch(setNomeConvite(convite.nome));
        dispatch(setRoleUsuario(convite.role));
        navigate("/bem-vindo");
      })
      .catch(() => navigate("/token-invalido"));
  }, []);

  return (
    <Routes>
      <Route path="/*" element={<AuthRoutes />} />
    </Routes>
  );
};

export default App;
