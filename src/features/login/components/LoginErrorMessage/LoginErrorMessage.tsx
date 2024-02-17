import { css } from '@emotion/react'

type LoginErrorMessageProps = {
  email: undefined | string
  password: undefined | string
  isLoginError: boolean
}

export const LoginErrorMessage = ({
  email,
  password,
  isLoginError,
}: LoginErrorMessageProps): JSX.Element => {
  // ********************************************************************************
  // 関数
  // ********************************************************************************
  // エラーが存在するか判定
  const isError = (
    email: undefined | string,
    password: undefined | string,
    isLoginError: boolean,
  ) => {
    if (email != null && password != null) {
      return true
    } else if (email != null) {
      return true
    } else if (password != null) {
      return true
    } else if (isLoginError) {
      return true
    }

    return false
  }

  // エラーメッセージ作成
  const generateErrorText = (
    email: undefined | string,
    password: undefined | string,
    isLoginError: boolean,
  ) => {
    if (email != null && password != null) {
      return 'Email、Passwordを入力してください。'
    } else if (email != null) {
      return 'Emailを入力してください。'
    } else if (password != null) {
      return 'Passwordを入力してください。'
    } else if (isLoginError) {
      return 'ログインに失敗しました。'
    }
  }

  return (
    <>
      {isError(email, password, isLoginError) && (
        <div>
          <div>
            <div>{generateErrorText(email, password, isLoginError)}</div>
          </div>
        </div>
      )}
    </>
  )
}
