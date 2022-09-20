import * as CheckboxRadix from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export interface CheckboxProps extends CheckboxRadix.CheckboxProps {
  label?: string;
}

export function Checkbox({ label, ...props }: CheckboxProps) {
  return (
    <label className="flex items-center gap-2 text-sm">
      <CheckboxRadix.Root
        className="w-6 h-6 p-1 flex items-center justify-center rounded bg-zinc-900"
        {...props}
      >
        <CheckboxRadix.Indicator>
          <Check className="text-emerald-400" size={18} weight="bold" />
        </CheckboxRadix.Indicator>
      </CheckboxRadix.Root>
      {label && label}
    </label>
  );
}