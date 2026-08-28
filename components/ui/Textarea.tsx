import { TextareaHTMLAttributes } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  helperText?: string
  error?: string
}

export const Textarea = ({ label, helperText, error, className = '', ...props }: TextareaProps) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-brand-dark-grey">
          {label}
        </label>
      )}
      <textarea
        className={`w-full px-3 py-2 border border-brand-light-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent resize-vertical ${className}`}
        {...props}
      />
      {helperText && (
        <p className="text-xs text-brand-medium-grey">{helperText}</p>
      )}
      {error && (
        <p className="text-xs text-red-600">{error}</p>
      )}
    </div>
  )
}