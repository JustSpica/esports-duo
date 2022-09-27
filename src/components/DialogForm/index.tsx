import { FormEvent, useState } from 'react';
import * as DialogRadix from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react';

import { Button, Checkbox, Input } from 'components';
import { Select, Option } from 'components/Select';

import { AdsRequest } from 'contexts/AdContext';

import { useAd } from 'hooks/useAd';
import { useGames } from 'hooks/useGames';

import { createAd } from 'services/ads';

import { ButtonDate } from './components/ButtonDate';

import weekDaysList from './weekDays';

export interface DialogForm {
  onFinished: () => void;
}

export function DialogForm({ onFinished }: DialogForm) {
  const [weekDays, setWeekDays] = useState<string[]>([]);

  const { games } = useGames();
  const { setAds } = useAd();

  function handleWeekDay(value: string) {
    const days = [...weekDays];

    if (days.find(day => day === value)) {
      const newWeekDays = days.filter(day => day !== value);

      return setWeekDays(newWeekDays);
    }

    return setWeekDays((prevState) => [...prevState, value]);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    
    const form = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(form);

    console.log(data);

    const body = {
      discord: data.discord,
      name: data.name,
      useVoiceChannel: data.useVoiceChannel ? true : false,
      weekDays: weekDays.sort(),
      yearsPlaying: Number(data.yearsPlaying),
    }

    try {
      const response = await createAd<AdsRequest[]>(String(data.game), body);

      setAds(response.data);
      onFinished();
    } catch(error) {
      console.log(error);
      onFinished();
    }
  }
  
  return (
    <form className="w-[480px] mt-8" onSubmit={handleSubmit}>
      <main className="space-y-4">
        <Select
          name="game"
          data={games}
          label="Qual o game ?"
          placeholder="Selecione o game que deseja jogar"
          render={(game) => (
            <Option key={game.id} value={game.id} label={game.title}>
              {game.title}
            </Option>
          )}
        />
        <Input
          name="name"
          label="Seu nome (ou nickname)"
          placeholder="Como te chamam dentro do game ?"
        />
        <div className="grid grid-cols-2 gap-6">
          <Input
            name="yearsPlaying"
            label="Joga há quantos anos ?"
            placeholder="Tudo bem ser ZERO"
          />
          <Input
            name="discord"
            label="Qual seu Discord ?"
            placeholder="Usuário#0000"
          />
        </div>
        <div className="space-y-2">
          <label className="block font-semibold">Quando costuma jogar?</label>
          <div className="space-x-1">
            {weekDaysList.map(({ label, title, value }) => (
              <ButtonDate 
                type="button" 
                title={title} 
                onClick={() => handleWeekDay(value)}
              >
                {label}
              </ButtonDate>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <Checkbox
            name="useVoiceChannel"
            label="Costumo me conectar ao chat de voz"
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
        <Button type="submit">
          <GameController />
          Encontrar Duo
        </Button>
      </footer>
    </form>
  );
}