import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | string;
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`bg-violet-500 px-4 py-3 rounded-md text-white flex items-center gap-2 hover:bg-violet-600 transition-colors ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
}
