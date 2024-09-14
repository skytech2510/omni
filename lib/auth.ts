import { connectDB } from "./mongodb";
import User from "@/models/User";
import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
export const authOptions: NextAuthOptions = {
  secret: process.env['NEXTAUTH_URL'],
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "<EMAIL>" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();
        const email = credentials?.email;
        const password = credentials?.password;
        const user = await User.findOne({ email: email });
        if (!user) throw new Error("Invalid email or password");
        const isMatch =
          typeof password !== "undefined" &&
          (await bcrypt.compare(password, user.password));
        if (isMatch) {
          return user;
        } else throw new Error("Invalid email or password");
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 15, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      session.user = token.user as any;
      return session;
    },
  },
};
