"use client";
import Countdown from "./CountDown";

const stats = [
  {
    id: 1,
    name: "Melhor momento para ver Saturno",
    value: "Saturno",
    visible: "17 de setembro",
    date: "2024-09-17T22:00:00",
  },
  {
    id: 2,
    name: "A maior Lua cheia de 2024",
    value: "Lua cheia",
    visible: "17 de outubro",
    date: "2024-10-17T22:00:00",
  },
  {
    id: 3,
    name: "A Lua perto de Vênus",
    value: "Venus",
    visible: "4 de dezembro",
    date: "2024-12-04T00:00:00",
  },
];

export default function CountEvent() {
  return (
    <div
      className="container relative isolate overflow-x-hidden overflow-y-hidden"
      id="eventos"
    >
      <div
        className="absolute inset-x-100 -top-40 -z-10  overflow-hidden blur-2xl sm:-top-40"
        aria-hidden="true"
      >
        <div
          className="relative right-[calc(30%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-2/3 lg:translate-x-2/3 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:right-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <div className="text-center">
        <h1 className="text-xl font-bold tracking-tight  sm:text-2xl">
          Acompanhe os Próximos Eventos Astronômicos:
        </h1>
        <p>Os maiores eventos astronômicos do ano.</p>
      </div>
      <div className="py-20 sm:py-24 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <div>
                  <dt className="text-base leading-7 ">{stat.name}</dt>
                  <dt className="text-base leading-7 ">{stat.visible}</dt>
                </div>

                <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
                  {stat.value}
                </dd>
                <div className="">
                  <Countdown targetDate={stat.date} />
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
