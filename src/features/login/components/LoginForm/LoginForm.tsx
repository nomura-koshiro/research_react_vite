import { Spinner } from '@/components/Spinner'
import { LoginButton } from '../LoginButton'
import { LoginErrorMessage } from '../LoginErrorMessage'
import { LoginTextbox } from '../LoginTextbox'
import { useLoginForm } from './useLoginForm'

export const LoginForm = (): JSX.Element => {
  // 処理内容など取得
  const { onSubmit, login, register, formState, handleSubmit } = useLoginForm()

  return (
    <>
      {Boolean(login.isPending) && <Spinner />}
      <div>
        <section>
          <form onSubmit={handleSubmit(onSubmit)}>
            <>
              <LoginTextbox
                id="email"
                type="email"
                label="Email"
                registration={register('email')}
              />
              <LoginTextbox
                id="password"
                type="password"
                label="Password"
                registration={register('password')}
              />
              <LoginButton />
              <LoginErrorMessage
                email={formState.errors.email?.message}
                password={formState.errors.password?.message}
                isLoginError={login.isError}
              />
            </>
          </form>
        </section>
      </div>
    </>
  )
}
