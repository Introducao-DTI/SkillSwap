import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { PageLayout } from "../../components/PageLayout";
import { CaixaDeTexto } from "../../components/Auth/CaixaDeTexto";
import { CorpoPrincipal } from "../../components/Auth/CorpoPrincipal";
import { FormLayout } from "../../components/Auth/FormLayout";
import { FormRow } from "../../components/Auth/FormRow";
import { Header } from "../../components/Auth/Header";
import { RodapeAcesso } from "../../components/Auth/RodapeAcesso";
import { TituloHeader } from "../../components/Auth/TituloHeader";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useNavigate } from "react-router-dom";

import {
  completeDadosAdminSchema,
  type CompleteDadosAdminFormData,
} from "../../schemas/Auth/completeDadosAdminSchema";
import {
  completeEnderecoSchema,
  type CompleteEnderecoFormData,
} from "../../schemas/Auth/completeEnderecoSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCep } from "../../hooks/Auth/useCep";
import { usuarioApi } from "../../api/usuarioApi";
import { useState } from "react";
import { setEtapaCadastro, setToken } from "../../store/slices/authSlice";

const CompleteDadosPage = () => {
  const {
    roleUsuario,
    idUsuario,
    emailUsuario,
    telefoneUsuario,
    tokenConvite,
  } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const [erroApi, setErroApi] = useState<string | null>(null);

  const navigate = useNavigate();

  const {
    register: registerAdmin,
    handleSubmit: handleSubmitAdmin,
    formState: { errors: errorsAdmin },
  } = useForm<CompleteDadosAdminFormData>({
    resolver: zodResolver(completeDadosAdminSchema),
  });

  const {
    register: registerUsuario,
    handleSubmit: handleSubmitUsuario,
    formState: { errors: errorsUsuario },
    setValue,
    control,
    clearErrors,
  } = useForm<CompleteEnderecoFormData>({
    resolver: zodResolver(completeEnderecoSchema),
  });

  const { buscandoCep, erroCep } = useCep({ control, setValue, clearErrors });

  const onSubmitAdmin = (data: CompleteDadosAdminFormData) => {
    usuarioApi
      .configurarEmpresa({
        tokenConvite: tokenConvite!,
        usuarioAdminId: idUsuario!,
        dadosEmpresa: {
          cnpj: data.cnpj,
          razaoSocial: data.razaoSocial,
          dominioAcesso: data.dominioAcesso,
        },
      })
      .then((resposta) => {
        dispatch(setToken(resposta.tokenAcesso));
        navigate("/proteger-conta");
        dispatch(setEtapaCadastro("proteger-conta"));
      })
      .catch((error) => {
        setErroApi(
          error instanceof Error
            ? error.message
            : "Ocorreu um erro ao configurar a empresa",
        );
      });
  };

  const onSubmitUsuario = async (data: CompleteEnderecoFormData) => {
    try {
      await usuarioApi.atualizarInformacoes(idUsuario!, {
        email: emailUsuario!,
        telefone: telefoneUsuario!,
        rua: data.logradouro,
        numero: data.numero,
        complemento: data.complemento,
        bairro: data.bairro,
        cidade: data.cidade,
        estado: data.estado,
        cep: data.cep,
      });

      dispatch(setEtapaCadastro("proteger-conta"));
      navigate("/proteger-conta");
    } catch (error) {
      setErroApi(
        error instanceof Error
          ? error.message
          : "Ocorreu um erro ao atualizar as informações",
      );
    }
  };

  return (
    <PageLayout>
      <Header>
        {roleUsuario === "Admin" ? (
          <>
            <TituloHeader>Complete os dados da empresa</TituloHeader>
            <CaixaDeTexto variant="primary">
              Estes dados poderão ser alterados posteriormente no dashboard do
              ADM.
            </CaixaDeTexto>
          </>
        ) : (
          <>
            <TituloHeader>Complete os seus dados</TituloHeader>
            <CaixaDeTexto variant="primary">
              Estes dados poderão ser alterados posteriormente no perfil do
              usuário.
            </CaixaDeTexto>
          </>
        )}
      </Header>

      <CorpoPrincipal>
        {roleUsuario === "Admin" ? (
          <FormLayout onSubmit={handleSubmitAdmin(onSubmitAdmin)}>
            <FormRow cols={1}>
              <Input
                type="text"
                placeholder="CNPJ"
                variant="secondary"
                fullWidth
                {...registerAdmin("cnpj")}
                error={errorsAdmin.cnpj?.message}
              />
              <Input
                type="text"
                placeholder="Razão Social"
                variant="secondary"
                fullWidth
                {...registerAdmin("razaoSocial")}
                error={errorsAdmin.razaoSocial?.message}
              />
              <Input
                type="text"
                placeholder="Domínio Acesso (empresa.com)"
                variant="secondary"
                fullWidth
                {...registerAdmin("dominioAcesso")}
                error={errorsAdmin.dominioAcesso?.message}
              />
            </FormRow>
            {erroApi && <p className="text-accent-red text-sm">{erroApi}</p>}
            <Button
              theme="accent-red"
              variant="primary"
              fullWidth
              type="submit"
            >
              Finalizar Cadastro
            </Button>
          </FormLayout>
        ) : (
          <FormLayout onSubmit={handleSubmitUsuario(onSubmitUsuario)}>
            <FormRow cols={1}>
              <Input
                placeholder="CEP"
                type="text"
                variant="secondary"
                fullWidth
                {...registerUsuario("cep")}
                error={errorsUsuario.cep?.message}
              />
              {buscandoCep && (
                <p className="text-support text-sm">Buscando CEP...</p>
              )}
              {erroCep && <p className="text-accent-red text-sm">{erroCep}</p>}
              <Input
                placeholder="Rua"
                type="text"
                variant="secondary"
                fullWidth
                {...registerUsuario("logradouro")}
                error={errorsUsuario.logradouro?.message}
              />
            </FormRow>

            <FormRow cols={2}>
              <Input
                placeholder="Número"
                type="text"
                variant="secondary"
                fullWidth
                {...registerUsuario("numero")}
                error={errorsUsuario.numero?.message}
              />
              <Input
                placeholder="Complemento"
                type="text"
                variant="secondary"
                fullWidth
                {...registerUsuario("complemento")}
                error={errorsUsuario.complemento?.message}
              />
            </FormRow>

            <FormRow cols={1}>
              <Input
                placeholder="Bairro"
                type="text"
                variant="secondary"
                fullWidth
                {...registerUsuario("bairro")}
                error={errorsUsuario.bairro?.message}
              />
            </FormRow>

            <FormRow cols={2}>
              <Input
                placeholder="Cidade"
                type="text"
                variant="secondary"
                fullWidth
                {...registerUsuario("cidade")}
                error={errorsUsuario.cidade?.message}
              />
              <Input
                placeholder="Estado"
                type="text"
                variant="secondary"
                fullWidth
                {...registerUsuario("estado")}
                error={errorsUsuario.estado?.message}
              />
            </FormRow>
            {erroApi && <p className="text-accent-red text-sm">{erroApi}</p>}
            <Button
              theme="accent-red"
              variant="primary"
              fullWidth
              type="submit"
            >
              Finalizar Cadastro
            </Button>
          </FormLayout>
        )}
      </CorpoPrincipal>

      <RodapeAcesso />
    </PageLayout>
  );
};

export default CompleteDadosPage;
