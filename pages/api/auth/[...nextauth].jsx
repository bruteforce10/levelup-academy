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
      console.log(user);
      if (account?.provider === "credentials") {
        token.email = user.email;
        token.name = user.name;
        token.role = user.role;
        token.goals = user.goals;
        token.image = user?.gambar?.url;
      }

      if (account?.provider === "google") {
        console.log(user);
        const data = {
          name: user.name,
          email: user.email,
          gambar: user.image,
          type: "google",
        };
        console.log(data);

        const dataGoogle = await signUpWithGoogle(data);
        console.log(dataGoogle);
        token.email = dataGoogle.email;
        token.name = dataGoogle.name;
        token.type = dataGoogle.type;
        token.image = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      console.log(token, session);
      if ("email" in token) {
        session.user.email = token.email;
      }
      if ("name" in token) {
        session.user.name = token.name;
      }
      if ("image" in token) {
        session.user.image = token.image;
      }
      if ("goals" in token) {
        session.user.goals = token.goals;
      }
      if ("role" in token) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};

export default NextAuth(authOptions);
