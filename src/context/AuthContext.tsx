'use client';

import nookies from 'nookies';
import {
  createContext,
  useState,
  useContext,
  useMemo,
  useCallback,
} from 'react';

import { getUser } from '../api/user';
import { User } from '../types/User';
import { SECONDS_IN_WEEK } from '../utils/constants';
import { useEffectAsync } from '../hooks/useEffectAsync';
import { ChildrenFC } from '../utils/type';

type AuthContextProps = {
  user: User;
  isUserLoggedIn: boolean;
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

export const AuthProvider: ChildrenFC = ({ children }) => {
  const [user, setUser] = useState(defaultUser);

  useEffectAsync(async () => {
    const { token } = nookies.get();

    if (!token) {
      return;
    }

    const userData = await getUser(() => {
      nookies.destroy(null, 'token');
    });

    if (userData) {
      setUser(userData);
    }
  }, []);

  const login = useCallback(async (newToken: string) => {
    nookies.set(null, 'token', newToken, {
      path: '/',
      maxAge: SECONDS_IN_WEEK,
    });

    const userData = await getUser();

    if (userData) {
      setUser(userData);
    }
  }, []);

  const logout = useCallback(() => {
    nookies.destroy(null, 'token');

    setUser(defaultUser);
  }, []);

  const isUserLoggedIn = user.id !== -1;

  const value = useMemo(
    () => ({ user, isUserLoggedIn, login, logout }),
    [user, isUserLoggedIn, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
