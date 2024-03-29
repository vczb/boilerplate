import { Story, Meta } from '@storybook/react/types-6-0'
import Sidebar, { SidebarProps } from '.'

export default {
  title: 'Sidebar',
  component: Sidebar
} as Meta

export const Basic: Story<SidebarProps> = (args) => <Sidebar {...args} />
