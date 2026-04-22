import { z } from "zod";

export const protegerContaSchema = z.object({
  metodoVerificacao: z.enum(["email"], {
    message: "O tipo de verificação deve ser 'email'",
  }),
});

export type ProtegerContaFormData = z.infer<typeof protegerContaSchema>;
