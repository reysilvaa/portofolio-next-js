import { ChangeEvent } from 'react';

interface FormInputProps {
  id: string;
  name: string;
  label: string;
  type?: 'text' | 'email' | 'tel' | 'textarea';
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
}

export default function FormInput({ 
  id, 
  name, 
  label, 
  type = 'text', 
  value, 
  onChange, 
  placeholder = '', 
  rows = 4 
}: FormInputProps) {

  const baseClasses = "w-full px-4 py-2 bg-white/50 border border-accent-color/20 rounded-lg font-serif text-text-color/80 " +
                      "focus:outline-none focus:border-accent-color/50 focus:ring-1 focus:ring-accent-color/30 " +
                      "placeholder:text-text-color/40";

  return (
    <div>
      <label htmlFor={id} className="block font-mono text-sm text-accent-color/80 mb-2">
        {label}
      </label>
      
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
          className={`${baseClasses} resize-none`}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={baseClasses}
          placeholder={placeholder}
        />
      )}
    </div>
  );
} 