import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import {
  setToken,
  setRoleUsuario,
  setNomeUsuario,
} from "../../store/slices/authSlice";
import { authApi } from "../../api/authApi";
import {
  fazerLoginSchema,
  type FazerLoginFormData,
} from "../../schemas/Auth/fazerLoginSchema";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { CaixaDeTexto } from "../../components/Auth/CaixaDeTexto";
import { CorpoPrincipal } from "../../components/Auth/CorpoPrincipal";
import { FormLayout } from "../../components/Auth/FormLayout";
import { FormRow } from "../../components/Auth/FormRow";
import { AuthLayout } from "../../components/Auth/AuthLayout";
import { Header } from "../../components/Auth/Header";
import { RodapeAcesso } from "../../components/Auth/RodapeAcesso";
import { TituloHeader } from "../../components/Auth/TituloHeader";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [erroApi, setErroApi] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FazerLoginFormData>({ resolver: zodResolver(fazerLoginSchema) });

  const onSubmit = async (data: FazerLoginFormData) => {
    try {
      setErroApi(null);
      const acesso = await authApi.login({
        email: data.email,
        senha: data.senha,
      });

      dispatch(setToken(acesso.token));
      dispatch(setNomeUsuario(acesso.nome));
      dispatch(setRoleUsuario(acesso.role));

      navigate("/dashboard");
    } catch {
      setErroApi("Email ou senha inválidos.");
    }
  };

  return (
    <AuthLayout>
      <Header>
        <TituloHeader>Faça login</TituloHeader>
        <CaixaDeTexto>
          Acesse sua conta para continuar na plataforma.
        </CaixaDeTexto>
      </Header>
      <CorpoPrincipal>
        <FormLayout onSubmit={handleSubmit(onSubmit)}>
          <FormRow cols={1}>
            <Input
              type="email"
              placeholder="Email"
              variant="secondary"
              fullWidth
              {...register("email")}
              error={errors.email?.message}
            />
            <Input
              type="password"
              placeholder="Senha"
              variant="secondary"
              fullWidth
              {...register("senha")}
              error={errors.senha?.message}
            />
            {erroApi && <p className="text-accent-red text-sm">{erroApi}</p>}
            <Button
              theme="accent-red"
              variant="primary"
              fullWidth
              type="submit"
            >
              Entrar
            </Button>
          </FormRow>
        </FormLayout>
      </CorpoPrincipal>
      <RodapeAcesso /> {/* ✅ adicionado */}
    </AuthLayout>
  );
};

export default LoginPage;
