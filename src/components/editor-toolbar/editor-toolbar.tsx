import useVisibilityChange from '@/hooks/useVisibilityChange';
import React from 'react';

export interface ToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
}

const EditorToolbar = ({
  children,
  orientation = 'horizontal',
  visible = true,
  onVisibleChange,
  ...props
}: ToolbarProps) => {
  const { render } = useVisibilityChange(visible, onVisibleChange);

  if (!render) {
    return null;
  }

  return (
    <div role="toolbar" data-orientation={orientation} aria-orientation={orientation} {...props}>
      {children}
    </div>
  );
};

export default EditorToolbar;
