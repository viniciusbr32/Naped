import { useQuery, useQueryClient } from '@tanstack/react-query'
import { CardsPrincipal } from '../components/cards-principal'
import { LatestAnimeNews } from '../components/latest-anime-news'
import { getRecentsAnimes } from '../http/get-recents-animes'

export function Home() {
  const queryClient = useQueryClient()

  const { data } = useQuery({
    queryKey: ['recents-animes'],
    queryFn: getRecentsAnimes,
  })

  if (!data) {
    return null
  }
  console.log(data)

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
        <div className="flex items-center gap-8 py-10">
          {data.map(recent => {
            return <LatestAnimeNews content={recent} key={recent.id} />
          })}
        </div>
      </div>
    </div>
  )
}
