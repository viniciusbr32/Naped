import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getCategory } from '../http/get-recents-animes'
import { LatestAnimeNews } from '../components/latest-anime-news'
import { Input } from '../components/ui/input'
import { useState } from 'react'

export function Category() {
  const { category } = useParams()
  const [filtredData, setFiltredData] = useState('')

  const categoryString = String(category)

  const queryClient = useQueryClient()

  const { data } = useQuery({
    queryKey: ['categories', categoryString],
    queryFn: () => getCategory(categoryString),
  })

  if (!data) {
    return null
  }

  const dataFiltred = data.filter(categorieFiltred =>
    categorieFiltred.title.toLowerCase().includes(filtredData.toLowerCase())
  )

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFiltredData(e.target.value)
  }

  return (
    <div className="max-w-screen-3xl">
      <div className="max-w-[1216px] w-full mx-auto py-10">
        <div className="relative w-full h-[300px]">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background:
                'linear-gradient(rgba(6, 9, 15, 0.4) 53.65%, rgb(6, 9, 15) 100%)',
            }}
          />
          <img
            className="object-cover w-full h-full rounded "
            src={`${category}.png`}
            alt={category}
          />
          <div className="absolute left-0 px-10 top-1/2 max-w-[445px]">
            <h2 className="text-4xl">{category}</h2>
            <p className="font-normal text-gray-400 ">
              O Naped pode ser sua fonte de informações sobre o mundo nerd e
              outros assuntos relacionados.
            </p>
          </div>
        </div>

        <div className="pt-10">
          <Input
            type="search"
            text="Quer ajuda na procura? Pesquise aqui"
            className="full"
            value={filtredData}
            onChange={handleOnChange}
          />
        </div>

        <div className="flex flex-wrap items-center gap-8 pt-20">
          {dataFiltred.length > 0 ? (
            dataFiltred.map(categoria => (
              <LatestAnimeNews key={categoria.id} content={categoria} />
            ))
          ) : (
            <p>Não existe nenhuma categoria encontrada</p>
          )}
        </div>
      </div>
    </div>
  )
}
