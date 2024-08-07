import { useContext } from 'react';
import { EditorContext } from '../MKEditorRoot/mkeditor-root';

// Encapsulates logic to get values from EditorContext
export const useEditor = () => {
  const context = useContext(EditorContext);

  if (!context) {
    throw Error('useEditor must be used within the Editor Root');
  }

  return context;
};
