import { useSelect } from 'components/Select';

import { Trigger } from './Trigger';

import { RootProps } from '../@types';

export function Root<T>({ data, name, placeholder, render }: RootProps<T>) {
  const { hasOpen, value } = useSelect();

  return (
    <>
      <Trigger
        placeholder={placeholder}
      />
      {hasOpen && (
        <div className='w-full max-h-[200px] absolute rounded overflow-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-800'>
          {data.map(item => render(item))}
        </div>
      )}
      <input name={name} className='hidden' value={value} />
    </>
  )
}