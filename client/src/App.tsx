import { Route, Routes, useNavigate, useSearchParams } from "react-router-dom";
import { AuthRoutes } from "./features/auth/routes/AuthRoutes";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import {
  setEmailConvite,
  setNomeConvite,
  setRoleUsuario,
  setTokenConvite,
  setUsuarioId,
  setEtapaCadastro,
} from "./store/slices/authSlice";
import { conviteApi } from "./features/auth/api/conviteApi";

const App = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { tokenConvite, etapaCadastro } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const token = searchParams.get("token");

    if (token) {
      if (
        token === tokenConvite &&
        etapaCadastro &&
        etapaCadastro !== "concluido"
      ) {
        navigate(`/${etapaCadastro}`);
        return;
      }

      conviteApi
        .validarToken(token)
        .then((convite) => {
          dispatch(setEmailConvite(convite.email));
          dispatch(setNomeConvite(convite.nome));
          dispatch(setRoleUsuario(convite.role));
          dispatch(setTokenConvite(convite.token));

          if (convite.usuarioId) {
            dispatch(setUsuarioId(convite.usuarioId));
            dispatch(setEtapaCadastro(convite.etapa ?? "bem-vindo"));
            navigate(`/${convite.etapa ?? "bem-vindo"}`);
          } else {
            dispatch(setEtapaCadastro("bem-vindo"));
            navigate("/bem-vindo");
          }
        })
        .catch(() => navigate("/token-invalido"));
      return;
    }

    if (tokenConvite && etapaCadastro && etapaCadastro !== "concluido") {
      navigate(`/${etapaCadastro}`);
    }
  }, []);

  return (
    <Routes>
      <Route path="/*" element={<AuthRoutes />} />
    </Routes>
  );
};

export default App;
