import type { Meta, StoryObj } from '@storybook/react';
import { EditorContent } from '../editor-content';
import EditorRoot, { IRootProps } from './editor-root';

const meta: Meta<typeof EditorRoot> = {
  title: 'MKEditor/EditorRoot',
  component: EditorRoot,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EditorRoot>;

export const Default: Story = {
  render: (args: IRootProps) => (
    <EditorRoot {...args}>
      <div>Default Child Component</div>
    </EditorRoot>
  ),
};

export const CustomContent: Story = {
  render: (args: IRootProps) => (
    <EditorRoot {...args}>
      <h2>Custom Heading</h2>
      <p>This is some custom content inside EditorRoot.</p>
    </EditorRoot>
  ),
};

export const WithTextArea: Story = {
  render: (args: IRootProps) => (
    <EditorRoot {...args}>
      <EditorContent />
    </EditorRoot>
  ),
};
