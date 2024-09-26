import { Link } from 'react-router-dom'
import { Input } from '../components/ui/input'
import { User, Lock } from '../components/iconsForm'
import { Button } from '../components/ui/button'

export function SignIn() {
  return (
    <div
      className="flex flex-col items-center justify-center w-full"
      style={{ height: 'calc(100vh - 90px)' }}
    >
      <span className="text-transparent uppercase bg-clip-text bg-text-gradient">
        naped
      </span>

      <h1 className="mt-8 text-5xl text-center">Entrar na conta</h1>

      <form className="mt-20 space-y-6">
        <div>
          <Input text="Digite seu usuario" type="text">
            <User />
          </Input>
        </div>

        <div>
          <Input text="Digite sua senha" type="password">
            <Lock />
          </Input>
        </div>

        <div>
          <Button className="text-lg" size="lg">
            Entrar na conta
          </Button>
        </div>

        <Link to="/signup">
          <p className="mt-10 text-center text-transparent bg-clip-text bg-text-gradient">
            Criar uma conta
          </p>
        </Link>
      </form>
    </div>
  )
}
