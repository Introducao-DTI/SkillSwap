import { Button } from "../../components/Button/Button";
import { CaixaDeTexto } from "../../components/Auth/CaixaDeTexto";
import { Input } from "../../components/Input/Input";
import { PageLayout } from "../../components/PageLayout";
import { CorpoPrincipal } from "../../components/Auth/CorpoPrincipal";
import { Header } from "../../components/Auth/Header";
import { RodapeAcesso } from "../../components/Auth/RodapeAcesso";
import { TituloHeader } from "../../components/Auth/TituloHeader";
import { Select } from "../../components/Select";
import { FormLayout } from "../../components/Auth/FormLayout";
import { FormRow } from "../../components/Auth/FormRow";
import { useNavigate } from "react-router-dom";

import {
  protegerContaSchema,
  type ProtegerContaFormData,
} from "../../schemas/Auth/protegerContaSchema";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  validarCodigoSchema,
  type ValidarCodigoFormData,
} from "../../schemas/Auth/validarCodigoSchema";
import { usuarioApi } from "../../api/usuarioApi";
import { useState } from "react";
import { conviteApi } from "../../api/conviteApi";
import { setEtapaCadastro } from "../../store/slices/authSlice";

const ProtegerContaPage = () => {
  const navigate = useNavigate();
  const { idUsuario, tokenConvite } = useAppSelector((state) => state.auth);
  const [erroApi, setErroApi] = useState<string | null>(null);
  const [codigoEnviado, setCodigoEnviado] = useState(false);

  const dispatch = useAppDispatch();

  const {
    register: registerEnvio,
    handleSubmit: handleSubmitEnvio,
    formState: { errors: errorsEnvio },
  } = useForm<ProtegerContaFormData>({
    resolver: zodResolver(protegerContaSchema),
  });

  const {
    register: registerCodigo,
    handleSubmit: handleSubmitCodigo,
    formState: { errors: errorsCodigo },
  } = useForm<ValidarCodigoFormData>({
    resolver: zodResolver(validarCodigoSchema),
  });

  const onSubmitEnvio = async (data: ProtegerContaFormData) => {
    try {
      await usuarioApi.enviarCodigoVerificacao(
        idUsuario!,
        data.metodoVerificacao,
      );
      setCodigoEnviado(true);
      setErroApi(null);
    } catch (error) {
      setErroApi(
        error instanceof Error ? error.message : "Erro ao enviar o código.",
      );
    }
  };

  const onSubmitCodigo = async (data: ValidarCodigoFormData) => {
    try {
      console.log("1. iniciando validação do código");
      await usuarioApi.validarCodigoVerificacao(
        idUsuario!,
        data.codigoVerificacao,
      );
      console.log("2. código validado com sucesso");

      if (tokenConvite) {
        console.log("3. consumindo token:", tokenConvite);
        await conviteApi.consumirToken(tokenConvite);
        console.log("4. token consumido");
      } else {
        console.log("3. tokenConvite é null/undefined — consumir pulado");
      }

      console.log("5. navegando para login");
      navigate("/login");

      console.log("6. dispatch etapaCadastro concluido");
      dispatch(setEtapaCadastro("concluido"));

      console.log("7. fim do onSubmitCodigo");
    } catch (error) {
      console.log("ERRO no onSubmitCodigo:", error);
      setErroApi(
        error instanceof Error ? error.message : "Código inválido ou expirado.",
      );
    }
  };

  return (
    <PageLayout>
      <Header>
        <TituloHeader>
          Vamos proteger a sua conta para maior segurança
        </TituloHeader>
        <CaixaDeTexto variant="secondary">
          Escolha uma opção para fazer uma verificação de duas etapas. Para sua
          segurança o link tem validade de 2 horas.
        </CaixaDeTexto>
      </Header>

      <CorpoPrincipal>
        <FormLayout onSubmit={handleSubmitEnvio(onSubmitEnvio)}>
          <FormRow cols={1}>
            <Select
              placeholder="Selecione a verificação"
              variant="secondary"
              fullWidth
              options={[{ value: "email", label: "Email" }]}
              {...registerEnvio("metodoVerificacao")}
              error={errorsEnvio.metodoVerificacao?.message}
            />
            <Button variant="primary" fullWidth type="submit">
              {codigoEnviado
                ? "Reenviar código"
                : "Enviar código de verificação"}
            </Button>
          </FormRow>
        </FormLayout>

        <FormLayout onSubmit={handleSubmitCodigo(onSubmitCodigo)}>
          <FormRow cols={1}>
            <Input
              placeholder="Código de verificação"
              variant={codigoEnviado ? "secondary" : "disabled"}
              fullWidth
              {...registerCodigo("codigoVerificacao")}
              error={errorsCodigo.codigoVerificacao?.message}
            />
          </FormRow>
          {erroApi && <p className="text-accent-red text-sm">{erroApi}</p>}
          <Button variant="primary" theme="accent-red" fullWidth type="submit">
            Validar Código
          </Button>
        </FormLayout>

        <p className="text-support">
          Em caso de dúvidas e/ou ajuda [entre em contato com a gente]
        </p>
      </CorpoPrincipal>

      <RodapeAcesso />
    </PageLayout>
  );
};

export default ProtegerContaPage;
