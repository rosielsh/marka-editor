import type { Meta, StoryObj } from '@storybook/react';
import EditorRoot, { EditorRootProps } from './editor-root';

const meta: Meta<typeof EditorRoot> = {
  title: 'MKEditor/EditorRoot',
  component: EditorRoot,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EditorRoot>;

export const Default: Story = {
  render: (args: EditorRootProps) => (
    <EditorRoot {...args}>
      <div>Default Child Component</div>
    </EditorRoot>
  ),
};

export const CustomContent: Story = {
  render: (args: EditorRootProps) => (
    <EditorRoot {...args}>
      <h2>Custom Heading</h2>
      <p>This is some custom content inside EditorRoot.</p>
    </EditorRoot>
  ),
};
