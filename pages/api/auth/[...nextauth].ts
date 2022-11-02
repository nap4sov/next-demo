import NextAuth from 'next-auth/next';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

const { GITHUB_ID, GITHUB_SECRET, GOOGLE_ID, GOOGLE_SECRET } = process.env;

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: GITHUB_ID as string,
      clientSecret: GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: GOOGLE_ID as string,
      clientSecret: GOOGLE_SECRET as string,
    }),
  ],
});
