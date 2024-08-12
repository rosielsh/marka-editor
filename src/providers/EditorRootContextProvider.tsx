import { EditorContext, IContext } from '@/contexts/EditorContext';

export interface EditorRootContextProviderProps {
  children: React.ReactNode;
  value: IContext;
}

const EditorRootContextProvider = ({ value, children }: EditorRootContextProviderProps) => {
  return <EditorContext.Provider value={value}>{children}</EditorContext.Provider>;
};

export default EditorRootContextProvider;
