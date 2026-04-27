import { z } from "zod";

export const validarCodigoSchema = z.object({
  codigoVerificacao: z
    .string()
    .length(6, "O código deve ter 6 caracteres")
    .regex(/^\d{6}$/, "O código deve conter apenas números"),
});

export type ValidarCodigoFormData = z.infer<typeof validarCodigoSchema>;
