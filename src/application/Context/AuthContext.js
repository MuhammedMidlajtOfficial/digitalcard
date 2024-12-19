import React, { createContext, useState, useEffect, useContext } from 'react';

// Create a context for authentication
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  // State to hold authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  // State to track loading state of the token validation
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log('token-', token);

    if (token) {
      const isValidToken = verifyToken(token);
      setIsAuthenticated(isValidToken);
      console.log('isValidToken-', isValidToken);
    } else {
      setIsAuthenticated(false);
    }

    // After the token validation is complete, set loading to false
    setLoading(false);
  }, []);

  // Function to verify token if needed
  const verifyToken = (token) => {
    try {
      const decoded = JSON.parse(atob(token.split('.')[1])); // Decode JWT payload
      const isExpired = decoded.exp * 1000 < Date.now(); // Check if token is expired
      return !isExpired;
    } catch (error) {
      return false; // Invalid token
    }
  };

  // Log isAuthenticated whenever it changes
  useEffect(() => {
    console.log('isAuthenticated-', isAuthenticated);
  }, [isAuthenticated]);

  if (loading) {
    return <div>Loading...</div>; // You can return a loading spinner or any other loading indicator
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
