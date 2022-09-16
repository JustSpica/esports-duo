import { AdCard } from 'components';

import { Default } from 'layout';

import mock from './mock';

export function Home() {
  return (
    <Default>
      <h1 className='text-4xl font-bold'>Ultimos anúncios</h1>
      <div className="w-full mt-12 flex flex-wrap gap-8">
        {mock.map(card => (
          <AdCard
            key={card.id}
            availability={card.availability}
            game={card.game}
            name={card.name}
            time={card.time}
            isAudioAvailable={card.isAudioAvailable}
          />
        ))}
      </div>
    </Default>
  );
}