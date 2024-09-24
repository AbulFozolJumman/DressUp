// next-auth.d.ts
import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user: {
      id?: string;
      email: string;
      username: string;
      imageUrl: string;
      role: string; // Added role
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    accessToken?: string;
    id?: string;
    role?: string; // Added role
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    id?: string;
    email?: string; // Added email
    role?: string; // Added role
  }
}
