import { z } from "zod";

export const criarContaSchema = z
  .object({
    nome: z.string().min(2, "O nome deve ter no mínimo 2 caracteres"),
    email: z.email("O email deve ser válido"),
    telefone: z
      .string()
      .min(10, "O telefone deve ter no mínimo 10 dígitos")
      .max(11, "O telefone deve ter no máximo 11 dígitos"),
    senha: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),
    confirmarSenha: z.string().min(1, "A confirmação de senha é obrigatória"),
  })
  .refine((data) => data.senha === data.confirmarSenha, {
    message: "As senhas não coincidem",
    path: ["confirmarSenha"],
  });

export type CriarContaFormData = z.infer<typeof criarContaSchema>;
