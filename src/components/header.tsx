import { Link } from 'react-router-dom'
import { HeaderSearch } from '../constants/header-search'
import { Logo } from './logo'
import { Button } from './ui/button'

export function Header() {
  return (
    <div className="border-b border-[#151B26] max-w-screen-3xl">
      <header className=" mx-auto flex items-center h-20 justify-between max-w-[1216px] w-full  ">
        <Link to="/">
          <Logo />
        </Link>
        <ul className="flex items-center gap-14">
          <Link to="/">
            <li>Inicio</li>
          </Link>
          {HeaderSearch.map(option => (
            <Link key={option.title} to={`${option.title}`}>
              <li
                className="text-lg capitalize cursor-pointer "
                key={option.title}
              >
                {option.title}
              </li>
            </Link>
          ))}
        </ul>
        <Link to="/signin">
          <Button size="primary" variant="primary" className="text-lg">
            Minha Conta
          </Button>
        </Link>
      </header>
    </div>
  )
}
