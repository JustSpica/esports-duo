import { Routes as Router, Route, RouteProps } from 'react-router-dom';

import { Home } from 'pages'

interface RouteListProps extends RouteProps {
  routename: string;
}

const routesList: RouteListProps[] = [
  {
    routename: 'Home',
    path: '/',
    element: <Home />
  }
];

export function Routes() {
  return(
    <Router>
      {routesList.map(({ routename, ...props }) => (
        <Route key={routename} {...props} />
      ))}
    </Router>
  )
}