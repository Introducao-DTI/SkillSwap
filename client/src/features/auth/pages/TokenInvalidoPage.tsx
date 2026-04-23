import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button";
import { PageLayout } from "../../../components/PageLayout";
import { useAppSelector } from "../../../store/hooks";
import { CaixaDeTexto } from "../components/CaixaDeTexto";
import { CorpoPrincipal } from "../components/CorpoPrincipal";
import { Header } from "../components/Header";
import { RodapeAcesso } from "../components/RodapeAcesso";
import { TituloHeader } from "../components/TituloHeader";

const TokenInvalidoPage = () => {
  const navigate = useNavigate();
  const { etapaCadastro } = useAppSelector((state) => state.auth);

  return (
    <PageLayout>
      <Header>
        <TituloHeader>Token Inválido</TituloHeader>
        {etapaCadastro === "concluido" ? (
          <CaixaDeTexto>
            O processo de cadastro já foi concluído para este token. Por favor,
            tente acessar com suas credenciais.
          </CaixaDeTexto>
        ) : (
          <CaixaDeTexto>
            O token fornecido é inválido ou expirou. Por favor, tente novamente.
          </CaixaDeTexto>
        )}
      </Header>
      <CorpoPrincipal>
        {etapaCadastro === "concluido" ? (
          <Button
            theme="accent-red"
            variant="primary"
            onClick={() => navigate("/login")}
          >
            Voltar para Acesso
          </Button>
        ) : (
          <Button
            theme="accent-red"
            variant="primary"
            onClick={() => navigate("/solicitar-convite")}
          >
            Solicitar Novo Convite
          </Button>
        )}
      </CorpoPrincipal>
      <RodapeAcesso />
    </PageLayout>
  );
};

export default TokenInvalidoPage;
