import React, { ButtonHTMLAttributes, useState } from 'react';
import classNames from 'classnames';

export interface ButtonDateProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function ButtonDate({ children, ...props }: ButtonDateProps) {
  const [hasSelected, setHasSelected] = useState(false);

  function handleChangeButtonState() {
    setHasSelected(!hasSelected);
  }

  return (
    <button
      className={classNames(
        'w-10 h-10 font-bold bg-zinc-900 text-white rounded transition-all',
        {
          '!bg-violet-500 shadow-md shadow-violet-500/50': hasSelected,
        }
      )}
      onClick={() => {
        handleChangeButtonState();
        if (props.onClick) {
          props.onClick
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
}