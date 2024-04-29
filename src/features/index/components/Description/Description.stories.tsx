import { type StoryObj, type Meta } from '@storybook/react'
import { Description } from './Description';

const meta: Meta<typeof Description> = {
  title: 'components/Description',
  component: Description,
  tags: ['autodocs'],
  argTypes: {}
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
