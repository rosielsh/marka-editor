import type { Meta, StoryObj } from '@storybook/react';
import { MKEditorTextArea } from '../mkeditor-textarea';
import MKEditorRoot, { IRootProps } from './mkeditor-root';

const meta: Meta<typeof MKEditorRoot> = {
  title: 'MKEditor/MKEditorRoot',
  component: MKEditorRoot,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MKEditorRoot>;

export const Default: Story = {
  render: (args: IRootProps) => (
    <MKEditorRoot {...args}>
      <div>Default Child Component</div>
    </MKEditorRoot>
  ),
};

export const CustomContent: Story = {
  render: (args: IRootProps) => (
    <MKEditorRoot {...args}>
      <h2>Custom Heading</h2>
      <p>This is some custom content inside MKEditorRoot.</p>
    </MKEditorRoot>
  ),
};

export const WithTextArea: Story = {
  render: (args: IRootProps) => (
    <MKEditorRoot {...args}>
      <MKEditorTextArea />
    </MKEditorRoot>
  ),
};
