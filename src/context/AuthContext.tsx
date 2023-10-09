'use client';

import nookies from 'nookies';
import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  useCallback,
  ReactNode,
} from 'react';

import { getUser } from '../api/user';
import { User } from '../types';
import { SECONDS_IN_WEEK } from '../utils/constants';
import { useEffectAsync } from '../hooks/useEffectAsync';

type AuthContextProps = {
  user: User;
  login: (token: string) => void;
  logout: () => void;
};

const defaultUser = {
  id: -1,
  name: '',
  email: '',
  rating: 0,
};

export const AuthContext = createContext<AuthContextProps | null>(null);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState(defaultUser);

  useEffectAsync(async () => {
    const { token } = nookies.get();

    if (!token) {
      return;
    }

    try {
      const userData = await getUser(token);
      setUser(userData);
    } catch (error) {
      nookies.destroy(null, 'token');
    }
  }, []);

  const login = useCallback((newToken: string) => {
    nookies.set(null, 'token', newToken, {
      path: '/',
      maxAge: SECONDS_IN_WEEK,
    });
    getUser(newToken).then(setUser);
  }, []);

  const logout = useCallback(() => {
    nookies.destroy(null, 'token');
    setUser(defaultUser);
  }, []);

  const value = useMemo(() => ({ user, login, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
