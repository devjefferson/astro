import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import getCurrentUser from "./customer/getCurrentUser";
import getMe from "./customer/getMe";
import signIn from "./customer/signIn";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "E-mail", type: "email", value: "" },
        password: { label: "Password", type: "password", value: "" },
      },
      async authorize(credentials) {
        try {
          const login = await signIn({
            email: credentials?.email || "",
            password: credentials?.password || "",
          });

          if (login?.ok) {
            const { token } = login;
            const user = await getMe(token);

            if (user) return user;
          }

          return null;
        } catch (error) {
          return null;
        }
      },
    }),
    CredentialsProvider({
      id: "refresh-user",
      name: "refresh-user",
      credentials: {},
      async authorize() {
        try {
          const user = (await getCurrentUser()) as any;

          const me = await getMe(user?.token || "");
          if (me) return me;
          return null;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 1, // 1 day
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      const blackList = ["iat", "exp", "jti"];
      const sanitizedToken = Object.keys(token).reduce(
        (response, item) => {
          if (!blackList.includes(item)) {
            response[item] = token[item];
            return response;
          }
          return response;
        },
        {} as Record<string, any>,
      );
      return { ...session, user: sanitizedToken };
    },
    async jwt({ token, user }) {
      return (user as any) || token;
    },
  },
};

export default authOptions;
