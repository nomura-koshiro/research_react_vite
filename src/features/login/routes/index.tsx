export * from './Login'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from './Login'

export const LoginRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="" element={<Login />} />
      <Route path="new" element={<Login />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  )
}
