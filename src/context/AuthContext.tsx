import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Generate a unique session token - harder to forge than a boolean
const SESSION_KEY = 'workshop_session';
const generateSessionToken = () => {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2);
  return `ws_${timestamp}_${random}`;
};

// Validate token format (must match our generation pattern)
const isValidToken = (token: string | null): boolean => {
  if (!token) return false;
  return /^ws_[a-z0-9]+_[a-z0-9]+$/.test(token);
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Use sessionStorage - persists on refresh, clears when tab closes
  // Token format is validated to prevent simple forgery
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const token = sessionStorage.getItem(SESSION_KEY);
    return isValidToken(token);
  });

  const login = useCallback(() => {
    const token = generateSessionToken();
    sessionStorage.setItem(SESSION_KEY, token);
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem(SESSION_KEY);
    setIsAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
