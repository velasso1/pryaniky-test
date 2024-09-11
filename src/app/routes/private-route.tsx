import React, { FC } from 'react';

import { Navigate } from 'react-router-dom';

interface IPrivateRouteProps {
  children: React.ReactElement;
  fakeAuth?: boolean;
}

const PrivateRoute: FC<IPrivateRouteProps> = ({ children, fakeAuth }) => {
  return fakeAuth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
