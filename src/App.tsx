import { AppProvider } from '@/providers/app'
import { AppRoutes } from '@/routes'
import './App.css'

export const App = (): JSX.Element => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}

export default App
