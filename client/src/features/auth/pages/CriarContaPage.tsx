import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { PageLayout } from "../../../components/PageLayout";
import { CorpoPrincipal } from "../components/CorpoPrincipal";
import { Divisor } from "../components/Divisor";
import { Header } from "../components/Header";
import { RodapeAcesso } from "../components/RodapeAcesso";
import { TituloHeader } from "../components/TituloHeader";
import type { CriarContaPageProps } from "../types";

const CriarContaPage = ({ emailConvite }: CriarContaPageProps) => {
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

        <Input
          placeholder="Email"
          value={emailConvite}
          variant="disabled"
          fullWidth
        />
        <Input placeholder="Telefone" variant="secondary" fullWidth />
        <Input placeholder="Senha" variant="secondary" fullWidth />
        <Input placeholder="Confirme sua senha" variant="secondary" fullWidth />
        <Button theme="accent-red" variant="primary" fullWidth>
          Criar Acesso
        </Button>
      </CorpoPrincipal>

      <RodapeAcesso />
    </PageLayout>
  );
};

export default CriarContaPage;
