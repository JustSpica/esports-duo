import React from 'react';
import * as DialogRadix from '@radix-ui/react-dialog';

export interface ModalProps {
  children: React.ReactNode;
}

export function Dialog({ children }: ModalProps) {
  return (
    <DialogRadix.Portal>
      <DialogRadix.Overlay className="bg-black/60 inset-0 fixed animate-show" />
      <DialogRadix.Content
        className="fixed bg-[#2A2634] py-8 px-10 rounded-lg text-white 
        top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg  
        shadow-black/40 animate-dialog"
      >
        {children}
      </DialogRadix.Content>
    </DialogRadix.Portal>
  );
}