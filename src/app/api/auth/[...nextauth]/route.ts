import NextAuth, { NextAuthOptions } from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import { JWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
      authorization: {
        params: {
          redirect_uri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI,
          response_type: "code",
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
  callbacks: {
    async jwt({ token, account }: { token: JWT; account?: any }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: JWT }) {
      session.accessToken = token.accessToken as string;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
