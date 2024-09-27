import { useNavigate } from 'react-router-dom'
import { CategoryBtn } from './ui/category'

interface NewReleaseProps {
  content: {
    title: string
    category: string
    resume: string
    id: number
  }
}

export function NewReleases({ content }: NewReleaseProps) {
  const navigate = useNavigate()

  function handleClickPageDetails(id: number) {
    navigate(`/posts/${id}`)
  }

  return (
    <div className="flex flex-col w-[592px]   h-[300px]">
      <div className="flex flex-col justify-between h-full space-y-6">
        <div>
          <CategoryBtn category={content.category} />
        </div>
        <div className="flex-1">
          <h5 className="pb-2 text-2xl">{content.title}</h5>
          <p className="text-lg text-gray-400">{content.resume}</p>
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
