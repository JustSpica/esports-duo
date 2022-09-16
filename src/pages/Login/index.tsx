import React from 'react';
import { DiscordLogo } from 'phosphor-react';

import { Button } from 'components';

import logo from '/logo.svg';

import gamesMock from './gamesMock';

export function Login() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center relative">
      <a href="https://discord.com/api/oauth2/authorize?client_id=1019636257267142756&redirect_uri=http%3A%2F%2F127.0.0.1%3A5173&response_type=token&scope=identify%20email">
        <Button className='absolute top-8 right-0'>
          <DiscordLogo size={20}/> Entrar com discord
        </Button>
      </a>
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
