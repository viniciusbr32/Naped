import { useNavigate } from 'react-router-dom'
import { Category } from './ui/category'

interface LatestAnimesProps {
  content: {
    title: string
    category: string
    resume: string
    id: number
    imageUrl: string
  }
}

export function LatestAnimeNews({ content }: LatestAnimesProps) {
  const navigate = useNavigate()

  function handleClickPageDetails(id: number) {
    navigate(`/posts/${id}`)
  }

  return (
    <div className="w-96 h-[522px] rounded-[4px] border border-[#151B26] flex flex-col ">
      <div className="w-full h-56">
        <img
          src={content.imageUrl}
          alt="teste"
          className="object-cover h-full rounded-[4px]"
        />
      </div>

      <div className="flex flex-col flex-1 px-6 ">
        <div className="flex-1 ">
          <Category category={content.category} />
          <h3 className="text-xl">{content.title}</h3>

          <p className="mt-2 mb-4 text-sm text-justify text-gray-400 ">
            {content.resume}
          </p>
        </div>

        <button
          className="flex items-start mt-auto mb-6"
          type="button"
          onClick={() => handleClickPageDetails(content.id)}
        >
          <span className="text-lg text-transparent uppercase bg-clip-text bg-text-gradient">
            Ler mais
          </span>
        </button>
      </div>
    </div>
  )
}
