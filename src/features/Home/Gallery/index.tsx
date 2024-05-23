export const Gallery = ()=>{

  return (
    <div className="px-5 scroll-m-20 scroll-smooth" id='galeria'>
    <div className="flex justify-center items-center flex-col text-center">
    <h1 className="text-4xl font-bold tracking-tight  sm:text-6xl">
    Descubra os Mistérios<br/> do Universo em <br/>Nossa Galeria
      </h1>
      <p className="mt-6 text-lg leading-8 ">Embarque em uma jornada fascinante pelo cosmos com nossa galeria, <br/>repleta de imagens deslumbrantes e informações incríveis sobre o espaço.</p>
    </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-[64px] mb-12">
      
      <div className="grid gap-4">
          <div>
              <img className="h-full object-cover max-w-full rounded-lg" src="/gallery/1.jpg" alt=""/>
          </div>
          <div>
              <img className="h-full object-cover max-w-full rounded-lg" src="/gallery/2.jpg" alt=""/>
          </div>
          <div>
              <img className="h-full object-cover max-w-full rounded-lg" src="/gallery/3.jpg" alt=""/>
          </div>
      </div>
      <div className="grid gap-4">
          <div>
              <img className="h-full object-cover max-w-full rounded-lg" src="/gallery/4.jpg" alt=""/>
          </div>
          <div>
              <img className="h-full object-cover max-w-full rounded-lg" src="/gallery/5.jpg" alt=""/>
          </div>
          <div>
              <img className="h-full object-cover max-w-full rounded-lg" src="/gallery/6.jpg" alt=""/>
          </div>
          <div>
              <img className="h-full object-cover max-w-full rounded-lg" src="/gallery/7.webp" alt=""/>
          </div>
      </div>
      <div className="grid gap-4">
          <div>
              <img className="h-full object-cover max-w-full rounded-lg" src="/gallery/8.webp" alt=""/>
          </div>
          <div>
              <img className="h-full object-cover max-w-full rounded-lg" src="/gallery/9.jpg" alt=""/>
          </div>
          <div>
              <img className="h-full object-cover max-w-full rounded-lg" src="/gallery/10.jpg" alt=""/>
          </div>
      </div>
      <div className="grid gap-4">
          <div>
            <img className="h-full object-cover max-w-full rounded-lg" src="/gallery/11.webp" alt=""/>       
           </div>
          <div>
            <img className="h-full object-cover max-w-full rounded-lg" src="/gallery/12.png" alt=""/>        
          </div>
          <div>
            <img className="h-full object-cover max-w-full rounded-lg" src="/gallery/13.webp" alt=""/>        
          </div>
      </div>
  </div>
    </div>

  )
}