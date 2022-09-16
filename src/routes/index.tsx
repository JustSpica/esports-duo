import { Routes as Router, Route, RouteProps } from 'react-router-dom';

import { Home, Login } from 'pages';

import { AuthenticationPage, AuthenticationLogin } from './auth';

interface RouteListProps extends RouteProps {
  routename: string;
}

const routesList: RouteListProps[] = [
  {
    routename: 'Home',
    path: '/',
    element: (
      <AuthenticationPage>
        <Home />
      </AuthenticationPage>
    ),
  },
  {
    routename: 'Login',
    path: '/login',
    element: (
      <AuthenticationLogin>
        <Login />
      </AuthenticationLogin>
    ),
  },
];

export function Routes() {
  return (
    <Router>
      {routesList.map(({ routename, ...props }) => (
        <Route key={routename} {...props} />
      ))}
    </Router>
  );
}
