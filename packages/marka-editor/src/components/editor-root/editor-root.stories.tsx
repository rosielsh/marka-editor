import type { Meta, StoryObj } from '@storybook/react';
import EditorRoot from './editor-root';

const DummyToolbar = () => <div style={{ background: '#f0f0f0', padding: '10px' }}>Toolbar</div>;
const DummyContent = ({ content }: { content: string }) => (
  <div style={{ border: '1px solid #ccc', padding: '10px', minHeight: '100px' }}>{content}</div>
);

const meta: Meta<typeof EditorRoot> = {
  title: 'MKEditor/EditorRoot',
  component: EditorRoot,
  argTypes: {
    initialContent: { control: 'text' },
    className: { control: 'text' },
    style: { control: 'object' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EditorRoot>;

export const Default: Story = {
  render: args => (
    <EditorRoot {...args}>
      <DummyToolbar />
      <DummyContent content={args.initialContent || '# Welcome to the Editor'} />
    </EditorRoot>
  ),
  args: {
    initialContent: 'Default Editor',
  },
};

export const WithCustomClass: Story = {
  render: args => (
    <EditorRoot {...args}>
      <DummyToolbar />
      <DummyContent content={args.initialContent || '## Styled Editor'} />
    </EditorRoot>
  ),
  args: {
    initialContent: '## Styled Editor',
    className: 'custom-editor-class',
  },
};

export const WithCustomStyle: Story = {
  render: args => (
    <EditorRoot {...args}>
      <DummyToolbar />
      <DummyContent content={args.initialContent || '### Editor with Custom Style'} />
    </EditorRoot>
  ),
  args: {
    initialContent: '### Editor with Custom Style',
    style: { border: '2px solid blue', borderRadius: '8px', padding: '16px' },
  },
};

export const EmptyEditor: Story = {
  render: args => (
    <EditorRoot {...args}>
      <DummyToolbar />
      <DummyContent content="Start typing here..." />
    </EditorRoot>
  ),
  args: {
    initialContent: '',
  },
};
