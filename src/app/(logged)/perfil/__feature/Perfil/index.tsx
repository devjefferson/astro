"use client";
import { title } from "@/components/primitives";
import useMessage from "@/hooks/useMessage";
import { Button } from "@nextui-org/button";
import { useMutation } from "@tanstack/react-query";
import { signOut } from "next-auth/react";


export default function Perfil() {
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
       <div className="py-8 flex flex-col items-center w-full justify-center">
       <div className="flex gap-8 justify-between w-full">
        <p className={title({
          size: 'sm'
        })}>
            Seja bem vindo {userData.name} {userData.surname}!!
          </p>
          <Button className="rounded-sm"  onClick={() => mutate()}>
            Sair
          </Button>
       </div>
       <div className="h-96">

       </div>
       </div>
 

 
    </main>
  );
}
