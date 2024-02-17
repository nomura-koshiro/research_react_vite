import { type StoryObj, type Meta } from '@storybook/react'
import { ErrorFallback } from './ErrorFallback'
import { TestAppProvider } from '@/test/testUtilityComponent'

const meta: Meta<typeof ErrorFallback> = {
  title: 'components/ErrorFallback',
  component: ErrorFallback,
  tags: ['autodocs'],
  decorators: [
    // NOTE react-router-domの要素を使用しているため、TestAppProviderでラップしている
    (Story) => (
      <TestAppProvider isDisplayLocation={false}>
        <Story />
      </TestAppProvider>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
