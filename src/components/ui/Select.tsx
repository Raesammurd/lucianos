import { SelectHTMLAttributes, ReactNode } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  variant?: 'light' | 'dark';
  label?: string;
  children: ReactNode;
}

export default function Select({ variant = 'light', label, children, className = '', ...props }: SelectProps) {
  const baseClasses = "w-full rounded-lg px-4 py-3 focus:outline-none transition-colors shadow-inner appearance-none";
  const lightClasses = "bg-black/5 border border-black/10 text-black focus:border-black/30";
  const darkClasses = "bg-black/50 border border-white/20 text-white focus:border-white/50";
  
  const variantClasses = variant === 'dark' ? darkClasses : lightClasses;

  return (
    <div className={className}>
      {label && (
        <label className={`block text-sm mb-2 ${variant === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
          {label}
        </label>
      )}
      <select className={`${baseClasses} ${variantClasses}`} {...props}>
        {children}
      </select>
    </div>
  );
}
