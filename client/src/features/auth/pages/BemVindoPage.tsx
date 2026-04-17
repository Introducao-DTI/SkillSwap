import { Button } from "../../../components/Button";
import { CaixaDeTexto } from "../components/CaixaDeTexto";
import { PageLayout } from "../../../components/PageLayout";
import { CorpoPrincipal } from "../components/CorpoPrincipal";
import { Header } from "../components/Header";
import { RodapeAcesso } from "../components/RodapeAcesso";
import { TituloHeader } from "../components/TituloHeader";
import { useAppSelector } from "../../../store/hooks";
import { useNavigate } from "react-router-dom";

const BemVindoPage = () => {
  const { roleUsuario, nomeUsuario } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleAcessar = () => {
    navigate("/criar-conta");
  };

  return (
    <PageLayout>
      <Header>
        <TituloHeader>Olá {nomeUsuario}!</TituloHeader>
        <CaixaDeTexto>
          Bem vindo a plataforma SkillSwap um novo jeito de aprender com quem
          sabe!
        </CaixaDeTexto>
      </Header>

      <CorpoPrincipal>
        {roleUsuario === "Admin" ? (
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
        <Button
          theme="primary-dark"
          variant="secondary"
          fullWidth
          onClick={handleAcessar}
        >
          Acessar
        </Button>
      </CorpoPrincipal>

      <RodapeAcesso />
    </PageLayout>
  );
};

export default BemVindoPage;
