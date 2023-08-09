import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { authUser, getUser } from '../../client';

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        try {
          const resp = await authUser(email, password);
          if (!resp.token) {
            return null;
          }

          const user = await getUser(resp.token);
          if (!user) {
            return null;
          }

          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
