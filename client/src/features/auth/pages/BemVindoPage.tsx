import { Button } from "../../../components/Button";
import { CaixaDeTexto } from "../components/CaixaDeTexto";
import { PageLayout } from "../../../components/PageLayout";
import { CorpoPrincipal } from "../components/CorpoPrincipal";
import { Header } from "../components/Header";
import { RodapeAcesso } from "../components/RodapeAcesso";
import { TituloHeader } from "../components/TituloHeader";

type Props = {
  nomeUsuario: string;
  roleUsuario: string;
};

const BemVindoPage = ({ nomeUsuario, roleUsuario }: Props) => {
  return (
    <PageLayout>
      <Header>
        <TituloHeader>
          <div className="w-full">
            <h1 className="text-left text-accent-red">Olá {nomeUsuario}!</h1>
          </div>
        </TituloHeader>
        <CaixaDeTexto>
          Bem vindo a plataforma SkillSwap um novo jeito de aprender com quem
          sabe!
        </CaixaDeTexto>
      </Header>

      <CorpoPrincipal>
        {roleUsuario === "admin" ? (
          <p className="text-support">
            Para realizar o seu primeiro acesso como administrador clique no
            botão acessar abaixo e finalize o seu cadastro.
          </p>
        ) : (
          <p className="text-support">
            Para realizar o seu primeiro acesso como mentor/mentorado clique no
            botão acessar abaixo e siga o passo a passo para criar sua conta.
          </p>
        )}
        <Button theme="primary-dark" variant="secondary" fullWidth>
          Acessar
        </Button>
      </CorpoPrincipal>

      <RodapeAcesso />
    </PageLayout>
  );
};

export default BemVindoPage;
