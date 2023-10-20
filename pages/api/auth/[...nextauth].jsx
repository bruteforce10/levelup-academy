import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
        const { email, password } = credentials;
        const user = {
          id: 1,
          email: email,
          password: password,
        };
        console.log(user);
        if (user) {
          console.log(user);
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    jwt({ token, account, profile, user }) {
      if (account) {
        token.email = user.email;
      }
      return token;
    },
    // async session({ session, token }) {
    //   if ("email" in token) {
    //     session.user.email = token.email;
    //   }
    //   return session;
    // },
  },
};

export default NextAuth(authOptions);
