'use client'
import { type ClassValue, clsx } from 'clsx'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'


import { UserLoginSchema } from './schema'
import useMessage from '@/hooks/useMessage'
import { Input } from '@/components/Input'
import { Button } from '@nextui-org/button'
import { signIn } from 'next-auth/react'


export const LoginForm = () => {
  const { success, error } = useMessage()
  const router = useRouter()
  const form = useForm<any>({
    resolver: zodResolver(UserLoginSchema),
  })

  const handleSubmit: SubmitHandler<any> = async (data) => {


    if(!window.localStorage.getItem('DUSER')){
      error("Não existe usuário temporário em nossa base de dados")
      return
    }

    const response = await signIn('credentials', {
      ...data,
      redirect: false,
    })

    if (response?.ok) {
      success('Login realizado com sucesso!')
      router.push('/perfil')
    } else {
      error('Email ou senha errado!')
    }
    

  }

  return (
    <form
      className={clsx(['flex', 'flex-col', 'gap-8', 'max-w-96'])}
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      <div className="md:flex gap-8 flex-col">
        <div className="flex-1">
          <Controller
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <Input
              helpText={fieldState.error?.message}
              label='Login'
                {...field}
                placeholder="seu@email.com"
              />
            )}
          />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <Controller
            control={form.control}
            name="password"
            render={({ field, fieldState }) => (
              <Input
                label='Senha'
                {...field}
                helpText={fieldState.error?.message}
                type="password"
                placeholder="Senha forte"
              />
            )}
          />

        </div>
      </div>
      <div className="flex  justify-between gap-8">
      <Button
          disabled={form.formState.isSubmitting}
            className='rounded-md w-full'
          type="submit"
       
        >
          Entrar
        </Button>
        <Button
          className='rounded-md w-full'
          type="button"
            onClick={()=> router.push('/cadastro')}
          
        >
          Me cadastrar
        </Button>
  
      </div>
    </form>
  )
}
