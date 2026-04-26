import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { PageLayout } from "../../../components/PageLayout";
import { Select } from "../../../components/Select";
import { CaixaDeTexto } from "../components/CaixaDeTexto";
import { CorpoPrincipal } from "../components/CorpoPrincipal";
import { FormLayout } from "../components/FormLayout";
import { FormRow } from "../components/FormRow";
import { Header } from "../components/Header";
import { RodapeAcesso } from "../components/RodapeAcesso";
import { TituloHeader } from "../components/TituloHeader";
import { useNavigate } from "react-router-dom";
import {
  gerarConviteSchema,
  type GerarConviteFormData,
} from "../schemas/gerarConviteSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const GerarConvitePage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GerarConviteFormData>({
    resolver: zodResolver(gerarConviteSchema),
  });

  const onSubmit = (data: GerarConviteFormData) => {
    console.log("Dados do formulário:", data);
  };

  const handleIrParaDashboard = () => {
    navigate("/login");
  };

  return (
    <PageLayout>
      <Header>
        <TituloHeader>Convide mais pessoas</TituloHeader>
        <CaixaDeTexto variant="primary">
          Utilize o formulário abaixo para gerar um link de convite
        </CaixaDeTexto>
      </Header>

      <CorpoPrincipal>
        <p className="text-support">
          Utilize o formulário abaixo para gerar um link de convite para que
          outras pessoas possam se juntar a plataforma. O link tem validade de 2
          dias e pode ser utilizado apenas uma vez.
        </p>

        <FormLayout onSubmit={handleSubmit(onSubmit)}>
          <FormRow cols={1}>
            <Input
              placeholder="Nome do Convidado"
              type="text"
              variant="secondary"
              fullWidth
              {...register("nome")}
              error={errors.nome?.message}
            />
            <Select
              placeholder="Papel do Usuário"
              options={[
                { value: "Admin", label: "Convidar Administrador" },
                { value: "Usuario", label: "Convidar Membro" },
              ]}
              fullWidth
              {...register("roleUsuario")}
              error={errors.roleUsuario?.message}
            />
            <Input
              placeholder="Email do Convidado"
              type="email"
              variant="secondary"
              fullWidth
              {...register("email")}
              error={errors.email?.message}
            />
            <Button
              variant="primary"
              theme="accent-red"
              fullWidth
              type="submit"
            >
              Enviar Link de Convite
            </Button>
          </FormRow>
          <Button variant="secondary" fullWidth onClick={handleIrParaDashboard}>
            Ir Para Dashboard
          </Button>
        </FormLayout>
      </CorpoPrincipal>

      <RodapeAcesso />
    </PageLayout>
  );
};

export default GerarConvitePage;
