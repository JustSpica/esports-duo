import React from 'react';
import { GameController } from 'phosphor-react';
import classNames from 'classnames';

import { Button } from 'components';

import { convertToWeekDays } from 'utils/convertToWeekDays';

export interface AdCardProps {
  availability: string[];
  game?: string;
  isAudioAvailable: boolean;
  name: string;
  timeGameplay: number;
}

export function Card({
  availability,
  game,
  isAudioAvailable,
  name,
  timeGameplay,
}: AdCardProps) {
  const weekDays = convertToWeekDays(availability).map(day => day.initial);

  return (
    <div className="w-full max-w-xs pt-1 bg-arcoGradient rounded-lg">
      <div className="w-full py-6 px-8 bg-[#2A2634] rounded-md space-y-4">
        <div>
          <span className="block text-zinc-300">Nome</span>
          <strong className="text-white">{name}</strong>
        </div>
        <div>
          <span className="block text-zinc-300">Game</span>
          <strong className="text-white">{game}</strong>
        </div>
        <div>
          <span className="block text-zinc-300">Tempo de jogo</span>
          <strong className="text-white">{timeGameplay} anos</strong>
        </div>
        <div>
          <span className="block text-zinc-300">Disponibilidade</span>
          <strong className="text-white">{weekDays.join('-')}</strong>
        </div>
        <div>
          <span className="block text-zinc-300">Chamada de áudio ?</span>
          <strong
            className={classNames('text-red-500', {
              'text-emerald-400': isAudioAvailable,
            })}
          >
            {isAudioAvailable ? 'Sim' : 'Não'}
          </strong>
        </div>
        <Button className='w-full justify-center'>
          <GameController />
          Conectar
        </Button>
      </div>
    </div>
  );
}