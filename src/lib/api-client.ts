import axios, { type AxiosInstance, isAxiosError } from 'axios'
import { API_URL, API_MOCKING } from '@/config'

// --------------------------------------------------------------------------------
// Axios基礎設定
// --------------------------------------------------------------------------------
export const apiClient: AxiosInstance = axios.create({
  baseURL: API_MOCKING ? '' : API_URL,
  headers: { 'Content-Type': 'application/json' },
  responseType: 'json',
})

// --------------------------------------------------------------------------------
// Axiosのリクエスト時のインターセプター
// リクエスト時に前処理を入れたい場合は処理を記述した関数などを渡す
// --------------------------------------------------------------------------------
apiClient.interceptors.request.use()

// --------------------------------------------------------------------------------
// Axiosのレスポンス時のインターセプター
// レスポンス時に前処理を入れたい場合は処理を記述した関数などを渡す
// --------------------------------------------------------------------------------
apiClient.interceptors.response.use(
  (response) => {
    // NOTE 全てのレスポンスが通る箇所のため、型を指定できないためESLintは抑制している
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.data
  },
  async (error) => {
    if (
      isAxiosError(error) &&
      error.response &&
      error.response.status === 400
    ) {
      // HTTPリクエストが失敗した場合の処理
    }

    return await Promise.reject(error)
  },
)
