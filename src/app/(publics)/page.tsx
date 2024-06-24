
import CountEvent from "@/components/CountEvent";
import { Cta } from "@/components/Cta";
import { Hero } from "@/components/Hero";
import Quiz from "@/components/Quiz";
import { Gallery } from "@/features/Home/Gallery";
import getCurrentUser from "@/services/auth/customer/getCurrentUser";

export default async function Home() {
  const user = await getCurrentUser()
  return (
    <section className="scroll-smooth focus:scroll-auto">
      <Hero
        title="Explorando o Cosmos: Descubra os Segredos do Universo"
        description="Bem-vindo ao seu portal de astronomia, onde a curiosidade encontra
                  o conhecimento. Aqui, desvendamos os mistérios do universo, desde
                  as galáxias mais distantes até os detalhes fascinantes do nosso
                  próprio Sistema Solar."
        sobText="Junte-se a nós nesta jornada estelar"
        aboutLink={user ? "/perfil" : '/login'}
        aboutText={user ?  'Meu perfil' : "Entrar"}
        actionLink={user ?  '/#quiz' : "/cadastro"}
        actionText={user ?  'Ir para o Quiz' : "Cadastre-se"}
      />
      <Cta />
      <Gallery />
      <div
        className="flex flex-col gap-4 container scroll-m-20 scroll-smooth "
        id="quiz"
      >
        <h1 className="text-4xl font-bold tracking-tight  sm:text-4xl">
          Participe do Nosso Quiz Astronômico!
        </h1>
        <p>
          Claro! Aqui está um texto convidando os usuários a participarem do
          quiz: Participe do Nosso Quiz Astronômico! Você se considera um
          entusiasta do universo? Teste seus conhecimentos sobre astronomia no
          nosso emocionante quiz! Explore o vasto cosmos enquanto responde
          perguntas desafiadoras sobre planetas, estrelas e muito mais.
        </p>
        <Quiz disabled={!user} />
      </div>
      <CountEvent />
    </section>
  );
}
