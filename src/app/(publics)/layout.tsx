import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/Footer";
import getCurrentUser from "@/services/auth/customer/getCurrentUser";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Projeto de Astronomia",
  description: "Site de Astronomia da Universidade UNISUAM, polo Campo Grande, é composto por uma equipe interdisciplinar de estudantes",
  openGraph: {
    title: "Projeto de Astronomia",
    type: 'website',
    url: 'https://astro-q985ek8hm-jefferson-da-fonseca-martins-projects.vercel.app',
    description:
    "Site de Astronomia da Universidade UNISUAM, polo Campo Grande, é composto por uma equipe interdisciplinar de estudantes",
    images: '/20191008110627.jpg',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user] = await Promise.all([await getCurrentUser()]);

  return (
    <>
      <Navbar  data={user}/>
      {children}
      <Footer />
    </>
  );
}
