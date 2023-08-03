import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import ky from 'ky';

type User = {
  id: string;
  name: string;
};

type APIResponse = {
  name: string;
  email: string;
};

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        try {
          const response = await ky.post(
            'https://sportujspolu-api.onrender.com/api/v1/users/login',
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

          const apiUser: APIResponse = await response.json();

          const user: User = {
            id: apiUser.email,
            name: apiUser.name,
          };

          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
