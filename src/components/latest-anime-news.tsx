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
  return (
    <div className="w-96 h-[522px] rounded-[4px] border border-[#151B26] flex flex-col">
      <div className="w-full h-56">
        <img
          src={content.imageUrl}
          alt="teste"
          className="object-cover h-full rounded-[4px]"
        />
      </div>

      <div className="flex flex-col flex-1 pl-6">
        <div className="flex-1 ">
          <span className="block mt-4 mb-6 text-lg text-transparent uppercase bg-clip-text bg-text-gradient">
            {content.category}
          </span>
          <h3 className="text-xl">{content.title}</h3>

          <p className="mt-2 mb-4 text-sm text-gray-400 text-start">
            {content.resume}
          </p>
        </div>

        <span className="block mt-auto mb-6 text-transparent uppercase tet-lg bg-clip-text bg-text-gradient">
          Ler mais
        </span>
      </div>
    </div>
  )
}
