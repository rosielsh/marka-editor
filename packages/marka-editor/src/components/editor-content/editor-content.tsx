import { useEditorContext } from '@/hooks/useEditorContext';
import React from 'react';

export interface EditorContentProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  readOnly?: boolean;
  disabled?: boolean;
  maxLength?: number;
  onFocusOutside?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onFocusInside?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}

const EditorContent = ({
  readOnly = false,
  disabled = false,
  maxLength,
  placeholder = 'Start Writing...',
  required = false,
  onFocusOutside,
  onFocusInside,
  onValueChange,
  ...props
}: EditorContentProps) => {
  const { markdownText, updateMarkdownText } = useEditorContext();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    updateMarkdownText(newValue);
    onValueChange?.(newValue);
  };

  return (
    <textarea
      {...props}
      value={markdownText}
      onChange={handleChange}
      readOnly={readOnly}
      disabled={disabled}
      maxLength={maxLength}
      placeholder={placeholder}
      required={required}
      onFocus={(e: React.FocusEvent<HTMLTextAreaElement>) => {
        onFocusInside?.(e);
        props.onFocus?.(e);
      }}
      onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) => {
        onFocusOutside?.(e);
        props.onBlur?.(e);
      }}
    />
  );
};

export default EditorContent;
