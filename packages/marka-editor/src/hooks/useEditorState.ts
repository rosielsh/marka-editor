import { useCallback, useState } from 'react';

interface EditorState {
  markdownText: string;
}

const useEditorState = (initialValue: string = '') => {
  const [state, setState] = useState<EditorState>({
    markdownText: initialValue,
  });

  const updateMarkdownText = useCallback((text: string) => {
    setState(prevState => ({ ...prevState, markdownText: text }));
  }, []);

  return {
    ...state,
    updateMarkdownText,
  };
};

export default useEditorState;
