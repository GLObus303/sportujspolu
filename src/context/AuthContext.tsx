'use client';

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react';

import { getUser } from '../client';
import { User } from '../types';

type AuthContextProps = {
  user: User | null;
  login: (token: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined,
);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const getCookie = (name: string): string | null => {
    if (typeof document === 'undefined') {
      return null;
    }

    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);

    return parts.length === 2 ? parts?.pop()?.split(';')?.[0] || null : null;
  };

  const setCookie = (name: string, value: string, days = 7): void => {
    if (typeof document === 'undefined') {
      return;
    }
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `; expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}${expires}; path=/; Secure; HttpOnly`;
  };

  const deleteCookie = (name: string): void => setCookie(name, '', -1);

  useEffect(() => {
    const token = getCookie('token');
    if (token) {
      getUser(token)
        .then(setUser)
        .catch(() => deleteCookie('token'));
    }
  }, []);

  const login = (newToken: string): void => {
    setCookie('token', newToken);
    getUser(newToken).then(setUser);
  };

  const logout = (): void => {
    deleteCookie('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
