import { expect } from '@storybook/jest'
import { type StoryObj, type Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { LoginErrorMessage } from './LoginErrorMessage'

const meta: Meta<typeof LoginErrorMessage> = {
  title: 'features/login/components/LoginErrorMessage',
  component: LoginErrorMessage,
  tags: ['autodocs'],
  argTypes: {
    email: {
      control: { type: 'radio' },
      options: [undefined, 'error'],
      defaultValue: undefined,
    },
    password: {
      control: { type: 'radio' },
      options: [undefined, 'error'],
      defaultValue: undefined,
    },
    isLoginError: {
      options: [true, false],
      control: { type: 'radio' },
      defaultValue: false,
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    email: undefined,
    password: undefined,
    isLoginError: false,
  },
}

export const EmailError: Story = {
  args: {
    email: 'error',
    password: undefined,
    isLoginError: false,
  },
  play: async ({ canvasElement, step }) => {
    await step('メールアドレスのエラーメッセージが表示されること', async () => {
      // ********************************************************************************
      // 準備
      // ********************************************************************************
      // コンポーネント描画
      const canvas = within(canvasElement)

      // ********************************************************************************
      // 実行/検証
      // ********************************************************************************
      await expect(
        canvas.getByText('Emailを入力してください。'),
      ).toBeInTheDocument()
    })
  },
}

export const PasswordError: Story = {
  args: {
    email: undefined,
    password: 'error',
    isLoginError: false,
  },
  play: async ({ canvasElement, step }) => {
    await step('パスワードのエラーメッセージが表示されること', async () => {
      // ********************************************************************************
      // 準備
      // ********************************************************************************
      // コンポーネント描画
      const canvas = within(canvasElement)

      // ********************************************************************************
      // 実行/検証
      // ********************************************************************************
      await expect(
        canvas.getByText('Passwordを入力してください。'),
      ).toBeInTheDocument()
    })
  },
}

export const EmailPasswordError: Story = {
  args: {
    email: 'error',
    password: 'error',
    isLoginError: false,
  },
  play: async ({ canvasElement, step }) => {
    await step(
      'メールアドレスとパスワードのエラーメッセージが表示されること',
      async () => {
        // ********************************************************************************
        // 準備
        // ********************************************************************************
        // コンポーネント描画
        const canvas = within(canvasElement)

        // ********************************************************************************
        // 実行/検証
        // ********************************************************************************
        await expect(
          canvas.getByText('Email、Passwordを入力してください。'),
        ).toBeInTheDocument()
      },
    )
  },
}

export const LoginError: Story = {
  args: {
    email: undefined,
    password: undefined,
    isLoginError: true,
  },
  play: async ({ canvasElement, step }) => {
    await step('ログインのエラーメッセージが表示されること', async () => {
      // ********************************************************************************
      // 準備
      // ********************************************************************************
      // コンポーネント描画
      const canvas = within(canvasElement)

      // ********************************************************************************
      // 実行/検証
      // ********************************************************************************
      await expect(
        canvas.getByText('ログインに失敗しました。'),
      ).toBeInTheDocument()
    })
  },
}
