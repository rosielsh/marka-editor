import React, { CSSProperties, useEffect, useRef } from 'react';

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
  const prevVisibleRef = useRef<boolean>(visible);

  useEffect(() => {
    if (prevVisibleRef.current !== visible && onVisibleChange) {
      onVisibleChange(visible);
    }

    prevVisibleRef.current = visible;
  }, [visible, onVisibleChange]);

  if (!visible) {
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
