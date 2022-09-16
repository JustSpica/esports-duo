import * as DialogRadix from '@radix-ui/react-dialog';
import { Button, Input } from 'components';
import { GameController } from 'phosphor-react';
import buttonMock from './buttonMock';

import { ButtonDate } from './components/ButtonDate';

export function AdForm() {
  return(
    <form className='w-[480px] mt-8'>
      <main className='space-y-4'>
        <Input 
          label='Qual o game ?' 
          placeholder='Selecione o game que deseja jogar'
        />
        <Input 
          label='Seu nome (ou nickname)' 
          placeholder='Como te chamam dentro do game ?'
        />
        <div className='grid grid-cols-2 gap-6'>
          <Input 
            label='Joga há quantos anos ?' 
            placeholder='Tudo bem ser ZERO'
          />
          <Input 
            label='Qual seu Discord ?' 
            placeholder='Usuário#0000'
          />
        </div>
        <div className='space-y-2'>
          <label className='block font-semibold'>Quando costuma jogar?</label>
          <div className='space-x-1'>
            {buttonMock.map(item => (
              <ButtonDate type='button' title={item.title}>
                {item.label}
              </ButtonDate>
            ))}
          </div>
        </div>
      </main>
      <footer className='w-full mt-8 flex items-center justify-end space-x-4'>
        <DialogRadix.Close 
          type='button'
          className='px-5 py-3 rounded-md bg-zinc-500 hover:bg-zinc-600 transition-colors'
        >
          Cancelar
        </DialogRadix.Close>
        <Button type='submit'>
          <GameController />
          Encontrar Duo
        </Button>
      </footer>
    </form>
  );
}