import * as React from 'react';
import {
    Route,
    RouteProps,
} from 'react-router-dom';
import LoginPage from '../../pages/login/LoginPage';
import Navbar from '../components/Navbar/Navbar';

interface PrivateRouteProps extends RouteProps {
    component: React.FunctionComponent | React.ComponentClass;
    isLoged: boolean;
    path: string
}

const PrivateRoute = ({component, isLoged, path}: PrivateRouteProps) => {
  return (
    <>
      {isLoged ? (
        <>
          <Navbar />
          <Route path={path} component={component}/>
        </>
      ) : (
        <>
          <Route path='/' component={LoginPage}/>
        </>)
      }
    </>
  );
};

export default PrivateRoute;