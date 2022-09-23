import { useState } from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { Copy } from 'phosphor-react';

export interface DisplayNameProps {
  children: string;
}

export function DisplayName({ children }: DisplayNameProps) {
  const [open, setOpen] = useState(false);
  const [hasHover, setHasHover] = useState(false);

  console.log(hasHover);

  return (
    <ToastPrimitive.Provider swipeDirection='right' duration={1500}>
      <span 
        className="relative w-full mt-2 py-3 block rounded bg-zinc-900 cursor-pointer hover:bg-zinc-900/80 transition-colors"
        onClick={() => {
          setOpen(true);
          navigator.clipboard.writeText(children);
        }}
        onMouseOver={() => setHasHover(true)}
        onMouseLeave={() => setHasHover(false)}
      >
        {children}
        {hasHover && (
          <Copy className='absolute right-6 top-1/2 -translate-y-1/2'/>
        )}
      </span>
      <ToastPrimitive.Root 
        className='px-4 py-2 bg-zinc-900 shadow-lg rounded-lg shadow-black/40 translate-y-32 
        state-open:animate-s-toast state-closed:animate-h-toast' 
        open={open} 
        onOpenChange={setOpen}
      >
        <ToastPrimitive.Title className='text-white'>Copiado!</ToastPrimitive.Title>
      </ToastPrimitive.Root>
      <ToastPrimitive.ToastViewport className='absolute left-1/2 -translate-x-1/2'/>
    </ToastPrimitive.Provider>
  )
}