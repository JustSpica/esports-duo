import React from 'react';
import classNames from 'classnames';
import { GameController } from 'phosphor-react';

import { Button} from 'components';

import { convertToWeekDays } from 'utils/convertToWeekDays';

import { DialogSuccess } from './components/DialogSuccess';

import labelTextMock from './labelTextMock';

export interface AdCardProps {
  availability: string[];
  discord: string;
  game?: string;
  isAudioAvailable: boolean;
  name: string;
  timeGameplay: number;
}

export function Card(props: AdCardProps) {
  const weekDays = convertToWeekDays(props.availability).map(
    (day) => day.initial
  );

  return (
    <div className="w-full max-w-xs pt-1 bg-arcoGradient rounded-lg">
      <div className="w-full py-6 px-8 bg-[#2A2634] rounded-md space-y-4">
        {labelTextMock.map(({ label, value }) => (
          <div key={label}>
            <span className="block text-zinc-300">{label}</span>
            <strong className="text-white">{props[value]}</strong>
          </div>
        ))}
        <div>
          <span className="block text-zinc-300">Disponibilidade</span>
          <strong className="text-white">
            {weekDays.length === 7 ? 'Todos os dias' : weekDays.join("-")}
          </strong>
        </div>
        <div>
          <span className="block text-zinc-300">Chamada de áudio ?</span>
          <strong
            className={classNames("text-red-500", {
              "text-emerald-400": props.isAudioAvailable,
            })}
          >
            {props.isAudioAvailable ? "Sim" : "Não"}
          </strong>
        </div>
        <DialogSuccess discord={props.discord}>
          <Button className="w-full justify-center">
            <GameController />
            Conectar
          </Button>
        </DialogSuccess>
      </div>
    </div>
  );
}