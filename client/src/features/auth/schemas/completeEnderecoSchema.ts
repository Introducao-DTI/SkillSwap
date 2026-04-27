import { z } from "zod";

export const completeEnderecoSchema = z.object({
  cep: z
    .string()
    .regex(/^\d{5}-?\d{3}$/, "O CEP deve ser válido")
    .min(8, "O CEP deve ter 8 dígitos")
    .max(9, "O CEP deve ter 8 dígitos"),
  logradouro: z.string().min(1, "O logradouro é obrigatório"),
  numero: z.string().min(1, "O número é obrigatório"),
  complemento: z.string().optional(),
  bairro: z.string().min(1, "O bairro é obrigatório"),
  cidade: z.string().min(1, "A cidade é obrigatória"),
  estado: z.string().min(1, "O estado é obrigatório"),
});

export type CompleteEnderecoFormData = z.infer<typeof completeEnderecoSchema>;
