import { Button } from "../../components/Button/Button";
import { CaixaDeTexto } from "../../components/Auth/CaixaDeTexto";
import { CorpoPrincipal } from "../../components/Auth/CorpoPrincipal";
import { Header } from "../../components/Auth/Header";
import { RodapeAcesso } from "../../components/Auth/RodapeAcesso";
import { TituloHeader } from "../../components/Auth/TituloHeader";
import { useAppSelector } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../../components/Auth/AuthLayout";

const BemVindoPage = () => {
  const { roleUsuario, nomeConvite } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleAcessar = () => {
    navigate("/criar-conta");
  };

  return (
    <AuthLayout>
      <Header>
        <TituloHeader>Olá {nomeConvite}!</TituloHeader>
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
    </AuthLayout>
  );
};

export default BemVindoPage;
