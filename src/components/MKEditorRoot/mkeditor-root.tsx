import { createContext, useState } from 'react';

export interface IContext {
  markdownText: string;
  updateMarkdownText: (text: string) => void;
}

export const EditorContext = createContext<IContext | undefined>(undefined);

export interface IRootProps {
  children: React.ReactNode;
}

const MKEditorRoot = ({ children }: IRootProps) => {
  const [markdownText, setMarkdownText] = useState<string>(''); // internally managed state

  const updateMarkdownText = (text: string) => {
    setMarkdownText(text);
  };

  return (
    <EditorContext.Provider value={{ markdownText, updateMarkdownText }}>
      <div className="roots">{children}</div>
    </EditorContext.Provider>
  );
};

export default MKEditorRoot;
