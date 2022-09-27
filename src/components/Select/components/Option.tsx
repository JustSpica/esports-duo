import { useSelect } from 'components/Select';

import { OptionsProps } from '../@types';

export function Option({ children, label, value }: OptionsProps) {
  const { hasOpen, setHasOpen, setValue, setLabel } = useSelect();

  return (
    <button 
      type='button' 
      className='w-full py-3 px-4 block text-left text-sm bg-zinc-900 hover:bg-zinc-800 transition-colors'
      onClick={() => {
        setHasOpen(!hasOpen)
        setValue(value);
        setLabel(label);
      }}
    >
      {children}
    </button>
  )
}