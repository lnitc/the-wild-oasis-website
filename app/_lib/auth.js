import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getGuest } from "@/app/_lib/data-service";

const authConfig = {
  providers: [
    Credentials({
      authorize: (credentials) => {
        const testAccounts = [
          {
            email: process.env.USER1_EMAIL,
            password: process.env.USER1_PASSWORD,
          },
          {
            email: process.env.USER2_EMAIL,
            password: process.env.USER2_PASSWORD,
          },
        ];
        const testAccount = testAccounts.find((account) => {
          return (
            account.email === credentials.email &&
            account.password === credentials.password
          );
        });
        if (testAccount) {
          return testAccount;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },

    async jwt({ token, user }) {
      if (user) {
        const guest = await getGuest(user.email);
        token.id = guest.id;
        token.fullName = guest.fullName;
      }
      return token;
    },

    // async session({ session, user }) {
    //   const guest = await getGuest(session.user.email);
    //   session.user.guestId = guest.id;
    //   session.user.fullName = guest.fullName;
    //   return session;
    // },

    async session({ session, token }) {
      if (token) {
        session.user.guestId = token.id;
        session.user.fullName = token.fullName;
      }
      return session;
    },
  },
  trustHost: true,
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,

  handlers: { GET, POST },
} = NextAuth(authConfig);
