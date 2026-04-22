import { api } from "../../../lib/api";

export type ConviteDTO = {
  token: string;
  email: string;
  nome: string;
  role: "Admin" | "Usuario";
  expiracao: string;
};

export const conviteApi = {
  validarToken: async (token: string): Promise<ConviteDTO> => {
    const response = await api.get<ConviteDTO>(
      `/api/v1/convite/validar?token=${token}`,
    );
    return response.data;
  },
};
