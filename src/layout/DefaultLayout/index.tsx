import React from 'react';

import { Header, Sidebar } from 'components';

export interface DefaultLayoutProps {
  children: React.ReactNode;
}

export function Default({ children }: DefaultLayoutProps) {
  return(
    <main className="w-full h-screen flex flex-col bg-zinc-900">
      <Header />
      <div className='w-full flex flex-1 overflow-y-auto'>
        <Sidebar />
        <div className='w-full p-16 py-12 flex-1 bg-[#121212] overflow-y-auto'>
          {children}
        </div>
      </div>
    </main>
  );
}