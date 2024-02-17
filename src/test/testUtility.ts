/**
 * スリープ
 * @param ms - 待機する時間をミリ秒で指定
 * @returns - Promise<void>
 */
export const sleep = async (ms: number): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, ms))
}
