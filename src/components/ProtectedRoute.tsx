import React, { ReactNode } from 'react';
import { useAuth } from '../context/AuthContext';
import { Login } from './login';

interface ProtectedRouteProps {
  children: ReactNode;
  passwordHash: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  passwordHash
}) => {
  const { isAuthenticated, login } = useAuth();

  if (!isAuthenticated) {
    return <Login onSuccess={login} passwordHash={passwordHash} />;
  }

  return <>{children}</>;
};
