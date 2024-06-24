"use client";
import { title } from "@/components/primitives";
import useMessage from "@/hooks/useMessage";
import { Button } from "@nextui-org/button";
import { useMutation } from "@tanstack/react-query";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function Perfil() {
  const router = useRouter()
  const {error} = useMessage()
  const { mutate } = useMutation({
    mutationKey: ["exit"],
    mutationFn: async () => {
      await signOut();
    },
  });

  if(!window.localStorage.getItem('DUSER')){
    error('Não existe usuário!')
    mutate()
    return <div></div>
  }

  const userData = JSON.parse(window.localStorage.getItem('DUSER') as string)

  return (
    <main className="flex container">
       <div className="py-8 flex flex-col w-full justify-center">
       <div className="flex gap-8 justify-between w-full">
        <div className="flex flex-col">
        <p className={title({
          size: 'sm'
        })}>
            Seja bem vindo
          </p>
          <p className={title({
          size: 'md',
          className: 'capitalize mt-4 mb-4'
        })}>
            {userData.name} {userData.surname}!
          </p>
        </div>
          <Button className="rounded-sm"  onClick={()=> router.push('/perfil/editar')}>
          Editar Perfil
          </Button>
       </div>
     
       <div className="h-96 flex flex-1 lg:flex-row flex-col gap-4 mt-6 mb-10">
        <div className='p-4 border-1 w-full flex flex-col gap-2'>
         <h1>Pontos Ganhos</h1>
         <h1 className={title()}>{localStorage.getItem('POINT') || "0"}</h1>
        </div>
        <div className='p-4 border-1 w-full flex flex-col gap-2'>
        <h1>Pontos Perdidos</h1>
        <h1 className={title()}>{localStorage.getItem('ERROR') || "0"}</h1>
        </div>
        <a href="/#quiz" className='p-4 border-1 w-full flex justify-center items-center'>
          <div>
            Tentar novamente
          </div>
        </a>
       </div>
     
       </div>
 

 
    </main>
  );
}
