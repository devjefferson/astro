"use client";
import { button } from "@/components/core/button";
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { useMutation, useQuery } from "@tanstack/react-query";
import { signOut } from "next-auth/react";
import Image from "next/image";

export default function Perfil({ data }: any) {
  const { mutate } = useMutation({
    mutationKey: ["exit"],
    mutationFn: async () => {
      await signOut();
    },
  });

  return (
    <main className="flex container">
       <div className="min-h-96 py-36 flex flex-col items-center w-full justify-center">
       <div className="flex flex-col gap-8">
        <p className={title({
          size: 'sm'
        })}>
            {data.fullName}
          </p>
          <Button className="rounded-sm"  onClick={() => mutate()}>
            Sair
          </Button>
       </div>
       </div>
 

 
    </main>
  );
}
