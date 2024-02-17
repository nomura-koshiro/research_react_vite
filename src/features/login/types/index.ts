/**
 * ユーザー リクエスト
 */
export type LoginRequest = {
  email: string
  password: string
}

/**
 * ユーザー レスポンス
 */
export type LoginResponse = {
  userId: number
  userName: string
  agencyName: string | null
  mailAddress: string
  employeeFlag: number
  organizationName: string
  userRole: string
}
