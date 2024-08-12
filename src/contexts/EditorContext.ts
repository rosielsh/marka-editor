import { createContext } from 'react';

export interface IContext {
  markdownText: string;
  updateMarkdownText: (text: string) => void;
}

export const EditorContext = createContext<IContext | undefined>(undefined);
