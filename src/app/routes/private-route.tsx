import React, { FC } from 'react';

import { useAppSelector } from '../store';
import { Navigate } from 'react-router-dom';

// import { useAuth } from '../hooks/useAuth';

interface IPrivateRouteProps {
  children: React.ReactElement;
}

const PrivateRoute: FC<IPrivateRouteProps> = ({ children }) => {
  const { authorized } = useAppSelector((state) => state.authData);

  return authorized ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
