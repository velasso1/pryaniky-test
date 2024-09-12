import React, { FC } from 'react';

import { Navigate } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

interface IPrivateRouteProps {
  children: React.ReactElement;
}

const PrivateRoute: FC<IPrivateRouteProps> = ({ children }) => {
  const userIsAuth = useAuth();

  return userIsAuth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
