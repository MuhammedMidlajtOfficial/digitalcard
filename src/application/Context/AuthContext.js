import React, { createContext, useState, useEffect, useContext } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(true);

  const verifyToken = (token) => {
    try {
      const decoded = jwtDecode(token);

      return decoded.exp ? decoded.exp * 1000 > Date.now() : true;
    } catch (error) {
      console.error("Invalid Token:", error);
      return false;
    }
  };

  const syncAuthState = () => {
    const token = sessionStorage.getItem("token");

    if (token) {
      const isValidToken = verifyToken(token);
      setIsAuthenticated(isValidToken);
      
      if (isValidToken) {
        const decoded = jwtDecode(token);
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
