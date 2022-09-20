import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from 'contexts/AuthContext';
import { GamesProvider } from 'contexts/GamesContext';

import { Routes } from 'routes';

import './styles/main.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <GamesProvider>
          <Routes />
        </GamesProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
