'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import ConsumerFormEditAddress from './fields/Address'
import ConsumerFormEditIdentification from './fields/Identification'
import { ConsumerFormEditSchema } from './schema'
import { Button } from '@nextui-org/button'
import { TCustomer } from '@/models/customer'
import { Input } from '@/components/Input'
import { title } from '@/components/primitives'
import useMessage from '@/hooks/useMessage'



export default function ConsumerForm() {
  const { back, push } = useRouter()
  const {success} = useMessage()
  const form = useForm<TCustomer>({
    resolver: zodResolver(ConsumerFormEditSchema),
    defaultValues: {},
  })

  const handleSubmit: SubmitHandler<TCustomer> = async (data) => {
    window.localStorage.setItem('DUSER', JSON.stringify(data))
    success("cadastrado realizado com sucesso.")
    push('/login')
  }

  return (
    <div className='py-16'>
      <div className="mb-10">
        <h1 className={title()}>Formulário de cadastro</h1>
      </div>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="grid grid-cols-1 gap-8"
      >
        <ConsumerFormEditIdentification form={form} />
        <ConsumerFormEditAddress form={form} />
        <h2 >Acesso ao site</h2>
            <div className="grid lg:grid-cols-2 gap-4">
              <Controller
                control={form.control}
                name="password"
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    label="Senha"
                    autoComplete="off"
                    placeholder="Senha forte"
                    type="password"
                   
                    helpText={fieldState.error?.message || ''}
                  />
                )}
              />
              <Controller
                control={form.control}
                name="passwordConfirmation"
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    autoComplete="off"
                    helpText={fieldState.error?.message}
                    label="Confirmação de senha"
                    type="password"
                    placeholder="Confirmar senha forte"
                  />
                )}
              />
            </div>
        <div className="flex lg:flex-row flex-col-reverse gap-8 mt-4">
          <Button
            onClick={() => {
              back()
            }}
            className='w-full'
          >
            Cancelar
          </Button>
          <Button
           type='submit'
            className='w-full'
          >
            Cadastrar
          </Button>
        </div>
      </form>

    </div>
  )
}
