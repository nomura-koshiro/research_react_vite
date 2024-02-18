import { useEffect } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter, useLocation, useNavigate } from 'react-router-dom'
import { ErrorFallback } from '@/components/ErrorFallback'
import { worker } from './msw/browser'
import { API_MOCKING } from '@/config'
import { queryClient } from '@/lib/react-query'

// ********************************************************************************
// NOTE storybookでMSWを動作させる
// ********************************************************************************
if (API_MOCKING) {
  void worker.start({
    onUnhandledRequest: 'bypass',
  })
}

// ********************************************************************************
// NOTE react-router-domのテスト時に使用する、画面に現在のパスを表示するコンポーネント
// ********************************************************************************
export const LOCATION_DISPLAY = 'location-display'

export const LocationDisplay = (): JSX.Element => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    // このコンポーネントの表示終了後にルートへ移動
    navigate('/')
  }, []) // 空の配列を渡しているため、このeffectはコンポーネントがマウントされたときにのみ実行されます。

  return (
    <>
      <div data-testid={LOCATION_DISPLAY}>{location.pathname}</div>
    </>
  )
}

// ********************************************************************************
// NOTE react-router-domまたはTanstackQueryを利用しているコンポーネントのテストに使用
// ********************************************************************************
type TestAppProviderProps = {
  // 画面に現在のパスを表示するか
  isDisplayLocation?: boolean
  // テスト対象のコンポーネント
  children: JSX.Element
}

export const TestAppProvider = ({
  isDisplayLocation = false,
  children,
}: TestAppProviderProps): JSX.Element => {
  return (
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <QueryClientProvider client={queryClient}>
          {children}
          {isDisplayLocation && (
            <div style={{ margin: '20px', display: 'flex' }}>
              useLocation:
              <LocationDisplay />
            </div>
          )}
        </QueryClientProvider>
      </ErrorBoundary>
    </BrowserRouter>
  )
}
