import { type UseFormRegisterReturn } from 'react-hook-form'

type LoginTextboxProps = {
  id: string
  type?: 'email' | 'password'
  label: string
  registration: Partial<UseFormRegisterReturn>
}

export const LoginTextbox = ({
  id,
  type = 'email',
  label,
  registration,
}: LoginTextboxProps): JSX.Element => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input {...registration} id={id} type={type} />
    </div>
  )
}
