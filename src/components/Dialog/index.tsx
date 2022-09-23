import React from 'react';
import * as DialogRadix from '@radix-ui/react-dialog';
import classNames from 'classnames';

export interface ModalProps {
  children: React.ReactNode;
}

export function Dialog({ children }: ModalProps) {
  return (
    <DialogRadix.Portal>
      <DialogRadix.Overlay 
        className="bg-black/60 inset-0 fixed state-open:animate-s-overlay 
        state-closed:animate-h-overlay" 
      />
      <DialogRadix.Content
        className="fixed bg-[#2A2634] py-8 px-10 rounded-lg text-white 
        top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg 
        shadow-black/40 state-open:animate-s-dialog 
        state-closed:animate-h-dialog"
      >
        {children}
      </DialogRadix.Content>
    </DialogRadix.Portal>
  );
}