import useEditorState from '@/hooks/useEditorState';

import { createContext } from 'react';

export interface EditorContext {
  markdownText: string;
  updateMarkdownText: (text: string) => void;
}

export const EditorContext = createContext<EditorContext | undefined>(undefined);

export interface EditorRootContextProviderProps {
  children: React.ReactNode;
  initialContent?: string;
}

const EditorRootContextProvider = ({ initialContent, children }: EditorRootContextProviderProps) => {
  const editorState = useEditorState(initialContent);
  return <EditorContext.Provider value={editorState}>{children}</EditorContext.Provider>;
};

export default EditorRootContextProvider;
