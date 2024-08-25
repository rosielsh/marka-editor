import { useEffect, useRef } from 'react';

interface UseVisibilityChangeRes {
  render: boolean;
}

const useVisibilityChange = (
  visible: boolean,
  onVisibleChange?: (visible: boolean) => void,
): UseVisibilityChangeRes => {
  const prevVisibleRef = useRef<boolean>(visible);

  useEffect(() => {
    if (prevVisibleRef.current !== visible && onVisibleChange) {
      onVisibleChange(visible);
    }

    prevVisibleRef.current = visible;
  }, [visible, onVisibleChange]);

  return {
    render: visible,
  };
};

export default useVisibilityChange;
