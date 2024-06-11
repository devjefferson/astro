'use client'

import { Input } from '@/components/Input'
import { Select, SelectItem } from '@nextui-org/react'
import clsx from 'clsx'
import { Controller, UseFormReturn } from 'react-hook-form'
import masker from 'vanilla-masker'


type ConsumerFormEditIdentificationProps = {
  form: UseFormReturn<any, any, undefined>
}

const genderOptions = [
  { label: 'Feminino', value: 'FEMALE' },
  { label: 'Masculino', value: 'MALE' },
  { label: 'Transgênero', value: 'TRANSGENDER' },
  { label: 'Não binário', value: 'NON_BINARY' },
  { label: 'Outro', value: 'OTHER' },
  { label: 'Prefere não dizer', value: 'PREFER_NOT_TO_SAY' },
]

export default function ConsumerFormEditIdentification({
  form,
}: ConsumerFormEditIdentificationProps) {
  return (
    <>
      <div className={clsx(['flex', 'flex-col', 'gap-8'])}>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2>Identificação</h2>
            <div className="grid grid-cols-2 gap-4">
              <Controller
                control={form.control}
                name="birthdate"
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    label="Data de nascimento"
                    onChange={(e) => {
                      const value = masker.toNumber(e.target.value).toString()

                      field.onChange(masker.toPattern(value, '99/99/9999'))
                    }}
                    placeholder="dd/mm/aaaa"
                    helpText={fieldState.error?.message || ''}
                  />
                )}
              />

              <Controller
                control={form.control}
                name="cpf"
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    autoComplete="off"
                    helpText={fieldState.error?.message}
                    label="CPF"
                    placeholder="000.000.000-00"
                    type="text"
                    onChange={(e) => {
                      const value = masker.toNumber(e.target.value).toString()
                      field.onChange(masker.toPattern(value, '999.999.999-99'))
                    }}
                  />
                )}
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
              <Controller
                control={form.control}
                name="name"
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    autoComplete="off"
                    helpText={fieldState.error?.message}
                    label="Nome"
                    placeholder="Primeiro nome"
                    type="text"
                  />
                )}
              />

              <Controller
                control={form.control}
                name="surname"
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    autoComplete="off"
                    helpText={fieldState.error?.message}
                    label="Sobrenome"
                    placeholder="Sobrenome"
                    type="text"
                  />
                )}
              />
            </div>
            <Controller
              control={form.control}
              name="gender"
              render={({ field, fieldState }) => (
                <Select
                  {...field}
                  errorMessage={fieldState.error?.message || ''}
                  label="Gênero"
                  placeholder="Gênero"
                  className='border border-gray-300 rounded-lg '
                  
                  onChange={(e)=>{
                    return  field.onChange(e.target.value)
                  }}
                  
                >
                  {genderOptions.map((item)=><SelectItem key={item.label} value={item.value}>{item.label}</SelectItem> ) }
                </Select>
              )}
            /> 
          </div>

          <div className="flex flex-col gap-4">
            <h2>Contato</h2>
            <div className="grid lg:grid-cols-2 gap-4">
              <Controller
                control={form.control}
                name="email"
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    autoComplete="off"
                    helpText={fieldState.error?.message}
                    label="e-mail"
                    placeholder="seu@email.com"
                    type="text"
                  />
                )}
              />

              <Controller
                control={form.control}
                name="phone"
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    autoComplete="off"
                    helpText={fieldState.error?.message}
                    label="Celular"
                    placeholder="(00) 00000-0000"
                    type="text"
                    onChange={(e) => {
                      const value = masker.toNumber(e.target.value).toString()
                      field.onChange(masker.toPattern(value, '(99) 99999-9999'))
                    }}
                  />
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
