import { createContext } from 'react';

export interface EditorContext {
  markdownText: string;
  updateMarkdownText: (text: string) => void;
}

export const EditorContext = createContext<EditorContext | undefined>(undefined);
