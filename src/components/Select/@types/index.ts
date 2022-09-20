export interface TriggerProps {
  placeholder?: string;
  value?: string | number;
}

export interface RootProps<T> extends TriggerProps {
  data: T[];
  render: (item: T) => React.ReactNode;
}

export interface OptionsProps {
  children: React.ReactNode;
  onSelect?: () => void;
}

export interface SelectProps<T> extends RootProps<T> {
  label?: string;
}