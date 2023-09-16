'use client';

import nookies from 'nookies';
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo,
  ReactNode,
} from 'react';

import { getUser } from '../client';
import { User } from '../types';
import { SECONDS_IN_WEEK } from '../utils/constants';

type AuthContextProps = {
  user: User;
  login: (token: string) => void;
  logout: () => void;
};

const DefaultUser = {
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
  const [user, setUser] = useState<User>(DefaultUser);

  useEffect(() => {
    const fetchData = async () => {
      const { token } = nookies.get();
      if (token) {
        try {
          const userData = await getUser(token);
          setUser(userData);
        } catch (error) {
          nookies.destroy(null, 'token');
        }
      }
    };

    fetchData();
  }, []);

  const login = (newToken: string) => {
    nookies.set(null, 'token', newToken, {
      path: '/',
      maxAge: SECONDS_IN_WEEK,
    });
    getUser(newToken).then(setUser);
  };

  const logout = (): void => {
    nookies.destroy(null, 'token');
    setUser(DefaultUser);
  };

  const value = useMemo(() => ({ user, login, logout }), [user, login, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
