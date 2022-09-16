import React, { createContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { discordAuthentication } from 'services/auth';

interface AuthStoraged {
  token: string;
  tokenType: string;
}

interface UserDataDiscord {
  avatar: string;
  discriminator: string;
  email: string;
  id: string;
  locale: string;
  username: string;
  verified: boolean;
}

interface AuthContext {
  data: UserDataDiscord
  token: string | null;
}

interface AuthProvider {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContext);

export function AuthProvider({ children }: AuthProvider) {
  const [data, setData] = useState({} as UserDataDiscord);

  const auth: AuthStoraged = JSON.parse(localStorage.getItem('auth') || '{}');

  const params = new URLSearchParams(window.location.hash.slice(1));

  const [token, tokenType] = [
    params.get('access_token') || auth.token,
    params.get('token_type') || auth.tokenType,
  ];

  if(token) {
    localStorage.setItem('auth', JSON.stringify({ token, tokenType }));
  }

  useEffect(() => {
    (async () => {
      if (token && tokenType) {
        const { data } = await discordAuthentication({
          token,
          tokenType,
        });

        setData(data);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ data, token }}>{children}</AuthContext.Provider>
  );
}
