'use client';

import {
  createContext,
  useState,
  useContext,
  useMemo,
  useCallback,
} from 'react';
import nookies from 'nookies';

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

// comment

const emptyUser = {
  id: '',
  name: '',
  email: '',
  rating: 0,
};

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider: ChildrenFC = ({ children }) => {
  const [user, setUser] = useState(emptyUser);

  useEffectAsync(async () => {
    try {
      const { token } = nookies.get();

      if (!token) {
        return;
      }

      const userData = await getUser();
      if (userData) {
        setUser(userData);
      }
    } catch (error) {
      nookies.destroy(null, 'token');
      setUser(emptyUser);
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
    nookies.destroy(null, 'token', {
      path: '/',
    });

    setUser(emptyUser);
  }, []);

  const isUserLoggedIn = user.id !== '';

  const value = useMemo(
    () => ({ user, isUserLoggedIn, login, logout }),
    [user, isUserLoggedIn, login, logout],
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
