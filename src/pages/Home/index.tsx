import { useEffect, useState } from 'react';

import { Card } from 'components';

import { Default } from 'layout';

import { findAllLastAds } from 'services/ads';

export interface DataRequest { 
  id: string;
  gameId: string;
  name: string;
  yearsPlaying: number;
  discord: string;
  weekDays: string[]
  useVoiceChannel: boolean;
  createdAt: string;
}


export function Home() {
  const [data, setData] = useState<DataRequest[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await findAllLastAds<DataRequest[]>();

      setData(data);
    })()
  }, [])

  return (
    <Default>
      <h1 className='text-4xl font-bold'>Ultimos anúncios</h1>
      <div className="w-full mt-12 flex flex-wrap gap-8">
        {data.map(ad => (
          <Card
            key={ad.id}
            name={ad.name}
            availability={ad.weekDays}
            timeGameplay={ad.yearsPlaying}
            isAudioAvailable={ad.useVoiceChannel}
          />
        ))}
      </div>
    </Default>
  );
}