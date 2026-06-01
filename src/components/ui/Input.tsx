import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'light' | 'dark';
  label?: string;
}

export default function Input({ variant = 'light', label, className = '', ...props }: InputProps) {
  const baseClasses = "w-full rounded-lg px-4 py-3 focus:outline-none transition-colors shadow-inner";
  const lightClasses = "bg-black/5 border border-black/10 text-black focus:border-black/30 placeholder:text-black/40";
  const darkClasses = "bg-black/50 border border-white/20 text-white focus:border-white/50 placeholder:text-white/40";
  
  const variantClasses = variant === 'dark' ? darkClasses : lightClasses;

  return (
    <div className={className}>
      {label && (
        <label className={`block text-sm mb-2 ${variant === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
          {label}
        </label>
      )}
      <input className={`${baseClasses} ${variantClasses}`} {...props} />
    </div>
  );
}
