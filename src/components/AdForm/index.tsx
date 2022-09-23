import { FormEvent, useState } from 'react';
import { GameController } from 'phosphor-react';
import * as DialogRadix from '@radix-ui/react-dialog';

import { Button, Checkbox, Input } from 'components';
import { Select, Option } from 'components/Select';

import { GamesRequest } from 'contexts/GamesContext';
import { AdsRequest } from 'contexts/AdContext';

import { useAd } from 'hooks/useAd';
import { useGames } from 'hooks/useGames';

import { createAd } from 'services/ads';

import { ButtonDate } from './components/ButtonDate';

import weekDaysMock from './weekDaysMock';

export interface AdFormProps {
  onSubmitClose: () => void;
}

export function AdForm({ onSubmitClose }: AdFormProps) {
  const [game, setGame] = useState({} as GamesRequest);
  const [name, setName] = useState('');
  const [discord, setDiscord] = useState('');
  const [yearsPlaying, setYearsPlaying] = useState('');
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [useVoiceChannel, setUseVoiceChannel] = useState(false);

  const { setAds } = useAd();

  const { games } = useGames();

  function handleAddWeekDays(value: string) {
    const days = [...weekDays];

    if (days.find((day) => day === value)) {
      const newWeekDays = days.filter((day) => day !== value);

      return setWeekDays(newWeekDays);
    }

    return setWeekDays((prevState) => [...prevState, value]);
  };

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const body = {
      discord,
      name,
      useVoiceChannel,
      weekDays: weekDays.sort(),
      yearsPlaying: Number(yearsPlaying),
    }

    const { data } = await createAd<AdsRequest[]>(game.id, body);

    setAds(data);
    onSubmitClose();
  }

  return (
    <form className="w-[480px] mt-8">
      <main className="space-y-4">
        <Select
          data={games}
          label="Qual o game ?"
          placeholder="Selecione o game que deseja jogar"
          render={(game) => (
            <Option key={game.id} onSelect={() => setGame(game)}>
              {game.title}
            </Option>
          )}
          value={game.title}
        />
        <Input
          name="name"
          label="Seu nome (ou nickname)"
          placeholder="Como te chamam dentro do game ?"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <div className="grid grid-cols-2 gap-6">
          <Input
            name="yearsPlaying"
            label="Joga há quantos anos ?"
            placeholder="Tudo bem ser ZERO"
            value={yearsPlaying}
            onChange={(event) => setYearsPlaying(event.target.value)}
          />
          <Input
            name="discord"
            label="Qual seu Discord ?"
            placeholder="Usuário#0000"
            value={discord}
            onChange={(event) => setDiscord(event.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="block font-semibold">Quando costuma jogar?</label>
          <div className="space-x-1">
            {weekDaysMock.map((day) => (
              <ButtonDate
                type="button"
                title={day.title}
                onClick={() => handleAddWeekDays(day.value)}
              >
                {day.label}
              </ButtonDate>
            ))}
          </div>
        </div>
        <div className='space-y-2'>
          <Checkbox 
            label='Costumo me conectar ao chat de voz' 
            onCheckedChange={checked => {
              if(checked) {
                return setUseVoiceChannel(true);
              }

              return setUseVoiceChannel(false);
            }}
            checked={useVoiceChannel}
          />
        </div>
      </main>
      <footer className="w-full mt-8 flex items-center justify-end space-x-4">
        <DialogRadix.Close
          type="button"
          className="px-5 py-3 rounded-md bg-zinc-500 hover:bg-zinc-600 transition-colors"
        >
          Cancelar
        </DialogRadix.Close>
        <Button type="submit" onClick={handleSubmit}>
          <GameController />
          Encontrar Duo
        </Button>
      </footer>
    </form>
  );
}