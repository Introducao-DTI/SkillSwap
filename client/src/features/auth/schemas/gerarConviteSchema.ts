import { z } from "zod";

export const gerarConviteSchema = z.object({
  roleUsuario: z.enum(["Admin", "Usuario"], {
    message: "O tipo de usuário deve ser 'Admin' ou 'Usuario'",
  }),
  email: z.email("O email deve ser válido"),
});

export type GerarConviteFormData = z.infer<typeof gerarConviteSchema>;
