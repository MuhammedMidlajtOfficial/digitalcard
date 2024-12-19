import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './Context/AuthContext';

const PrivateRoute = ({ element: Element }) => {
  const { isAuthenticated } = useAuth();
  console.log('isAuthenticated-',isAuthenticated);
  // Render the component if authenticated; otherwise, navigate to login
  return isAuthenticated ? <Element /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
