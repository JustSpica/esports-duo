import React from 'react';
import { Card } from 'components';

import { useGames } from 'hooks/useGames';
import { useAd } from 'hooks/useAd';

import { Default } from 'layout';

export function Home() {
  const { games } = useGames();

  const { ads } = useAd();

  return (
    <Default>
      {ads.length === 0 ? (
        <div className='w-full h-full flex items-center justify-center'>
          <strong className='text-4xl'>A lista de anúncio está vazia</strong>
        </div>
      ) : (
        <>
          <h1 className='text-4xl font-bold'>Ultimos anúncios</h1>
          <div className="w-full mt-12 flex flex-wrap gap-8">
            {ads.map(ad => (
              <Card
                key={ad.id}
                name={ad.name}
                availability={ad.weekDays}
                discord={ad.discord}
                game={games.find(game => game.id === ad.gameId)?.title}
                timeGameplay={ad.yearsPlaying}
                isAudioAvailable={ad.useVoiceChannel}
              />
            ))}
          </div>
        </>
      )}
    </Default>
  );
}