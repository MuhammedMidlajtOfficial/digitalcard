import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './Context/AuthContext';


const PrivateRoute = ({ element: Element, requiredPermission }) => {
  const { isAuthenticated, permissions } = useAuth();

  const hasPermission = requiredPermission
    ? permissions.includes(requiredPermission)
    : true;

  if (!isAuthenticated) {
    // Navigate to login if not authenticated
    return <Navigate to="/login" replace />;
  }

  if (!hasPermission) {
    // Navigate to Unauthorized page if permission is not sufficient
    return <Navigate to="/admin/Unauthorized" replace />;
  }

  // Render the component if authenticated and has permission
  return <Element />;
};

export default PrivateRoute;
