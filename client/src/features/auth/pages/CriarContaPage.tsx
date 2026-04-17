import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { PageLayout } from "../../../components/PageLayout";
import { CorpoPrincipal } from "../components/CorpoPrincipal";
import { Divisor } from "../components/Divisor";
import { FormLayout } from "../components/FormLayout";
import { FormRow } from "../components/FormRow";
import { Header } from "../components/Header";
import { RodapeAcesso } from "../components/RodapeAcesso";
import { TituloHeader } from "../components/TituloHeader";
import { useAppSelector } from "../../../store/hooks";
import { useNavigate } from "react-router-dom";
import {
  criarContaSchema,
  type CriarContaFormData,
} from "../schemas/criarContaSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const CriarContaPage = () => {
  const { emailConvite } = useAppSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CriarContaFormData>({
    resolver: zodResolver(criarContaSchema),
    defaultValues: {
      email: emailConvite ?? "",
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data: CriarContaFormData) => {
    console.log("Dados do formulário:", data);
    navigate("/completar-dados");
  };

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

        <FormLayout onSubmit={handleSubmit(onSubmit)}>
          <FormRow cols={1}>
            <Input
              placeholder="Email"
              type="email"
              variant={emailConvite ? "disabled" : "secondary"}
              fullWidth
              {...register("email")}
              error={errors.email?.message}
            />
            <Input
              placeholder="Telefone"
              type="tel"
              variant="secondary"
              fullWidth
              {...register("telefone")}
              error={errors.telefone?.message}
            />
            <Input
              placeholder="Senha"
              type="password"
              variant="secondary"
              fullWidth
              {...register("senha")}
              error={errors.senha?.message}
            />
            <Input
              placeholder="Confirme sua senha"
              type="password"
              variant="secondary"
              fullWidth
              {...register("confirmarSenha")}
              error={errors.confirmarSenha?.message}
            />
            <Button
              theme="accent-red"
              variant="primary"
              fullWidth
              type="submit"
            >
              Criar Acesso
            </Button>
          </FormRow>
        </FormLayout>
      </CorpoPrincipal>

      <RodapeAcesso />
    </PageLayout>
  );
};

export default CriarContaPage;
