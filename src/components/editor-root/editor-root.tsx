import EditorRootContextProvider from '@/providers/EditorRootContextProvider';
import React from 'react';

export interface EditorRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  initialContent?: string;
}

const EditorRoot = ({ children, initialContent = '', ...props }: EditorRootProps) => {
  return (
    <EditorRootContextProvider initialContent={initialContent}>
      <div {...props}>{children}</div>
    </EditorRootContextProvider>
  );
};

export default EditorRoot;
