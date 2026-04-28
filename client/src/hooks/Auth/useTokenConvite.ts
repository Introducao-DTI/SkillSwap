import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  setEmailConvite,
  setNomeConvite,
  setRoleUsuario,
  setTokenConvite,
  setUsuarioId,
  setEtapaCadastro,
  resetAuth,
} from "../../store/slices/authSlice";
import { conviteApi } from "../../api/conviteApi";

export const useTokenConvite = () => {
  const { tokenConvite, etapaCadastro } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const executou = useRef(false);

  useEffect(() => {
    if (executou.current) return;
    executou.current = true;

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
        .catch(() => navigate("/token-invalido"));

      return;
    }

    if (tokenConvite && etapaCadastro && etapaCadastro !== "concluido") {
      navigate(`/${etapaCadastro}`);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};
