import React, { createContext, useState, useEffect, useContext } from 'react';

// Create a context for authentication
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(true);

  const verifyToken = (token) => {
    try {
      const decoded = JSON.parse(atob(token.split('.')[1]));
      return decoded.exp * 1000 > Date.now();
    } catch (error) {
      return false;
    }
  };

  const syncAuthState = () => {
    const token = localStorage.getItem("token");
    if (token) {

      const isValidToken = verifyToken(token);
      setIsAuthenticated(isValidToken);

      if (isValidToken) {
        const decoded = JSON.parse(atob(token.split('.')[1]));
        setPermissions(decoded.category || []);
      } else {
        setPermissions([]);
      }
    } else {
      setIsAuthenticated(false);
      setPermissions([]);
    }
  };

  useEffect(() => {
    syncAuthState();
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, permissions, syncAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
