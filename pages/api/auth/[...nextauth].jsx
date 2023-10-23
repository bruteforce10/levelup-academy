import { getUser, signUpWithGoogle } from "@/lib/service";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        const user = await getUser(credentials);
        console.log(user);
        if (user) {
          if (credentials.password === user.password) {
            return user;
          }
          return null;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || " ",
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile, user }) {
      if (account?.provider === "credentials") {
        token.email = user.email;
        token.name = user.name;
        token.role = user.role;
      }

      if (account?.provider === "google") {
        const data = {
          name: user.name,
          email: user.email,
          image: user.image,
          type: "google",
        };
        const dataGoogle = await signUpWithGoogle(data);
        token.email = dataGoogle.email;
        token.name = dataGoogle.name;
        token.type = dataGoogle.type;
        token.image = dataGoogle.image;
      }
      return token;
    },
    async session({ session, token }) {
      console.log(session, token);
      if ("email" in token) {
        session.user.email = token.email;
      }
      if ("name" in token) {
        session.user.name = token.name;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};

export default NextAuth(authOptions);
