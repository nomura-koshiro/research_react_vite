import { type StoryObj, type Meta } from '@storybook/react'
import { Layout } from './Layout'
import { TestAppProvider } from '@/test/testUtilityComponent'

const meta: Meta<typeof Layout> = {
  title: 'components/Layout/Layout',
  component: Layout,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'レイアウト内に表示させるJSX要素',
      control: { type: 'text' },
    },
  },
  decorators: [
    // NOTE react-router-domの要素を使用しているため、TestAppProviderでラップしている
    (Story) => (
      <TestAppProvider>
        <Story />
      </TestAppProvider>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { children: <div>コンテンツ</div> },
}
