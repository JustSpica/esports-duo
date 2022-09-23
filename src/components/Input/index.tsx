import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, ...props }: InputProps) {
  return(
    <div className="space-y-2">
      <label className="block font-semibold" htmlFor={props.id}>{label}</label>
      <input 
        className="w-full py-3 px-4 rounded bg-zinc-900 text-white text-sm placeholder:text-zinc-500"
        autoComplete="off" 
        {...props} 
      />
    </div>
  );
}