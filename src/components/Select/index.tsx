import { SelectProvider, useSelect } from './context';

import { Root } from './components/Root';
import { Option } from './components/Option';

import { SelectProps } from './@types';

export function Select<T>(props: SelectProps<T>) {
  return(
    <SelectProvider>
      <div className="w-full relative space-y-2">
        {props.label && (
          <label className="block font-semibold">{props.label}</label>
        )}
        <Root {...props} />
        {props.error && (
          <span className='text-sm text-red-500'>{props.error}</span>
        )}
      </div>
    </SelectProvider>
  )
}

export { Option, SelectProvider, useSelect }