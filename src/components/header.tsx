import { HeaderSearch } from '../constants/header-search'
import { Logo } from './logo'
import { Button } from './ui/button'

export function Header() {
  return (
    <div className="border-b border-[#151B26] max-w-screen-3xl">
      <header className=" mx-auto flex items-center h-20 justify-evenly w-[1440px] ">
        <Logo />
        <ul className="flex items-center gap-14">
          {HeaderSearch.map(option => (
            <li
              className="text-lg capitalize cursor-pointer "
              key={option.title}
            >
              {option.title}
            </li>
          ))}
        </ul>

        <Button size="primary" variant="primary" className="text-lg">
          Minha Conta
        </Button>
      </header>
    </div>
  )
}
