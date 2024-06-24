import { Logo } from "../icons"

export const Footer = ()=>{

  return (<footer className="">
        <hr className="my-6 border-gray-900/10  sm:mx-auto lg:my-8" />

  <div className="mx-auto w-full  p-4 py-6 lg:py-10">
      <div className="md:flex md:justify-between container">
        <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
                <Logo />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ASTRO</span>
            </a>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-20 sm:grid-cols-3">
            <div>
                <h2 className="mb-6 text-sm font-semibold uppercase ">Links</h2>
                <ul className=" font-medium">
                    <li className="mb-4">
                        <a href="/" className="hover:underline">Início</a>
                    </li>
                    <li>
                        <a href="/sobrenos" className="hover:underline">Sobre Nós</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold uppercase ">Social Links</h2>
                <ul className=" font-medium">
                    <li className="mb-4">
                        <a href="https://github.com/devjefferson/astro" className="hover:underline ">Github</a>
                    </li>
                    <li>
                        <a href="https://github.com/devjefferson/astro" className="hover:underline">Instagram</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold  uppercase ">Interativo</h2>
                <ul className=" font-medium">
                    <li className="mb-4">
                        <a href="/#quiz" className="hover:underline">Quiz</a>
                    </li>
                    <li>
                        <a href="/#eventos" className="hover:underline">Eventos</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <hr className="my-6 border-gray-900/10 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between container">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://github.com/devjefferson/astro" className="hover:underline">Unisuam</a>. All Rights Reserved.
        </span>
     
    </div>
  </div>
</footer>
)
}