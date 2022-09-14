import React from 'react';
import { DiscordLogo } from 'phosphor-react';

import { Button } from 'components';

import logo from 'assets/svg/logo.svg';

import gamesMock from './gamesMock';

export function Home() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center relative">
      <Button className='absolute top-8 right-0'>
        <DiscordLogo size={20}/> Entrar com discord
      </Button>
      <img className="my-20" src={logo} alt="Esports" />
      <h1 className="text-6xl text-white font-black">
        Seu{" "}
        <span className="text-transparent bg-arcoGradient bg-clip-text">
          duo
        </span>{" "}
        está aqui
      </h1>
      <div className="w-full grid grid-cols-6 gap-6 mt-16">
        {gamesMock.map((game) => (
          <div
            className="relative rounded-lg overflow-hidden cursor-pointer 
            hover:scale-105 transition-transform"
          >
            <img src={game.image} alt={game.name} />
            <div className="w-full p-4 pt-16 bg-fadeGameGradient absolute bottom-0">
              <strong className="font-bold text-white block">
                {game.name}
              </strong>
              <span className="text-zinc-300 text-sm block">
                {game.adverts} anúncios
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
