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

import { validationForm, ErrorsProps } from './validation';

import weekDaysList from './weekDays';

export interface DialogForm {
  onFinished: () => void;
}

export function DialogForm({ onFinished }: DialogForm) {
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [errors, setErrors] = useState({} as ErrorsProps);

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

    const body = {
      discord: data.discord,
      name: data.name,
      useVoiceChannel: data.useVoiceChannel ? true : false,
      weekDays: weekDays.sort(),
      yearsPlaying: data.yearsPlaying && Number(data.yearsPlaying),
    }
    
    const errors = await validationForm({ ...body, game: data.game });

    if(errors) {
      return setErrors(errors);
    };

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
          error={errors.game}
        />
        <Input
          name="name"
          label="Seu nome (ou nickname)"
          placeholder="Como te chamam dentro do game ?"
          error={errors.name}
          onFocus={() => Object.keys(errors).length > 0 && setErrors({})}
        />
        <div className="grid grid-cols-2 gap-6">
          <Input
            name="yearsPlaying"
            label="Joga há quantos anos ?"
            placeholder="Tudo bem ser ZERO"
            error={errors.yearsPlaying}
            onFocus={() => Object.keys(errors).length > 0 && setErrors({})}
          />
          <Input
            name="discord"
            label="Qual seu Discord ?"
            placeholder="Usuário#0000"
            error={errors.discord}
            onFocus={() => Object.keys(errors).length > 0 && setErrors({})}
          />
        </div>
        <div className="space-y-2">
          <label className="block font-semibold">Quando costuma jogar?</label>
          <div className="space-x-1">
            {weekDaysList.map(({ label, title, value }) => (
              <ButtonDate 
                type="button" 
                title={title} 
                onClick={() => {
                  if(Object.keys(errors).length > 0) {
                    setErrors({});
                  }

                  handleWeekDay(value);
                }}
              >
                {label}
              </ButtonDate>
            ))}
          </div>
          <span className='text-red-500 text-sm'>{errors.weekDays}</span>
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