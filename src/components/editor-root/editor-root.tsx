import useEditorState from '@/hooks/useEditorState';
import EditorRootContextProvider from '@/providers/EditorRootContextProvider';

export interface EditorRootProps {
  children: React.ReactNode;
}

const EditorRoot = ({ children }: EditorRootProps) => {
  const editorState = useEditorState();

  return <EditorRootContextProvider value={editorState}>{children}</EditorRootContextProvider>;
};

export default EditorRoot;
