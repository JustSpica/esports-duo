import { InputHTMLAttributes } from 'react';
import classNames from 'classnames';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, ...props }: InputProps) {
  return (
    <div className="space-y-2">
      <label className="block font-semibold" htmlFor={props.id}>
        {label}
      </label>
      <input
        className={classNames(
          "w-full py-3 px-4 rounded bg-zinc-900 text-white text-sm placeholder:text-zinc-500",
          {
            "placeholder:!text-red-500 shadow-error": error,
          }
        )}
        autoComplete="off"
        {...props}
      />
      {error && <span className='text-sm text-red-500'>{error}</span>}
    </div>
  );
}