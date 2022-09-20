import { useEffect, useState } from 'react';

import { Card } from 'components';

import { useGames } from 'hooks/useGames';
import { useAd } from 'hooks/useAd';

import { Default } from 'layout';

export function Home() {
  const { games } = useGames();

  const { ads } = useAd();

  return (
    <Default>
      <h1 className='text-4xl font-bold'>Ultimos anúncios</h1>
      <div className="w-full mt-12 flex flex-wrap gap-8">
        {ads.map(ad => (
          <Card
            key={ad.id}
            name={ad.name}
            availability={ad.weekDays}
            game={games.find(game => game.id === ad.gameId)?.title}
            timeGameplay={ad.yearsPlaying}
            isAudioAvailable={ad.useVoiceChannel}
          />
        ))}
      </div>
    </Default>
  );
}