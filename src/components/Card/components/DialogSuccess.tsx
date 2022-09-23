import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { CheckCircle, X } from 'phosphor-react';
import { Dialog } from 'components';

import { DisplayName } from './DisplayName';

export interface DialogSuccessProps {
  discord: string;
  children?: React.ReactNode;
}

export function DialogSuccess({ children, discord }: DialogSuccessProps) {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>
        {children}
      </DialogPrimitive.Trigger>
      <Dialog>
        <div className="min-w-[320px] relative text-center">
          <DialogPrimitive.Close>
            <X
              className="absolute -top-1 right-0 text-zinc-400"
              size={24}
            />
          </DialogPrimitive.Close>
          <CheckCircle className="mx-auto text-emerald-400" size={96} />
          <strong className="block mt-6 text-2xl">Let's play</strong>
          <span className="block text-zinc-400">
            Agora é só começar a jogar!
          </span>
          <p className="block mt-6 font-semibold">Adicione no Discord</p>
          <DisplayName>
            {discord}
          </DisplayName>
        </div>
      </Dialog>
    </DialogPrimitive.Root>
  )
}