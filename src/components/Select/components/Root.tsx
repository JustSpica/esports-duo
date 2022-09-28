import { useSelect } from 'components/Select';

import { Trigger } from './Trigger';

import { RootProps } from '../@types';

export function Root<T>(props: RootProps<T>) {
  const { hasOpen, value } = useSelect();

  return (
    <>
      <Trigger
        placeholder={props.placeholder}
        error={props.error}
      />
      {hasOpen && (
        <div className='w-full max-h-[200px] absolute rounded overflow-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-800'>
          {props.data.map(item => props.render(item))}
        </div>
      )}
      <input name={props.name} className='hidden' value={value} />
    </>
  )
}