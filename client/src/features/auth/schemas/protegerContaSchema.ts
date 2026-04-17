import { z } from "zod";

export const protegerContaSchema = z.object({
  metodoVerificacao: z.enum(["sms", "email"], {
    message: "O tipo de verificação deve ser 'sms' ou 'email'",
  }),
});

export type ProtegerContaFormData = z.infer<typeof protegerContaSchema>;
