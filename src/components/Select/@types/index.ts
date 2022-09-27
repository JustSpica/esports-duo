export interface TriggerProps {
  placeholder?: string;
}

export interface RootProps<T> extends TriggerProps {
  data: T[];
  name?: string;
  render: (item: T) => React.ReactNode;
}

export interface OptionsProps {
  children: React.ReactNode;
  value: string;
  label: string;
}

export interface SelectProps<T> extends RootProps<T> {
  label?: string;
}