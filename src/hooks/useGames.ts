import { useContext } from 'react';

import { GamesContext } from 'contexts/GamesContext';

export function useGames() {
  const context = useContext(GamesContext);

  return context;
}