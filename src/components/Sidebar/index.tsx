import { NavLink } from 'react-router-dom';
import { MagnifyingGlassPlus } from 'phosphor-react';
import classNames from 'classnames';

import { Avatar, Button } from 'components';

import { useAuth } from 'hooks/useAuth';

import mock from './mock';

export function Sidebar() {
  const { data } = useAuth();

  const imageURL = `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}`;

  return (
    <div className="h-full px-8 py-8 bg-zinc-900 border-r border-r-zinc-800 relative">
      <header className="w-full flex space-x-4">
        <Avatar image={imageURL} size="md" />
        <div className="flex flex-col flex-1 justify-center">
          <span className="text-sm text-zinc-300">Bem vindo,</span>
          <strong>{data.username}</strong>
        </div>
      </header>
      <div className="mt-8 space-y-2">
        {mock.map((item) => (
          <NavLink
            className={({ isActive }) =>
              classNames(
                "w-64 px-2 py-3 flex items-center space-x-2 rounded-lg cursor-pointer hover:bg-zinc-800 transition-colors", {
                  'text-violet-500': isActive
                }
              )
            }
            to={item.href}
          >
            {item.icon}
            <span>{item.text}</span>
          </NavLink>
        ))}
      </div>
      <div className="w-full px-8 py-8 absolute right-0 bottom-0">
        <Button className="w-full justify-center">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Button>
      </div>
    </div>
  );
}