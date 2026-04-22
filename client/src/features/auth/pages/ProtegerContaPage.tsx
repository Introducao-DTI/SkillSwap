import { Button } from "../../../components/Button";
import { CaixaDeTexto } from "../components/CaixaDeTexto";
import { Input } from "../../../components/Input";
import { PageLayout } from "../../../components/PageLayout";
import { CorpoPrincipal } from "../components/CorpoPrincipal";
import { Header } from "../components/Header";
import { RodapeAcesso } from "../components/RodapeAcesso";
import { TituloHeader } from "../components/TituloHeader";
import { Select } from "../../../components/Select";
import { FormLayout } from "../components/FormLayout";
import { FormRow } from "../components/FormRow";
import { useNavigate } from "react-router-dom";

import {
  protegerContaSchema,
  type ProtegerContaFormData,
} from "../schemas/protegerContaSchema";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAppSelector } from "../../../store/hooks";
import {
  validarCodigoSchema,
  type ValidarCodigoFormData,
} from "../schemas/validarCodigoSchema";
import { usuarioApi } from "../api/usuarioApi";
import { useState } from "react";
import { conviteApi } from "../api/conviteApi";

const ProtegerContaPage = () => {
  const navigate = useNavigate();
  const { idUsuario, roleUsuario, tokenConvite } = useAppSelector(
    (state) => state.auth,
  );
  const [erroApi, setErroApi] = useState<string | null>(null);
  const [codigoEnviado, setCodigoEnviado] = useState(false);

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
      await usuarioApi.validarCodigoVerificacao(
        idUsuario!,
        data.codigoVerificacao,
      );

      if (tokenConvite) {
        await conviteApi.consumirToken(tokenConvite);
      }

      if (roleUsuario === "Admin") {
        navigate("/gerar-convite");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
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
