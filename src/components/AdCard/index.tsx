import React from 'react';
import { GameController } from 'phosphor-react';
import classNames from 'classnames';

import { Button } from 'components';

export interface AdCardProps {
  availability: string;
  game: string;
  isAudioAvailable?: boolean;
  name: string;
  time: string;
}

export function AdCard({
  availability,
  isAudioAvailable,
  game,
  name,
  time,
}: AdCardProps) {
  return (
    <div className="w-full max-w-xs pt-1 bg-arcoGradient rounded-lg">
      <div className="w-full py-6 px-8 bg-[#2A2634] rounded-md space-y-4">
        <div>
          <span className="block text-zinc-300">Nome</span>
          <strong className="text-white">{name}</strong>
        </div>
        <div>
          <span className="block text-zinc-300">Tempo de jogo</span>
          <strong className="text-white">{time}</strong>
        </div>
        <div>
          <span className="block text-zinc-300">Disponibilidade</span>
          <strong className="text-white">{availability}</strong>
        </div>
        <div>
          <span className="block text-zinc-300">Jogo</span>
          <strong className="text-white">{game}</strong>
        </div>
        <div>
          <span className="block text-zinc-300">Chamda de áudio ?</span>
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