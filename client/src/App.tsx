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
  resetAuth,
} from "./store/slices/authSlice";
import { conviteApi } from "./features/auth/api/conviteApi";

const App = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { tokenConvite, etapaCadastro } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const token = searchParams.get("token");

    console.log("=== APP USEEFFECT ===");
    console.log("token na URL:", token);
    console.log("tokenConvite no Redux:", tokenConvite);
    console.log("etapaCadastro no Redux:", etapaCadastro);

    if (token) {
      console.log("token === tokenConvite?", token === tokenConvite);
      if (
        token === tokenConvite &&
        etapaCadastro &&
        etapaCadastro !== "concluido"
      ) {
        console.log("→ retomando etapa:", etapaCadastro);
        navigate(`/${etapaCadastro}`);
        return;
      }

      console.log("→ chamando validarToken na API...");

      conviteApi
        .validarToken(token)
        .then((convite) => {
          console.log("✅ token válido:", convite);
          dispatch(resetAuth());

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
        .catch((error) => {
          console.log("❌ validarToken falhou:", error);
          console.log("status:", error?.response?.status);
          console.log("data:", error?.response?.data);
          navigate("/token-invalido");
        });
      return;
    }

    console.log("→ sem token na URL");

    if (tokenConvite && etapaCadastro && etapaCadastro !== "concluido") {
      console.log("→ retomando etapa:", etapaCadastro);
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
