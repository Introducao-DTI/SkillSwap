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

const ProtegerContaPage = () => {
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
        <FormLayout>
          <FormRow cols={1}>
            <Select
              placeholder="Selecione seu perfil"
              variant="secondary"
              fullWidth
              options={[
                { value: "sms", label: "Mensagem de Texto" },
                { value: "email", label: "Email" },
              ]}
            />
            <Button variant="primary" fullWidth>
              Enviar link de verificação
            </Button>
            <Input
              placeholder="Código de verificação"
              variant="secondary"
              fullWidth
            />
          </FormRow>
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
