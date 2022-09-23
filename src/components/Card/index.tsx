import * as DialogPrimitive from '@radix-ui/react-dialog';
import { GameController, CheckCircle, X } from 'phosphor-react';
import classNames from 'classnames';


import { Button, Dialog } from 'components';

import { convertToWeekDays } from 'utils/convertToWeekDays';

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
          <div>
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
        <DialogPrimitive.Root>
          <DialogPrimitive.Trigger asChild>
            <Button className="w-full justify-center">
              <GameController />
              Conectar
            </Button>
          </DialogPrimitive.Trigger>
          <Dialog>
            <div className="min-w-[320px] relative text-center">
              <DialogPrimitive.Close>
                <X
                  className="absolute -top-1 right-0 text-zinc-400"
                  size={24}
                />
              </DialogPrimitive.Close>
              <CheckCircle className="mx-auto text-emerald-400" size={96} />
              <strong className="block mt-6 text-2xl">Let's play</strong>
              <span className="block text-zinc-400">
                Agora é só começar a jogar!
              </span>
              <p className="block mt-6 font-semibold">Adicione no Discord</p>
              <span className="w-full mt-2 py-3 block rounded bg-zinc-900">
                {props.discord}
              </span>
            </div>
          </Dialog>
        </DialogPrimitive.Root>
      </div>
    </div>
  );
}