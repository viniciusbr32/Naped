import { useQuery } from '@tanstack/react-query'
import { CardsPrincipal } from '../components/cards-principal'
import { LatestAnimeNews } from '../components/latest-anime-news'
import { getRecentsAnimes } from '../http/get-recents-animes'
import { NewReleases } from '../components/new-releases'

export function Home() {
  const { data } = useQuery({
    queryKey: ['recents-animes'],
    queryFn: getRecentsAnimes,
  })

  if (!data) {
    return null
  }

  const numberData = data.slice(0, 3)

  const newReleasesFiltred = data.filter(releases => releases.new === 'yes')

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
            <CardsPrincipal />
          </div>
        </div>
        <h3 className="text-3xl">Notícias mais recentes</h3>
        <div className="flex items-center gap-8 py-10">
          {numberData.map(recent => {
            return <LatestAnimeNews content={recent} key={recent.id} />
          })}
        </div>

        <h4 className="text-2xl">Lançamentos</h4>

        <div className="flex items-center gap-8 py-6">
          {newReleasesFiltred.map(release => {
            return <NewReleases key={release.id} content={release} />
          })}
        </div>
      </div>
    </div>
  )
}
