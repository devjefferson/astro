import { differenceInYears } from 'date-fns'
import { z as zod } from 'zod'
import { cpf } from 'cpf-cnpj-validator'; 


export const ConsumerFormEditSchema = zod.object({
  birthdate: zod
    .string({ required_error: 'O campo é obrigatório.' })
    .refine((v = '') => {
      try {
        const date = v.split('/')
        const years = differenceInYears(
          new Date(),
          new Date(`${date[2]}-${date[1]}-${date[0]}`),
        )
        return years >= 18
      } catch (error) {
        return false
      }
    }, 'Você precisa ter 18 ou mais anos.'),
  cpf: zod
    .string({ required_error: 'O campo é obrigatório.' })
    .transform((v) => v.replaceAll('.', '').replace('-', ''))
    .refine((v) => !!v, 'O campo é obrigatório.')
    .refine((v) => cpf.isValid(v), 'CPF Inválido!'),
  name: zod
    .string({ required_error: 'O campo é obrigatório.' })
    .refine((v) => !!v, 'O campo é obrigatório.'),
  surname: zod
    .string({ required_error: 'O campo é obrigatório.' })
    .refine((v) => !!v, 'O campo é obrigatório.'),
  email: zod
    .string({ required_error: 'O campo é obrigatório.' })
    .refine((v) => !!v, 'O campo é obrigatório.'),
  phone: zod
    .string({ required_error: 'O campo é obrigatório.' })
    .refine((v) => !!v, 'O campo é obrigatório.')
    .transform((v) => {
      return v
        .replace('(', '')
        .replace(' ', '')
        .replace(')', '')
        .replace('-', '')
    }),
  gender: zod
    .string({ required_error: 'O campo é obrigatório.' })
    .refine((v) => !!v, 'O campo é obrigatório.'),
  zipCode: zod
    .string({ required_error: 'O campo é obrigatório.' })
    .refine((v) => v.replace('-', ''), 'O campo é obrigatório.'),
  number: zod
    .string({ required_error: 'O campo é obrigatório.' })
    .refine((v) => !!v, 'O campo é obrigatório.'),
  district: zod
    .string({ required_error: 'O campo é obrigatório.' })
    .refine((v) => !!v, 'O campo é obrigatório.'),
  street: zod
    .string({ required_error: 'O campo é obrigatório.' })
    .refine((v) => !!v, 'O campo é obrigatório.'),
  city: zod
    .string({ required_error: 'O campo é obrigatório.' })
    .refine((v) => !!v, 'O campo é obrigatório.'),
  state: zod
    .string({ required_error: 'O campo é obrigatório.' })
    .refine((v) => !!v, 'O campo é obrigatório.'),
  complement: zod.string().optional().nullable(),
  password: zod
  .string({ required_error: 'O campo é obrigatório.' })
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/,
    'Precisa conter no mínimo 8 caracteres, Letra maiúsculo, letra minuscula, número e um caractere especial',
  )
  .refine((v) => !!v, 'O campo é obrigatório.'),
passwordConfirmation: zod
  .string({ required_error: 'O campo é obrigatório.' })
  .refine((v) => !!v, 'O campo é obrigatório.'),
}).refine((data) => data.password === data.passwordConfirmation, {
  message: 'As senhas deve ser iguais.',
  path: ['passwordConfirmation'],
})
