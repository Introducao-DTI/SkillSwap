import { api } from "../../../lib/api";
import type { UsuarioDTO } from "../types";

export type CriarUsuarioRequest = {
  nome: string;
  email: string;
  telefone: string;
  senha: string;
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
};
