import { expect } from '@storybook/jest'
import { type StoryObj, type Meta } from '@storybook/react'
import { waitFor, within, userEvent } from '@storybook/testing-library'
import { LoginForm } from './LoginForm'
import { TestAppProvider } from '@/test/testUtilityComponent'

const meta: Meta<typeof LoginForm> = {
  title: 'features/login/components/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TestAppProvider isDisplayLocation={true}>
        <Story />
      </TestAppProvider>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const InputEmailPassword: Story = {
  play: async ({ canvasElement, step }) => {
    await step('メールアドレス、パスワードが入力できる', async () => {
      // ********************************************************************************
      // 準備
      // ********************************************************************************
      // コンポーネント描画
      const canvas = within(canvasElement)
      // テスト対象のテキストボックスに入力する値
      const emailValue = 'nomura-koshiro@xxx.co.jp'
      const passwordValue = 'password'

      // ********************************************************************************
      // 実行
      // ********************************************************************************
      await userEvent.type(canvas.getByLabelText('Email'), emailValue)
      await userEvent.type(canvas.getByLabelText('Password'), passwordValue)

      // ********************************************************************************
      // 検証
      // ********************************************************************************
      await expect(canvas.getByDisplayValue(emailValue)).toBeInTheDocument()
      await expect(canvas.getByDisplayValue(passwordValue)).toBeInTheDocument()
    })
  },
}

export const ErrorEmail: Story = {
  play: async ({ canvasElement, step }) => {
    await step('メールアドレス未入力エラー', async () => {
      // ********************************************************************************
      // 準備
      // ********************************************************************************
      // コンポーネント描画
      const canvas = within(canvasElement)
      // テスト対象のテキストボックスに入力する値
      const passwordValue = 'password'

      // ********************************************************************************
      // 実行
      // ********************************************************************************
      await userEvent.type(canvas.getByLabelText('Password'), passwordValue)
      await userEvent.click(canvas.getByRole('button', { name: 'ログイン' }))

      // ********************************************************************************
      // 検証
      // ********************************************************************************
      await expect(
        canvas.getByText('Emailを入力してください。'),
      ).toBeInTheDocument()
    })
  },
}

export const ErrorPassword: Story = {
  play: async ({ canvasElement, step }) => {
    await step('パスワード未入力エラー', async () => {
      // ********************************************************************************
      // 準備
      // ********************************************************************************
      // コンポーネント描画
      const canvas = within(canvasElement)
      // テスト対象のテキストボックスに入力する値
      const emailValue = 'nomura-koshiro@xxx.co.jp'

      // ********************************************************************************
      // 実行
      // ********************************************************************************
      await userEvent.type(canvas.getByLabelText('Email'), emailValue)
      await userEvent.click(canvas.getByRole('button', { name: 'ログイン' }))

      // ********************************************************************************
      // 検証
      // ********************************************************************************
      await expect(
        canvas.getByText('Passwordを入力してください。'),
      ).toBeInTheDocument()
    })
  },
}

export const ErrorEmailPassword: Story = {
  play: async ({ canvasElement, step }) => {
    await step('メールアドレス、パスワード未入力エラー', async () => {
      // ********************************************************************************
      // 準備
      // ********************************************************************************
      // コンポーネント描画
      const canvas = within(canvasElement)

      // ********************************************************************************
      // 実行
      // ********************************************************************************
      await userEvent.click(canvas.getByRole('button', { name: 'ログイン' }))

      // ********************************************************************************
      // 検証
      // ********************************************************************************
      await waitFor(() => {
        void expect(
          canvas.getByText('Email、Passwordを入力してください。'),
        ).toBeInTheDocument()
      })
    })
  },
}

export const LoginSuccess: Story = {
  play: async ({ canvasElement, step }) => {
    await step('ログイン成功', async () => {
      // ********************************************************************************
      // 準備
      // ********************************************************************************
      // コンポーネント描画
      const canvas = within(canvasElement)
      // テスト対象のテキストボックスに入力する値
      const emailValue = 'nomura-koshiro@xxx.co.jp'
      const passwordValue = 'password'

      // ********************************************************************************
      // 実行
      // ********************************************************************************
      await userEvent.type(canvas.getByLabelText('Email'), emailValue)
      await userEvent.type(canvas.getByLabelText('Password'), passwordValue)
      await userEvent.click(canvas.getByRole('button', { name: 'ログイン' }))

      // ********************************************************************************
      // 検証
      // ********************************************************************************
      await waitFor(() => {
        void expect(canvas.getByText('/showcase')).toBeInTheDocument()
      })
    })
  },
}

export const LoginFailure: Story = {
  play: async ({ canvasElement, step }) => {
    await step('ログイン失敗', async () => {
      // ********************************************************************************
      // 準備
      // ********************************************************************************
      // コンポーネント描画
      const canvas = within(canvasElement)
      // テスト対象のテキストボックスに入力する値
      const emailValue = 'nomura-koshiro@xxx.co.jp'
      const passwordValue = 'password1234'

      // ********************************************************************************
      // 実行
      // ********************************************************************************
      await userEvent.type(canvas.getByLabelText('Email'), emailValue)
      await userEvent.type(canvas.getByLabelText('Password'), passwordValue)
      await userEvent.click(canvas.getByRole('button', { name: 'ログイン' }))

      // ********************************************************************************
      // 検証
      // ********************************************************************************
      await waitFor(() => {
        void expect(
          canvas.getByText('ログインに失敗しました。'),
        ).toBeInTheDocument()
      })
    })
  },
}
