import EditorRootContextProvider from '@/providers/EditorRootContextProvider';
import type { Meta, StoryObj } from '@storybook/react';
import EditorContent from './editor-content';

const meta: Meta<typeof EditorContent> = {
  title: 'MKEditor/EditorContent',
  component: EditorContent,
  argTypes: {
    readOnly: { control: 'boolean' },
    disabled: { control: 'boolean' },
    maxLength: { control: 'number' },
    placeholder: { control: 'text' },
    required: { control: 'boolean' },
    onFocusOutside: { action: 'focusedOutside' },
    onFocusInside: { action: 'focusedInside' },
    onValueChange: { action: 'valueChanged' },
  },
  decorators: [
    Story => (
      <EditorRootContextProvider>
        <Story />
      </EditorRootContextProvider>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EditorContent>;

export const Default: Story = {
  render: args => <EditorContent {...args} />,
  args: {
    placeholder: 'Start writing...',
  },
};

export const ReadOnly: Story = {
  render: args => <EditorContent {...args} />,
  args: {
    readOnly: true,
  },
};

export const Disabled: Story = {
  render: args => <EditorContent {...args} />,
  args: {
    disabled: true,
  },
};

export const WithMaxLength: Story = {
  render: args => <EditorContent {...args} />,
  args: {
    maxLength: 10,
    placeholder: 'Max 10 characters',
  },
};

export const Required: Story = {
  render: args => <EditorContent {...args} />,
  args: {
    required: true,
  },
};

export const WithCustomPlaceHolder: Story = {
  render: args => <EditorContent {...args} />,
  args: {
    placeholder: 'Custom placeholder',
  },
};

export const WithCustomStyles: Story = {
  render: args => <EditorContent {...args} />,
  args: {
    style: {
      width: '100%',
      height: '200px',
      border: '1px solid #007bff',
      borderRadius: '5px',
      padding: '10px',
      fontSize: '16px',
    },
    placeholder: 'Custom styled textarea',
  },
};
