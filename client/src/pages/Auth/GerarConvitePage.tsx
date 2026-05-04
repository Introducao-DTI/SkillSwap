import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { Select } from "../../components/Select";
import { CaixaDeTexto } from "../../components/Auth/CaixaDeTexto";
import { CorpoPrincipal } from "../../components/Auth/CorpoPrincipal";
import { FormLayout } from "../../components/Auth/FormLayout";
import { FormRow } from "../../components/Auth/FormRow";
import { Header } from "../../components/Auth/Header";
import { RodapeAcesso } from "../../components/Auth/RodapeAcesso";
import { TituloHeader } from "../../components/Auth/TituloHeader";
import { useNavigate } from "react-router-dom";
import {
  gerarConviteSchema,
  type GerarConviteFormData,
} from "../../schemas/Auth/gerarConviteSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { conviteApi } from "../../api/conviteApi";
import { AuthLayout } from "../../components/Auth/AuthLayout";

const GerarConvitePage = () => {
  const [erroApi, setErroApi] = useState<string | null>(null);
  const [linkConvite, setLinkConvite] = useState<string | null>(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GerarConviteFormData>({
    resolver: zodResolver(gerarConviteSchema),
  });

  const onSubmit = async (data: GerarConviteFormData) => {
    try {
      setErroApi(null);
      setLinkConvite(null);
      const resposta = await conviteApi.gerar({
        email: data.email,
        nome: data.nome,
        role: data.roleUsuario,
      });

      const link = `${window.location.origin}/?token=${resposta.token}`;
      setLinkConvite(link);
    } catch (error) {
      setErroApi(
        error instanceof Error ? error.message : "Erro ao gerar convite.",
      );
    }
  };

  const handleIrParaDashboard = () => {
    navigate("/login");
  };

  return (
    <AuthLayout>
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
        </FormLayout>
        <Button variant="secondary" fullWidth onClick={handleIrParaDashboard}>
          Ir Para Dashboard
        </Button>
        {linkConvite && (
          <div className="w-full flex flex-col gap-2">
            <p className="text-support text-sm">Link gerado com sucesso:</p>
            <div className="flex gap-2">
              <Input
                variant="disabled"
                fullWidth
                value={linkConvite}
                readOnly
              />
              <Button
                variant="secondary"
                onClick={() => navigator.clipboard.writeText(linkConvite)}
              >
                Copiar
              </Button>
            </div>
          </div>
        )}
        {erroApi && <p className="text-accent-red text-sm">{erroApi}</p>}
      </CorpoPrincipal>

      <RodapeAcesso />
    </AuthLayout>
  );
};

export default GerarConvitePage;
