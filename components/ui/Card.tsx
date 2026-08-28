import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  padding?: 'sm' | 'md' | 'lg'
}

export const Card = ({ children, className = '', padding }: CardProps) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }

  const paddingClass = padding ? paddingClasses[padding] : ''

  return (
    <div className={`bg-white rounded-lg border border-brand-light-grey shadow-sm ${paddingClass} ${className}`}>
      {children}
    </div>
  )
}