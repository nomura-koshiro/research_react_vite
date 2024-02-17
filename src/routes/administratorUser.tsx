import { Suspense } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Layout } from '@/components/Layout/Layout/Layout'
import { Spinner } from '@/components/Spinner'
import { lazyImport } from '@/utils/lazyImport'

const { LoginRoutes } = lazyImport(
  async () => await import('@/features/login'),
  'LoginRoutes',
)

const App = () => {
  return (
    <Layout>
      {/* NOTE パスを移動した際のSpinnerの表示 */}
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </Layout>
  )
}

export const administratorUserRoutes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/login/*', element: <LoginRoutes /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
]
