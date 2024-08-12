import type { Meta, StoryObj } from '@storybook/react';
import { EditorContent } from './editor-content';
import { EditorRoot } from './editor-root';
import { EditorRootProps } from './editor-root/editor-root';

const meta: Meta<typeof EditorRoot> = {
  title: 'MKEditor/Editor',
  component: EditorRoot,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EditorRoot>;

export const RootWithContent: Story = {
  render: (args: EditorRootProps) => (
    <EditorRoot {...args}>
      <EditorContent />
    </EditorRoot>
  ),
};
