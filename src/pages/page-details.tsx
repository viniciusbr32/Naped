import { useQuery } from '@tanstack/react-query'
import {
  getRecentsAnimes,
  getRecentsDetailsAnimes,
} from '../http/get-recents-animes'
import { useParams } from 'react-router-dom'
import { LatestAnimeNews } from '../components/latest-anime-news'

export function PageDetails() {
  const { id } = useParams()

  const idNumero = Number(id)

  const { data } = useQuery({
    queryKey: ['recents-animes-details', idNumero],
    queryFn: () => getRecentsDetailsAnimes(idNumero),
  })

  const { data: datas } = useQuery({
    queryKey: ['recents-animes'],
    queryFn: getRecentsAnimes,
  })

  if (!data || !datas) {
    return null
  }

  const numberData = datas.slice(0, 3)

  return (
    <div className="max-w-screen-3xl">
      {data.map(details => (
        <div
          className="w-full max-w-[1216px] text-center mx-auto"
          key={details.id}
        >
          <div className="text-center">
            <span className="block mt-20 text-transparent uppercase bg-clip-text bg-text-gradient">
              {details.category}
            </span>

            <h2 className="py-3 text-3xl">{details.title}</h2>

            <p className="pb-5 text-lg text-gray-400">{details.resume}</p>
            <span className="text-lg text-gray-400">{details.date}</span>
          </div>
          <div className="py-5 rounded h-80">
            <img
              src={`${details.imageUrl}`}
              alt={`${details.title}`}
              className="object-cover w-full h-full rounded"
            />
          </div>

          <div className="pb-20">
            <p className="text-gray-400">{details.content}</p>
          </div>

          <h3 className="text-3xl text-start">Notícias mais recentes</h3>

          <div className="flex items-center gap-8 py-10">
            {numberData.map(recent => {
              return <LatestAnimeNews content={recent} key={recent.id} />
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
