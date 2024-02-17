import { expect } from '@storybook/jest'
import { type StoryObj, type Meta } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import { LoginTextbox } from './LoginTextbox'

const meta: Meta<typeof LoginTextbox> = {
  title: 'features/login/components/LoginTextbox',
  component: LoginTextbox,
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: { type: 'text' },
      defaultValue: 'email',
    },
    type: {
      control: { type: 'radio' },
      options: ['email', 'password'],
      defaultValue: 'email',
    },
    label: {
      control: { type: 'text' },
      defaultValue: 'Email',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

// // react-hook-formに与えるForm内の型
// type Email = {
//   email: string
// }
// type Password = {
//   password: string
// }

export const Primary: Story = {
  args: {
    id: 'email',
    type: 'email',
    label: 'Email',
  },
}

export const InputEmail: Story = {
  args: {
    id: 'email',
    type: 'email',
    label: 'Email',
  },
  play: async ({ canvasElement, step }) => {
    await step('メールアドレスが入力できる', async () => {
      // ********************************************************************************
      // 準備
      // ********************************************************************************
      // コンポーネント描画
      const canvas = within(canvasElement)

      // ********************************************************************************
      // 実行
      // ********************************************************************************
      // テスト対象のテキストボックス取得
      const email = canvas.getByRole('textbox', {
        name: 'Email',
      })
      // テスト対象のテキストボックスに入力する値
      const value = 'nomura-koshiro@xxx.co.jp'
      // テスト対象のテキストボックスに値を入力
      await userEvent.type(email, value)

      // ********************************************************************************
      // 検証
      // ********************************************************************************
      // 入力された値が画面に存在するかアサーションで確認
      await expect(canvas.getByDisplayValue(value)).toBeInTheDocument()
    })
  },
}

export const InputPassword: Story = {
  args: {
    id: 'password',
    type: 'password',
    label: 'Password',
  },
  play: async ({ canvasElement, step }) => {
    await step('パスワードが入力できる', async () => {
      // ********************************************************************************
      // 準備
      // ********************************************************************************
      // コンポーネント描画
      const canvas = within(canvasElement)

      // ********************************************************************************
      // 実行
      // ********************************************************************************
      // テスト対象のテキストボックス取得
      const password = await canvas.findByLabelText('Password')
      // テスト対象のテキストボックスに入力する値
      const value = 'password123'
      // テスト対象のテキストボックスに値を入力
      await userEvent.type(password, value)

      // ********************************************************************************
      // 検証
      // ********************************************************************************
      // 入力された値が画面に存在するかアサーションで確認
      await expect(canvas.getByDisplayValue(value)).toBeInTheDocument()
    })
  },
}
