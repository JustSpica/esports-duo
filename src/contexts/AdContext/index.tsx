import React, { createContext, useState, useEffect } from 'react';

import { findAllLastAds } from 'services/ads';

interface AdContextProps {
  ads: AdsRequest[];
  setAds: React.Dispatch<React.SetStateAction<AdsRequest[]>>;
}

interface AdProviderProps {
  children: React.ReactNode;
}

export interface AdsRequest { 
  id: string;
  gameId: string;
  name: string;
  yearsPlaying: number;
  discord: string;
  weekDays: string[]
  useVoiceChannel: boolean;
  createdAt: string;
}

export const AdContext = createContext({} as AdContextProps)

export function AdProvider({ children }: AdProviderProps) {
  const [ads, setAds] = useState<AdsRequest[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await findAllLastAds<AdsRequest[]>();

      setAds(data);
    })()
  }, [])

  return (
    <AdContext.Provider value={{ ads, setAds }}>
      {children}
    </AdContext.Provider>
  );
};