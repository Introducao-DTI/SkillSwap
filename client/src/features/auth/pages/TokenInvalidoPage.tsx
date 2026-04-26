import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";
import { PageLayout } from "../../../components/PageLayout";
import { Header } from "../components/Header";
import { TituloHeader } from "../components/TituloHeader";
import { CaixaDeTexto } from "../components/CaixaDeTexto";
import { CorpoPrincipal } from "../components/CorpoPrincipal";
import { Button } from "../../../components/Button/Button";
import { RodapeAcesso } from "../components/RodapeAcesso";

const TokenInvalidoPage = () => {
  const navigate = useNavigate();
  const { etapaCadastro, tokenConvite } = useAppSelector((state) => state.auth);

  const mensagem = () => {
    if (etapaCadastro === "concluido") {
      return "O processo de cadastro já foi concluído para este token. Por favor, tente acessar com suas credenciais.";
    }
    if (tokenConvite) {
      return "O token de convite é inválido ou expirou. Por favor, solicite ao administrador um novo convite para continuar.";
    }
    return "É necessário um token de convite para acessar esta página.";
  };

  return (
    <PageLayout>
      <Header>
        <TituloHeader>Token Inválido</TituloHeader>
        <CaixaDeTexto>{mensagem()}</CaixaDeTexto>
      </Header>

      <CorpoPrincipal>
        {etapaCadastro === "concluido" && (
          <Button
            theme="accent-red"
            variant="primary"
            onClick={() => navigate("/login")}
          >
            Voltar para Acesso
          </Button>
        )}
      </CorpoPrincipal>

      <RodapeAcesso />
    </PageLayout>
  );
};

export default TokenInvalidoPage;
