import { useSelect } from 'components/Select';

import { OptionsProps } from '../@types';

export function Option({ children, onSelect }: OptionsProps) {
  const { hasOpen, setHasOpen } = useSelect();

  return (
    <button 
      type='button' 
      className='w-full py-3 px-4 block text-left text-sm bg-zinc-900 hover:bg-zinc-800 transition-colors'
      onClick={() => {
        setHasOpen(!hasOpen)
        onSelect && onSelect();
      }}
    >
      {children}
    </button>
  )
}