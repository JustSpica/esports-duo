import React, { createContext, useContext, useState } from 'react';

interface SelectContextProps {
  hasOpen: boolean;
  setHasOpen: React.Dispatch<React.SetStateAction<boolean>>;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  label: string;
  setLabel: React.Dispatch<React.SetStateAction<string>>;
}

interface SelectRootProps {
  children: React.ReactNode;
}

const SelectContext = createContext({} as SelectContextProps);

export function SelectProvider({ children }: SelectRootProps) {
  const [hasOpen, setHasOpen] = useState(false);
  const [value, setValue] = useState('');
  const [label, setLabel] = useState('');

  return (
    <SelectContext.Provider
      value={{ hasOpen, setHasOpen, value, setValue, label, setLabel }}
    >
      {children}
    </SelectContext.Provider>
  );
}

export function useSelect() {
  const context = useContext(SelectContext);

  return context;
}