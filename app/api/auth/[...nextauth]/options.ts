import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions } from 'next-auth';
import { compare } from 'bcryptjs';
import { prisma } from '@/lib/prisma';

export const authOptions: NextAuthOptions = {
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          username: { label: 'Username', type: 'text' },
          password: { label: 'Password', type: 'password' },
        },
        async authorize(credentials): Promise<any> {
          const user = await prisma.admin.findUnique({
            where: {
              username: credentials?.username
            }
          });
  
          if(user){
            if (credentials?.username === user.username && await compare(credentials?.password, user?.password)) {
              return user;
            }
          }   
          return null;
        },
      }),
    ],
    session: {
      strategy: 'jwt',
    },
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.id = user.id;
        }
        return token;
      },
  
      async session({ session, token } : {
          session: any,
          token: any
      }) {
        session.user.id = token.id;
        return session;
      },
    },
    secret: process.env.NEXTAUTH_SECRET,
  };