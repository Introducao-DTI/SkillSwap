import { api } from "../lib/api";

export type LoginRequest = { email: string; senha: string };
export type LoginResponse = {
  token: string;
  nome: string;
  role: "Admin" | "Usuario";
};

export const authApi = {
  login: async (dto: LoginRequest): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>("/api/v1/auth/login", dto);
    return response.data;
  },
};
