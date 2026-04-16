import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { PageLayout } from "../../../components/PageLayout";
import { CaixaDeTexto } from "../components/CaixaDeTexto";
import { CorpoPrincipal } from "../components/CorpoPrincipal";
import { FormLayout } from "../components/FormLayout";
import { FormRow } from "../components/FormRow";
import { Header } from "../components/Header";
import { RodapeAcesso } from "../components/RodapeAcesso";
import { TituloHeader } from "../components/TituloHeader";
import type { CompleteDadosPageProps } from "../types";

const CompleteDadosPage = ({ roleUsuario }: CompleteDadosPageProps) => {
  return (
    <PageLayout>
      <Header>
        {roleUsuario === "admin" ? (
          <>
            <TituloHeader>Complete os dados da empresa</TituloHeader>
            <CaixaDeTexto variant="primary">
              Estes dados poderão ser alterados posteriormente no dashboard do
              ADM.
            </CaixaDeTexto>
          </>
        ) : (
          <>
            <TituloHeader>Complete os seus dados</TituloHeader>
            <CaixaDeTexto variant="primary">
              Estes dados poderão ser alterados posteriormente no perfil do
              usuário.
            </CaixaDeTexto>
          </>
        )}
      </Header>

      <CorpoPrincipal>
        <FormLayout>
          {roleUsuario === "admin" ? (
            <FormRow cols={1}>
              <Input placeholder="CNPJ" variant="secondary" fullWidth />
              <Input placeholder="Razão Social" variant="secondary" fullWidth />
              <Input
                placeholder="Domínio Acesso (empresa.com)"
                variant="secondary"
                fullWidth
              />
            </FormRow>
          ) : (
            <>
              <FormRow cols={1}>
                <Input placeholder="CEP" variant="secondary" fullWidth />
                <Input placeholder="Rua" variant="secondary" fullWidth />
              </FormRow>

              <FormRow cols={2}>
                <Input placeholder="Número" variant="secondary" fullWidth />
                <Input
                  placeholder="Complemento"
                  variant="secondary"
                  fullWidth
                />
              </FormRow>

              <FormRow cols={2}>
                <Input placeholder="Cidade" />
                <Input placeholder="Estado" />
              </FormRow>
            </>
          )}
        </FormLayout>

        <Button theme="accent-red" variant="primary" fullWidth>
          Finalizar Cadastro
        </Button>
      </CorpoPrincipal>

      <RodapeAcesso />
    </PageLayout>
  );
};

export default CompleteDadosPage;
