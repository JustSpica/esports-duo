import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from 'contexts/AuthContext';
import { GamesProvider } from 'contexts/GamesContext';
import { AdProvider } from 'contexts/AdContext';

import { Routes } from 'routes';

import './styles/main.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <GamesProvider>
          <AdProvider>
            <Routes />
          </AdProvider>
        </GamesProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
