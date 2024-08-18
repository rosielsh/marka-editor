import { EditorContext } from '@/contexts/EditorContext';
import useEditorState from '@/hooks/useEditorState';

export interface EditorRootContextProviderProps {
  children: React.ReactNode;
  initialContent?: string;
}

const EditorRootContextProvider = ({ initialContent, children }: EditorRootContextProviderProps) => {
  const editorState = useEditorState(initialContent);
  return <EditorContext.Provider value={editorState}>{children}</EditorContext.Provider>;
};

export default EditorRootContextProvider;
