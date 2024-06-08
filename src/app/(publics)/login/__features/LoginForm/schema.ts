import { z as zod } from 'zod'

export const UserLoginSchema = zod.object({
  email: zod
    .string({ required_error: 'O campo e-mail é obrigatório.' })
    .trim()
    .email('Informe um e-mail válido.')
    .refine((v) => !!v, 'O campo email é obrigatório.'),

  password: zod
    .string({ required_error: 'O campo senha é obrigatório.' })
    .trim()
    .refine((v) => !!v, 'O campo senha é obrigatório.'),
})
