import { CSSProperties } from 'react';

const mergeStyles = <T extends React.HTMLAttributes<HTMLElement>>(customStyle: CSSProperties, props: T) => {
  const { style, ...otherProps } = props;

  const combinedStyle: CSSProperties = {
    ...customStyle,
    ...style,
  };

  return {
    style: combinedStyle,
    otherProps,
  };
};

export default mergeStyles;
