import { Link } from 'react-router-dom'
import { CategoryBtn } from './ui/category'

export function CardsPrincipal() {
  return (
    <div className="flex items-center gap-8">
      <div className="relative flex items-end pb-8 justify-start h-[642px] w-[592px] bg-cover bg-center bg-[url('/1.jpg')]">
        <Link to={'/posts/1'}>
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative z-10 p-4 space-y-6 text-white text-start">
            <span className="px-4 py-2 text-lg rounded-[4px] bg-text-gradient uppercase">
              <CategoryBtn category="Series" />
            </span>
            <h2 className="mb-2 text-5xl leading-snug">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
            <p className="mb-4 max-w-[540px] text-2xl text-gray-400 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              urna pharetra ut ac, pellentesque.{' '}
            </p>
          </div>
        </Link>
      </div>

      <div className="flex flex-col gap-8">
        <div className="relative flex items-end pb-8 justify-start h-[305px] w-[592px] bg-cover bg-center bg-[url('/chihiro.jpg')]">
          <Link to={'/posts/3'}>
            <div className="absolute inset-0 bg-black bg-opacity-50" />

            <div className="relative z-10 p-4 space-y-4 text-white text-start w-[502px]">
              <CategoryBtn category="Jogos" />
              <h2 className="mb-2 text-3xl leading-snug">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h2>
            </div>
          </Link>
        </div>

        <div className="relative flex items-end pb-8 justify-start h-[305px] w-[592px] bg-cover bg-center bg-[url('/4.webp')]">
          <Link to={'/posts/4'}>
            <div className="absolute inset-0 bg-black bg-opacity-50" />

            <div className="relative z-10 p-4 space-y-4 text-white text-start w-[502px]">
              <span className="px-4 py-2 text-lg rounded-[4px] bg-text-gradient uppercase">
                <CategoryBtn category="Animes" />
              </span>
              <h2 className="mb-2 text-3xl leading-snug">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
