import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter } from 'react-router-dom'
import { ErrorFallback } from '@/components/ErrorFallback'
import { API_MOCKING } from '@/config'
import { queryClient } from '@/lib/react-query'

// NOTE MSWを動作させる
if (API_MOCKING) {
  const { worker } = await import('../test/msw/browser')
  worker.start()
}

type AppProviderProps = {
  children: JSX.Element
}

export const AppProvider = ({ children }: AppProviderProps): JSX.Element => {
  return (
    <BrowserRouter>
      {/* NOTE エラーが発生した場合、ErrorBoundaryで表示をErrorFallbackコンポーネントに切り替え */}
      {/* NOTE 参考URL: https://zenn.dev/longbridge/articles/b7e76b31f993d9? */}
      {/* NOTE このコンポーネントを修正する場合は、TestAppProviderコンポーネントにも同じ修正を入れる！でないと通常のコンポーネントとテストの挙動が一致しなくなる */}
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <QueryClientProvider client={queryClient}>
          {process.env.NODE_ENV !== 'test' && <ReactQueryDevtools />}
          {children}
        </QueryClientProvider>
      </ErrorBoundary>
    </BrowserRouter>
  )
}
