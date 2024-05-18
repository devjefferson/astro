import { z as zod } from "zod";

export const loginSchema = zod.object({
  email: zod
    .string({ required_error: "O campo e-mail é obrigatório." })
    .email("Informe um e-mail válido!"),
  password: zod
    .string()
    .optional()
    .refine((v) => !!v, "O campo senha é obrigatório."),
});
