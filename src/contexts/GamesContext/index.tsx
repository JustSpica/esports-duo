import React, { createContext, useEffect, useState } from 'react';
import { findAllGames } from 'services/game';

export interface GamesRequest {
  id: string;
  title: string;
  bannerURL: string;
  _count: {
    ads: number;
  };
}

interface GamesProviderProps {
  children: React.ReactNode;
}

interface GamesContextProps {
  games: GamesRequest[];
}

export const GamesContext = createContext({} as GamesContextProps);

export function GamesProvider({ children }: GamesProviderProps) {
  const [games, setGames] = useState<GamesRequest[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await findAllGames<GamesRequest[]>();

      setGames(data);
    })()
  }, [])

  return(
    <GamesContext.Provider value={{ games }}>
      {children}
    </GamesContext.Provider>
  )
}