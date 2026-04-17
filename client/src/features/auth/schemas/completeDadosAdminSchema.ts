import { z } from "zod";

export const completeDadosAdminSchema = z.object({
  cnpj: z.string().regex(/^\d{14}$/, "O CNPJ deve conter 14 dígitos numéricos"),
  razaoSocial: z.string().min(1, "A razão social é obrigatória"),
  dominioAcesso: z.url("O domínio de acesso deve ser uma URL válida"),
});

export type CompleteDadosAdminFormData = z.infer<
  typeof completeDadosAdminSchema
>;
