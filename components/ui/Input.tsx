import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  helperText?: string
  error?: string
}

export const Input = ({ label, helperText, error, className = '', ...props }: InputProps) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-brand-dark-grey">
          {label}
        </label>
      )}
      <input
        className={`w-full px-3 py-2 border border-brand-light-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent ${className}`}
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