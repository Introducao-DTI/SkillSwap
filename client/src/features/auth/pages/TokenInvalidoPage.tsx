// import { useNavigate } from "react-router-dom";
import { PageLayout } from "../../../components/PageLayout";
import { CaixaDeTexto } from "../components/CaixaDeTexto";
import { CorpoPrincipal } from "../components/CorpoPrincipal";
import { Header } from "../components/Header";
import { RodapeAcesso } from "../components/RodapeAcesso";
import { TituloHeader } from "../components/TituloHeader";
// import { Button } from "../../../components/Button";

const TokenInvalidoPage = () => {
  // const navigate = useNavigate();

  return (
    <PageLayout>
      <Header>
        <TituloHeader>Token Inválido</TituloHeader>
        <CaixaDeTexto>
          O token fornecido é inválido ou expirou. Por favor, tente novamente.
        </CaixaDeTexto>
      </Header>
      <CorpoPrincipal>
        {/* <Button onClick={() => navigate("/login")}>Voltar para Acesso</Button> */}
      </CorpoPrincipal>
      <RodapeAcesso />
    </PageLayout>
  );
};

export default TokenInvalidoPage;
