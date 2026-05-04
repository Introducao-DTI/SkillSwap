import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { CorpoPrincipal } from "../../components/Auth/CorpoPrincipal";
import { Header } from "../../components/Auth/Header";
import { RodapeAcesso } from "../../components/Auth/RodapeAcesso";
import { TituloHeader } from "../../components/Auth/TituloHeader";
import { CaixaDeTexto } from "../../components/Auth/CaixaDeTexto";
import { AuthLayout } from "../../components/Auth/AuthLayout";

const TokenInvalidoPage = () => {
  const navigate = useNavigate();
  const { etapaCadastro, tokenConvite } = useAppSelector((state) => state.auth);

  const mensagem = () => {
    if (etapaCadastro === "concluido") {
      return "O processo de cadastro já foi concluído para este token. Por favor, tente acessar com suas credenciais.";
    }
    if (tokenConvite) {
      return "O token de convite é inválido ou expirou. Por favor, solicite um novo convite para continuar.";
    }
    return "É necessário um token de convite para acessar esta página. Por favor, solicite um convite para iniciar o cadastro.";
  };

  return (
    <AuthLayout>
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
    </AuthLayout>
  );
};

export default TokenInvalidoPage;
