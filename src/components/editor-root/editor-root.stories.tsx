import type { Meta, StoryObj } from '@storybook/react';
import EditorRoot, { EditorRootProps } from './editor-root';

// 더미 에디터 컴포넌트
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

export const Default: Story = (args: EditorRootProps) => (
  <EditorRoot {...args}>
    <DummyToolbar />
    <DummyContent content={args.initialContent || '# Welcome to the Editor'} />
  </EditorRoot>
);
Default.args = {
  initialContent: 'Default Editor',
};

export const WithCustomClass: Story = (args: EditorRootProps) => (
  <EditorRoot {...args}>
    <DummyToolbar />
    <DummyContent content={args.initialContent || '## Styled Editor'} />
  </EditorRoot>
);
WithCustomClass.args = {
  initialContent: '## Styled Editor',
  className: 'custom-editor-class',
};

export const WithCustomStyle: Story = (args: EditorRootProps) => (
  <EditorRoot {...args}>
    <DummyToolbar />
    <DummyContent content={args.initialContent || '### Editor with Custom Style'} />
  </EditorRoot>
);
WithCustomStyle.args = {
  initialContent: 'initialContent',
  style: { border: '2px solid blue', borderRadius: '8px', padding: '16px' },
};

export const EmptyEditor: Story = (args: EditorRootProps) => (
  <EditorRoot {...args}>
    <DummyToolbar />
    <DummyContent content="Start typing here..." />
  </EditorRoot>
);
EmptyEditor.args = {
  initialContent: '',
};
