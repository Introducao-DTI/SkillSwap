import { api } from "../lib/api";

export type ConviteDTO = {
  token: string;
  email: string;
  nome: string;
  role: "Admin" | "Usuario";
  expiracao: string;
  usuarioId?: string;
  etapa: string;
};

export type GerarConviteRequest = {
  email: string;
  nome: string;
  role: "Admin" | "Usuario";
};

export type GerarConviteResponse = {
  token: string;
  email: string;
  nome: string;
  role: string;
  expiracao: string;
};

export const conviteApi = {
  validarToken: async (token: string): Promise<ConviteDTO> => {
    const response = await api.get<ConviteDTO>(
      `/api/v1/convite/validar?token=${token}`,
    );
    return response.data;
  },

  consumirToken: async (token: string): Promise<void> => {
    await api.post("/api/v1/convite/consumir", { token });
  },

  gerar: async (dto: GerarConviteRequest): Promise<GerarConviteResponse> => {
    const response = await api.post<GerarConviteResponse>(
      "/api/v1/convite/gerar",
      dto,
    );
    return response.data;
  },
};
