import clsx from "clsx"

export const EffectPolygon = ({x = 'right'}:{
  x: 'center' | 'left' | 'right'
})=>{
  return (
    <div
    className={
      clsx(["absolute transform-gpu overflow-hidden blur-3xl w-full ",
        {
          "inset-x-0 -top-40 -z-10 sm:-top-80 " : x === 'center',
          "inset-x-0 -top-20 -z-10 sm:-top-80 -left-[50px]" : x === 'left',
          "inset-x-0 -top-20 -z-10 sm:-top-80 -right-[150px]" : x === 'right'
        }
      ])
    }
    aria-hidden="true"
  >
    <div
      className={
        clsx([
          " rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30  ",{
            ' w-[36.125rem] sm:left-[calc(50%-30rem)] left-[calc(50%-11rem)] sm:w-[72.1875rem] -translate-x-1/2 aspect-[1155/678] ': x === 'center',
            ' w-[36.125rem] sm:left-[calc(1%-2rem)] left-[calc(10%-2rem)] sm:w-[100.1875rem] -translate-x-1/3 aspect-[1155/678] ': x === 'left',
            ' w-[50.125rem] sm:-right-[calc(100%-2rem)] -right-[calc(20%-2rem)] sm:-w-[55.1875rem] translate-x-1/4 aspect-[500/678] ': x === 'right',

          }
        ])
      }
      style={{
        clipPath:
          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
      }}
    ></div>
  </div>
  )
}