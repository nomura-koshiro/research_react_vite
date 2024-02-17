import { expect } from '@storybook/jest'
import { type StoryObj, type Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { LoginButton } from './LoginButton'

const meta: Meta<typeof LoginButton> = {
  title: 'features/login/components/LoginButton',
  component: LoginButton,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const LoginButtonClick: Story = {
  play: async ({ canvasElement, step }) => {
    await step('ログインボタンが押下できる', async () => {
      // ********************************************************************************
      // 準備
      // ********************************************************************************
      // コンポーネント描画
      const canvas = within(canvasElement)

      // ********************************************************************************
      // 実行/検証
      // ********************************************************************************
      await expect(canvas.getByRole('button')).toBeInTheDocument()
    })
  },
}
