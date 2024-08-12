import useEditorState from '@/hooks/useEditorState';

const EditorContent = () => {
  const { markdownText, updateMarkdownText } = useEditorState();
  return (
    <div>
      <textarea value={markdownText} onChange={e => updateMarkdownText(e.target.value)} placeholder="write here.." />
      <p>preview : {markdownText}</p>
    </div>
  );
};

export default EditorContent;
