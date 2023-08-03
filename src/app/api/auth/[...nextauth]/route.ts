import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { AuthOptions } from 'next-auth';
import ky from 'ky';

type User = {
  id: string;
  email: string;
};

type Resp = {
  token: string;
};

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        try {
          const response = await ky.post(
            'https://sportujspolu-api.onrender.com/api/v1/user/login',
            {
              json: {
                email,
                password,
              },
            },
          );

          if (response.status !== 200) {
            return null;
          }

          const resp: Resp = await response.json();

          const userResponse = await ky.get(
            'https://sportujspolu-api.onrender.com/api/v1/user/me',
            {
              headers: {
                Authorization: `Bearer ${resp.token}`,
              },
            },
          );

          if (userResponse.status !== 200) {
            return null;
          }

          const user: User = await userResponse.json();

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
