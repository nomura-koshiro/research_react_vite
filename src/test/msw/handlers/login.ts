import { sleep } from '@/test/testUtility'
import { http, HttpResponse } from 'msw'

export const login = [
  http.post('/login', async () => {
    // 1秒待機
    await sleep(1000)

    return HttpResponse.json(
      {
        status: 1,
        messages: [],
        result: {
          userId: 'USER123456789',
          userName: 'nomura koshiro',
          mailAddress: 'nomura-koshiro@xxx.co.jp',
        },
      },
      { status: 202 },
    )
  }),
]
