import { CaretDown } from 'phosphor-react';
import classNames from 'classnames';

import { useSelect } from 'components/Select';

import { TriggerProps } from '../@types';

export function Trigger({ placeholder, value }: TriggerProps) {
  const { hasOpen, setHasOpen } = useSelect();
  
  return (
    <button
      type="button"
      className={classNames(
        "w-full py-3 px-4 flex justify-between rounded bg-zinc-900 text-sm text-zinc-500", {
          '!text-white': value
        }
      )}
      onClick={() => setHasOpen(!hasOpen)}
    >
      {value || placeholder}
      <CaretDown
        className={classNames("transition-transform", {
          "rotate-180": hasOpen,
        })}
        size={18}
      />
    </button>
  );
}