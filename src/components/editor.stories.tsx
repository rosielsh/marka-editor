import type { Meta, StoryObj } from '@storybook/react';
import { Content } from './editor-content';
import { Root } from './editor-root';
import { EditorRootProps } from './editor-root/editor-root';

const meta: Meta<typeof Root> = {
  title: 'MKEditor/Editor',
  component: Root,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Root>;

export const RootWithContent: Story = {
  render: (args: EditorRootProps) => (
    <Root {...args}>
      <Content />
    </Root>
  ),
};
