import useVisibilityChange from '@/hooks/useVisibilityChange';
import mergeStyles from '@/utils/mergeStyles';
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
  const orientationStyle: CSSProperties = {
    display: 'flex',
    flexDirection: orientation === 'horizontal' ? 'row' : 'column',
    gap: '2px',
  };

  const { style, otherProps } = mergeStyles<React.HTMLAttributes<HTMLDivElement>>(orientationStyle, props);
  const { render } = useVisibilityChange(visible, onVisibleChange);

  if (!render) {
    return null;
  }

  return (
    <div role="toolbar" data-orientation={orientation} aria-orientation={orientation} style={style} {...otherProps}>
      {children}
    </div>
  );
};

export default EditorToolbar;
