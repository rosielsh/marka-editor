import { useEditor } from '../utils/useEditor';

const MKEditorTextarea = () => {
  const { markdownText, updateMarkdownText } = useEditor();
  return (
    <div>
      <textarea value={markdownText} onChange={e => updateMarkdownText(e.target.value)} placeholder="write here.." />
      <p>preview : {markdownText}</p>
    </div>
  );
};

export default MKEditorTextarea;
