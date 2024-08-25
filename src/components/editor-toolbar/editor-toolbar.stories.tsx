import type { Meta, StoryObj } from '@storybook/react';
import EditorToolbar from './editor-toolbar';

const meta: Meta<typeof EditorToolbar> = {
  title: 'MKEditor/EditorToolbar',
  component: EditorToolbar,
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
      description: 'Direction to which toolbar groups will be rendered',
    },
    visible: { control: 'boolean', description: 'Visibility of toolbar' },
    onVisibleChange: {
      action: 'visibilityChanged',
      description: "Functions called when the toolbar's visibility state changes",
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EditorToolbar>;

const DummyToolbarItem = ({ label }: { label: string }) => (
  <button style={{ margin: '0 2px', padding: '5px 10px' }}>{label}</button>
);

const DummyToolbarTextGroup = () => {
  return (
    <div style={{ flexDirection: 'column' }}>
      <DummyToolbarItem label="Bold" />
      <DummyToolbarItem label="Italic" />
      <DummyToolbarItem label="Underline" />
    </div>
  );
};

const DummyToolbarLayoutGroup = () => {
  return (
    <div style={{ flexDirection: 'column' }}>
      <DummyToolbarItem label="Left" />
      <DummyToolbarItem label="Center" />
      <DummyToolbarItem label="Right" />
    </div>
  );
};

export const Default: Story = {
  render: args => (
    <EditorToolbar {...args}>
      <DummyToolbarTextGroup />
    </EditorToolbar>
  ),
};

export const VerticalOrientation: Story = {
  render: args => (
    <EditorToolbar {...args}>
      <DummyToolbarTextGroup />
      <DummyToolbarLayoutGroup />
    </EditorToolbar>
  ),
  args: {
    orientation: 'vertical',
  },
};

export const Hidden: Story = {
  render: args => (
    <EditorToolbar {...args}>
      <DummyToolbarTextGroup />
    </EditorToolbar>
  ),
  args: {
    visible: false,
  },
};

export const WithCustomContent: Story = {
  render: args => (
    <EditorToolbar {...args}>
      <select style={{ margin: '0 2px' }}>
        <option>Paragraph</option>
        <option>H1</option>
        <option>H2</option>
      </select>
      <DummyToolbarItem label="Link" />
      <DummyToolbarItem label="Image" />
    </EditorToolbar>
  ),
};

// export const ToggleVisibility: Story = {
//   render: args => {
//     const [isVisible, setIsVisible] = React.useState(true);

//     return (
//       <div>
//         <button onClick={() => setIsVisible(!isVisible)} style={{ margin: '4px 2px' }}>
//           Toggle Toolbar Visibility
//         </button>
//         <EditorToolbar {...args} visible={isVisible} onVisibleChange={setIsVisible}>
//           <DummyToolbarTextGroup />
//         </EditorToolbar>
//       </div>
//     );
//   },
// };
