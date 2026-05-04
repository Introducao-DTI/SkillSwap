import { api } from "../lib/api";
import type { InformacoesDTO, UsuarioDTO } from "../types/Auth";

export type CriarUsuarioRequest = {
  nome: string;
  email: string;
  telefone: string;
  senha: string;
  tokenConvite: string;
};

export type AtualizarInformacoesRequest = {
  email: string;
  telefone: string;
  rua: string;
  complemento?: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
};

export type SetupEmpresaRequest = {
  tokenConvite: string;
  usuarioAdminId: string;
  dadosEmpresa: {
    cnpj: string;
    razaoSocial: string;
    dominioAcesso: string;
  };
};

export type SetupEmpresaResponse = {
  tokenAcesso: string;
  empresaId: string;
  adminId: string;
};

export const usuarioApi = {
  criar: async (dto: CriarUsuarioRequest): Promise<UsuarioDTO> => {
    const response = await api.post<UsuarioDTO>("/api/v1/usuario", dto);
    return response.data;
  },

  obterPorId: async (id: string): Promise<UsuarioDTO> => {
    const response = await api.get<UsuarioDTO>(`/api/v1/usuario/${id}`);
    return response.data;
  },

  atualizarInformacoes: async (
    id: string,
    dto: AtualizarInformacoesRequest,
  ): Promise<InformacoesDTO> => {
    const response = await api.put<InformacoesDTO>(
      `/api/v1/usuario/${id}/informacoes`,
      dto,
    );
    return response.data;
  },

  enviarCodigoVerificacao: async (
    id: string,
    metodo: string,
  ): Promise<void> => {
    await api.post(`/api/v1/usuario/${id}/verificacao/enviar`, { metodo });
  },

  validarCodigoVerificacao: async (
    id: string,
    codigo: string,
  ): Promise<void> => {
    await api.post(`/api/v1/usuario/${id}/verificacao/validar`, { codigo });
  },

  configurarEmpresa: async (
    dto: SetupEmpresaRequest,
  ): Promise<SetupEmpresaResponse> => {
    const response = await api.post<SetupEmpresaResponse>(
      "/api/v1/onboarding/setup",
      dto,
    );
    return response.data;
  },
};
