import { type UseMutationResult, useMutation } from '@tanstack/react-query'
import { type LoginRequest, type LoginResponse } from '../types'
import { apiClient } from '@/lib/api-client'

export type LoginParam = {
  request: LoginRequest
}

const login = async ({ request }: LoginParam): Promise<LoginResponse> => {
  return await apiClient.post(`/login`, request)
}

type UseLogin = {
  onMutationSuccess: () => void
}

export const useLogin = ({
  onMutationSuccess,
}: UseLogin): UseMutationResult<
  LoginResponse,
  unknown,
  LoginParam,
  unknown
> => {
  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      onMutationSuccess()
    },
  })
}
