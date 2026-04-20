import { api } from "../../../lib/api";
import type { InformacoesDTO, UsuarioDTO } from "../types";

export type CriarUsuarioRequest = {
  nome: string;
  email: string;
  telefone: string;
  senha: string;
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
};
