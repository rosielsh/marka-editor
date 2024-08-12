import { useCallback, useState } from 'react';

const useEditorState = (initialValue: string = '') => {
  const [markdownText, setMarkdownText] = useState<string>(initialValue);

  const updateMarkdownText = useCallback((text: string) => {
    setMarkdownText(text);
  }, []);

  return { markdownText, updateMarkdownText };
};

export default useEditorState;
