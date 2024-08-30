import { EditorContext } from '@/providers/EditorRootContextProvider';
import { useContext } from 'react';

export const useEditorContext = () => {
  const context = useContext(EditorContext);
  if (context === undefined) {
    throw new Error('useEditorContext must be used within an EditorProvider');
  }
  return context;
};
