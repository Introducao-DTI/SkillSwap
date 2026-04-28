import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { PageLayout } from "../../components/PageLayout";
import { CorpoPrincipal } from "../../components/Auth/CorpoPrincipal";
import { Divisor } from "../../components/Auth/Divisor";
import { FormLayout } from "../../components/Auth/FormLayout";
import { FormRow } from "../../components/Auth/FormRow";
import { Header } from "../../components/Auth/Header";
import { RodapeAcesso } from "../../components/Auth/RodapeAcesso";
import { TituloHeader } from "../../components/Auth/TituloHeader";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import {
  criarContaSchema,
  type CriarContaFormData,
} from "../../schemas/Auth/criarContaSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usuarioApi } from "../../api/usuarioApi";
import {
  setNomeUsuario,
  setRoleUsuario,
  setUsuarioId,
  setEmailUsuario,
  setTelefoneUsuario,
  setEtapaCadastro,
} from "../../store/slices/authSlice";
import { useState } from "react";

const CriarContaPage = () => {
  const { emailConvite, nomeConvite, tokenConvite } = useAppSelector(
    (state) => state.auth,
  );
  const [erroApi, setErroApi] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CriarContaFormData>({
    resolver: zodResolver(criarContaSchema),
    defaultValues: {
      nome: nomeConvite ?? "",
      email: emailConvite ?? "",
    },
  });

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const onSubmit = async (data: CriarContaFormData) => {
    try {
      const usuario = await usuarioApi.criar({
        nome: data.nome,
        email: data.email,
        telefone: data.telefone,
        senha: data.senha,
        tokenConvite: tokenConvite!,
      });

      dispatch(setUsuarioId(usuario.id));
      dispatch(setNomeUsuario(usuario.nome));
      dispatch(setRoleUsuario(usuario.role));
      dispatch(setEmailUsuario(data.email));
      dispatch(setTelefoneUsuario(data.telefone));
      dispatch(setEtapaCadastro("completar-dados"));

      navigate("/completar-dados");
    } catch (error) {
      setErroApi(
        error instanceof Error
          ? error.message
          : "Ocorreu um erro ao criar a conta",
      );
    }
  };

  return (
    <PageLayout>
      <Header>
        <TituloHeader>
          Primeiro crie sua conta para realizar o seu acesso
        </TituloHeader>
      </Header>

      <CorpoPrincipal>
        {!emailConvite && (
          <>
            <Button variant="primary" fullWidth>
              Google
            </Button>
            <Button variant="primary" fullWidth>
              LinkedIn
            </Button>
            <Divisor />
          </>
        )}

        <FormLayout onSubmit={handleSubmit(onSubmit)}>
          <FormRow cols={1}>
            <Input
              placeholder="Nome"
              type="text"
              variant={nomeConvite ? "disabled" : "secondary"}
              fullWidth
              {...register("nome")}
              error={errors.nome?.message}
            />

            <Input
              placeholder="Email"
              type="email"
              variant={emailConvite ? "disabled" : "secondary"}
              fullWidth
              {...register("email")}
              error={errors.email?.message}
            />
            <Input
              placeholder="Telefone"
              type="tel"
              variant="secondary"
              fullWidth
              {...register("telefone")}
              error={errors.telefone?.message}
            />
            <Input
              placeholder="Senha"
              type="password"
              variant="secondary"
              fullWidth
              {...register("senha")}
              error={errors.senha?.message}
            />
            <Input
              placeholder="Confirme sua senha"
              type="password"
              variant="secondary"
              fullWidth
              {...register("confirmarSenha")}
              error={errors.confirmarSenha?.message}
            />
            {erroApi && <p className="text-accent-red text-sm">{erroApi}</p>}
            <Button
              theme="accent-red"
              variant="primary"
              fullWidth
              type="submit"
            >
              Criar Acesso
            </Button>
          </FormRow>
        </FormLayout>
      </CorpoPrincipal>

      <RodapeAcesso />
    </PageLayout>
  );
};

export default CriarContaPage;
