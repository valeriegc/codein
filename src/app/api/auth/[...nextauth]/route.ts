import NextAuth from 'next-auth/next'
import type { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import { prisma } from '../../../../../prisma/prisma'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { credentialSignin } from './credentials'

export const authOptions: NextAuthOptions = {
  debug: true,
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID!,
      clientSecret: process.env.FACEBOOK_SECRET!,
    }),
    credentialSignin,
  ],
}

/**secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: 'jwt', maxAge: 24 * 60 * 60 },

  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 60 * 60 * 24 * 30,
    encryption: true,
  },

  pages: {
    signIn: '/login',
    signOut: '/login',
    error: '/login',
  },

  callbacks: {
    async session(session, user, token) {
      if (user !== null) {
        session.user = user
      }
      return await session
    },

    async jwt({ token, user }) {
      return await token
    },
  },
}

export default (req, res) => NextAuth(req, res, options)**/

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
