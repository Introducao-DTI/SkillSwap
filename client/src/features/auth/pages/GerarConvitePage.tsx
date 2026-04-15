import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { PageLayout } from "../../../components/PageLayout";
import { Select } from "../../../components/Select";
import { CaixaDeTexto } from "../components/CaixaDeTexto";
import { CorpoPrincipal } from "../components/CorpoPrincipal";
import { FormLayout } from "../components/FormLayout";
import { FormRow } from "../components/FormRow";
import { Header } from "../components/Header";
import { RodapeAcesso } from "../components/RodapeAcesso";
import { TituloHeader } from "../components/TituloHeader";

const GerarConvitePage = () => {
  return (
    <PageLayout>
      <Header>
        <TituloHeader>Convide mais pessoas</TituloHeader>
        <CaixaDeTexto variant="primary">
          Utilize o formulário abaixo para gerar um link de convite
        </CaixaDeTexto>
      </Header>

      <CorpoPrincipal>
        <p className="text-support">
          Utilize o formulário abaixo para gerar um link de convite para que
          outras pessoas possam se juntar a plataforma. O link tem validade de 2
          dias e pode ser utilizado apenas uma vez.
        </p>

        <FormLayout>
          <FormRow cols={1}>
            <Select
              placeholder="Papel do Usuário"
              options={[
                { value: "admin", label: "Convidar Administrador" },
                { value: "usuario", label: "Convidar Membro" },
              ]}
            />
            <Input
              placeholder="Email do Convidado"
              type="email"
              variant="secondary"
              fullWidth
            />
            <Button variant="primary" theme="accent-red" fullWidth>
              Enviar Link de Convite
            </Button>
          </FormRow>
        </FormLayout>
      </CorpoPrincipal>

      <RodapeAcesso />
    </PageLayout>
  );
};

export default GerarConvitePage;
