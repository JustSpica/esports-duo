import React, { createContext, useContext, useState } from 'react';

interface SelectContextProps {
  hasOpen: boolean;
  setHasOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SelectRootProps {
  children: React.ReactNode;
}

const SelectContext = createContext({} as SelectContextProps);

export function SelectProvider({ children }: SelectRootProps) {
  const [hasOpen, setHasOpen] = useState(false);

  return (
    <SelectContext.Provider
      value={{ hasOpen, setHasOpen }}
    >
      {children}
    </SelectContext.Provider>
  );
}

export function useSelect() {
  const context = useContext(SelectContext);

  return context;
}