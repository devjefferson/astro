import { GithubIcon, LinkedinIcon } from "@/components/icons"

const people = [
  {
    name: 'Jefferson Fonseca',
    role: 'Dev. Front-End',
    imageUrl:
      'https://avatars.githubusercontent.com/devjefferson',
      github: 'https://github.com/devjefferson',
      linkedin: 'https://www.linkedin.com/in/devjefferson/'
  },
  {
    name: 'Kaylane Bastos',
    role: 'Dev. Front-End',
    imageUrl:
      'https://avatars.githubusercontent.com/kaylanebaastos',
      github: 'https://github.com/kaylanebaastos',
      linkedin: 'https://www.linkedin.com/in/kaylanebaastos/'
  },
  {
    name: 'Victor Hugo',
    role: 'Dev. Front-End',
    imageUrl:
      'https://avatars.githubusercontent.com/vitoinacio',
      github: 'https://github.com/vitoinacio',
      linkedin: 'https://www.linkedin.com/in/victor-hugo-in%C3%A1cio-de-oliveira-93497a242'
  },
  {
    name: 'Ana Beatriz Monteiro',
    role: 'Dev. Front-End',
    imageUrl:
      'https://avatars.githubusercontent.com/beatizmonteiro',
      github: 'https://github.com/',
      linkedin: ''
  },
  {
    name: 'Maria Eduarda',
    role: 'Dev. Front-End',
    imageUrl:
      'https://avatars.githubusercontent.com/Mariaduda92',
      github: 'https://github.com/Mariaduda92',
      linkedin: 'https://www.linkedin.com/in/maria-eduarda-araujo-de-carvalho-601272217/'
  },
  {
    name: 'Tatiane Viana',
    role: 'Dev. Front-End',
    imageUrl:
      'https://avatars.githubusercontent.com/tayviana',
      github: 'https://github.com/tayviana',
      linkedin: ''
  },
]

export default function Team() {
  return (
    <div className=" py-24 sm:py-32 relative">
<div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
    <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">O time responsável pelo desenvolvimento do projeto</h2>
        <p className="mt-6 text-lg leading-8 ">
        Este projeto visa criar uma plataforma online inovadora que ofereça conteúdo educativo, notícias atualizadas, e ferramentas interativas para entusiastas e pesquisadores da área. A equipe está comprometida em garantir a qualidade do conteúdo e a usabilidade do site, utilizando as melhores práticas em design e desenvolvimento web.
        </p>
      </div>
      <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
        {people.map((person) => (
       
            <li key={person.name}>
            <div className="flex items-center gap-x-6">
              <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt={person.name} />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight ">{person.name}</h3>
                <p className="text-sm font-semibold leading-6 ">{person.role}</p>
                <div className="flex gap-2 items-center">
                <a href={person.github}><GithubIcon /></a>
                {person.linkedin && <a href={person.linkedin}> <LinkedinIcon  size={20} /></a>}
              </div>
              </div>
           
            </div>
            
          </li>
          
        ))}
      </ul>
    </div>
  </div>
  )
}