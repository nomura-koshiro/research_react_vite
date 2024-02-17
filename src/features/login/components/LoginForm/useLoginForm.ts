import { yupResolver } from '@hookform/resolvers/yup'
import { type UseMutationResult } from '@tanstack/react-query'
import {
  useForm,
  type SubmitHandler,
  type UseFormRegister,
  type FormState,
  type UseFormHandleSubmit,
} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { type LoginParam, useLogin } from '../../api/getLogin'
import { type LoginResponse, type LoginRequest } from '../../types'

type UseLoginForm = {
  onSubmit: SubmitHandler<LoginRequest>
  DACLoginButtonOnSubmit: () => void
  login: UseMutationResult<LoginResponse, unknown, LoginParam, unknown>
  register: UseFormRegister<LoginRequest>
  formState: FormState<LoginRequest>
  handleSubmit: UseFormHandleSubmit<LoginRequest>
}

export const useLoginForm = (): UseLoginForm => {
  // ********************************************************************************
  // hooks
  // ********************************************************************************
  // ログイン成功時の遷移先
  const navigate = useNavigate()

  // ********************************************************************************
  // イベント
  // ********************************************************************************
  // API呼び出し成功時のイベント
  const onMutationSuccess = () => {
    navigate('/showcase')
  }
  // ログインボタン
  const onSubmit: SubmitHandler<LoginRequest> = async (formInputValues) => {
    // login API呼び出し
    await login.mutateAsync({
      request: formInputValues,
    })
  }
  // DACアカウントでログインボタン
  const DACLoginButtonOnSubmit = () => {
    // TODO DACアカウントでログインは未作成
    onMutationSuccess()
  }

  // ********************************************************************************
  // TanstackQuery
  // ********************************************************************************
  // /loginAPI取得
  const login = useLogin({ onMutationSuccess })

  // ********************************************************************************
  // react-hook-form
  // ********************************************************************************
  // ログインフォームのバリデーション
  const schema: yup.ObjectSchema<LoginRequest> = yup.object({
    email: yup
      .string()
      .required('メールアドレスを入力してください')
      .email('有効なメールアドレスを入力してください'),
    password: yup.string().required('パスワードを入力してください'),
  })

  // react-hook-form
  const { register, formState, handleSubmit } = useForm<LoginRequest>({
    resolver: yupResolver(schema),
  })

  return {
    onSubmit,
    DACLoginButtonOnSubmit,
    login,
    register,
    formState,
    handleSubmit,
  }
}
