import { Navigate } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth';

export interface AuthenticationPageProps {
  children: JSX.Element;
}

export function AuthenticationPage({ children }: AuthenticationPageProps) {
  const { token } = useAuth();

  return !token ? <Navigate to="/login" /> : children;
}

export function AuthenticationLogin({ children }: AuthenticationPageProps) {
  const { token } = useAuth();

  return token ? <Navigate to="/" /> : children;
}
