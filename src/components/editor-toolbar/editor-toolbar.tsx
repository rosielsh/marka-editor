import useVisibilityChange from '@/hooks/useVisibilityChange';
import React, { CSSProperties } from 'react';

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

  const orientationStyle: CSSProperties = {
    display: 'flex',
    flexDirection: orientation === 'horizontal' ? 'row' : 'column',
    gap: '2px',
  };

  const { style, ...otherProps } = props;

  const combinedStyle: CSSProperties = {
    ...orientationStyle,
    ...style,
  };

  return (
    <div
      role="toolbar"
      data-orientation={orientation}
      aria-orientation={orientation}
      style={combinedStyle}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default EditorToolbar;
