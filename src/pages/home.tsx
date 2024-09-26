import { CardsPrincipal } from '../components/cards-principal'

export function Home() {
  return (
    <div className="mx-auto max-w-screen-3xl">
      <div className="max-w-[1216px] w-full mx-auto">
        <h1 className="text-center mt-36 text-[56px] leading-none">
          <span className="block">Mundo nerd?</span> Naped!
        </h1>

        <p className="mt-8 text-2xl text-center text-gray-400 ">
          O Naped pode ser sua fonte de informações sobre o{' '}
          <span className="block">
            mundo nerd e outros assuntos relacionados.
          </span>
        </p>

        <div className="flex gap-8 my-20">
          <div className="flex flex-col gap-8">
            {/* {/* <CardsPrincipal heightClass="h-[305px]" /> */}
            <CardsPrincipal />
          </div>
        </div>
      </div>
    </div>
  )
}
