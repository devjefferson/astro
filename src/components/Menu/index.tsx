'use client';

import React from 'react';


import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
} from '@nextui-org/react';
import { User as TUser } from 'next-auth';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Menu({ data }: { data: TUser }) {
    const router = useRouter()

  return (
    <Dropdown placement="bottom-start">
      <DropdownTrigger>
        <User
          as="button"
          avatarProps={{
            isBordered: true,
            // src: data && data.name ? data.image : '/image.png',
          }}
      
          className="transition-transform"
          description={data?.email}
          name={data && data?.name && data?.name}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="User Actions" variant="flat">
        {data && (
          <DropdownItem
            key="profile"
            className="h-14 gap-2"
            textValue="profile"
          >
            <p className="font-bold">logado como</p>
            <p className="font-bold">
              {data && data?.name && data?.name}
            </p>
          </DropdownItem>
        )}
        <DropdownItem
          as="a"
          onClick={() => {
          }}
          href={data ? '/perfil' : '/login'}
          key="perfil"
        >
          {data ? 'Meu Perfil' : 'Login'}
        </DropdownItem>
        <DropdownItem
          textValue="path"
          as="a"
          onClick={() => {
          }}
          href={data ? '/perfil/editar' : '/register'}
          key="path"
        >
          {data ? 'Editar perfil' : 'Cadastrar'}
        </DropdownItem>

        {data && (
          <DropdownItem
            textValue="logout"
            key="logout"
            color="danger"
            onClick={() => {
              signOut();
            
              router.push('/login')
            }}
          >
            Sair
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
