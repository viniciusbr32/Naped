import { Input } from './input'
import { AtSign, User, Lock } from './iconsForm'
import { Button } from './ui/button'

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
          <Input text="Digite seu usuario" type="password">
            <User />
          </Input>
        </div>

        <div>
          <Input text="Digite seu e-mail" type="email">
            <AtSign />
          </Input>
        </div>

        <div>
          <Input text="Digite sua senha" type="password">
            <Lock />
          </Input>
        </div>

        <div>
          <Input text="Digite novamente sua senha" type="password">
            <Lock />
          </Input>
        </div>

        <div>
          <Button className="text-lg" size="lg">
            Criar uma conta
          </Button>
        </div>

        <p className="text-center text-transparent bg-clip-text bg-text-gradient">
          Já tenho uma conta
        </p>
      </form>
    </div>
  )
}
