import { Link } from 'react-router-dom'
import { Input } from '../components/ui/input'
import { AtSign, User, Lock } from '../components/iconsForm'
import { Button } from '../components/ui/button'

export function SignUp() {
  return (
    <div
      className="flex flex-col items-center justify-center w-full"
      style={{ height: 'calc(100vh - 90px)' }}
    >
      <span className="text-transparent uppercase bg-clip-text bg-text-gradient">
        naped
      </span>

      <h1 className="mt-8 text-5xl text-center">Faça uma conta</h1>

      <form className="mt-20 space-y-6">
        <div>
          <Input text="Digite seu usuario" type="text" className="96">
            <User />
          </Input>
        </div>

        <div>
          <Input text="Digite seu e-mail" type="email" className="96">
            <AtSign />
          </Input>
        </div>

        <div>
          <Input text="Digite sua senha" type="password" className="96">
            <Lock />
          </Input>
        </div>

        <div>
          <Input
            text="Digite novamente sua senha"
            type="password"
            className="96"
          >
            <Lock />
          </Input>
        </div>

        <div>
          <Button className="text-lg" size="lg">
            Criar uma conta
          </Button>
        </div>

        <Link to="/signin">
          <p className="mt-10 text-center text-transparent bg-clip-text bg-text-gradient">
            Já tenho uma conta
          </p>
        </Link>
      </form>
    </div>
  )
}
