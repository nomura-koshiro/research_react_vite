import { useRoutes } from 'react-router-dom'

import { administratorUserRoutes } from './administratorUser'
import { generalUserRoutes } from './generalUser'
import { Login } from '@/features/login'

export const AppRoutes = (): JSX.Element => {
  const user = true

  const commonRoutes = [{ path: '/login', element: <Login /> }]

  const routes = user ? administratorUserRoutes : generalUserRoutes

  const element = useRoutes([...routes, ...commonRoutes])

  return <>{element}</>
}
