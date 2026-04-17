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

const ProtegerContaPage = () => {
  const navigate = useNavigate();
  const { roleUsuario } = useAppSelector((state) => state.auth);

  const {
    register: registerProtecao,
    handleSubmit: handleSubmitProtecao,
    formState: { errors: errorsProtecao },
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

  const onSubmitProtecao = (data: ProtegerContaFormData) => {
    console.log("Dados do formulário:", data);
  };

  const onSubmitCodigo = (data: ValidarCodigoFormData) => {
    console.log("Código:", data);
    validarCodigo();
  };

  const validarCodigo = () => {
    // TODO Lógica para validar o código de verificação
    if (roleUsuario === "Admin") {
      navigate("/gerar-convite");
    } else {
      navigate("/dashboard");
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
          segurança o link tem válidade de 2 horas. Caso não receba o link
          escolha um método de envio e clique em [enviar link de verificação]
        </CaixaDeTexto>
      </Header>

      <CorpoPrincipal>
        <FormLayout onSubmit={handleSubmitProtecao(onSubmitProtecao)}>
          <FormRow cols={1}>
            <Select
              placeholder="Selecione a verificação"
              variant="secondary"
              fullWidth
              options={[
                { value: "sms", label: "Mensagem de Texto" },
                { value: "email", label: "Email" },
              ]}
              {...registerProtecao("metodoVerificacao")}
              error={errorsProtecao.metodoVerificacao?.message}
            />
            <Button variant="primary" fullWidth type="submit">
              Enviar link de verificação
            </Button>
          </FormRow>
        </FormLayout>
        <FormLayout onSubmit={handleSubmitCodigo(onSubmitCodigo)}>
          <FormRow cols={1}>
            <Input
              placeholder="Código de verificação"
              variant="secondary"
              fullWidth
              {...registerCodigo("codigoVerificacao")}
              error={errorsCodigo.codigoVerificacao?.message}
            />
          </FormRow>
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
