import { z } from "zod";

export const fazerLoginSchema = z.object({
  email: z.email("O email deve ser válido"),
  senha: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),
});

export type FazerLoginFormData = z.infer<typeof fazerLoginSchema>;
