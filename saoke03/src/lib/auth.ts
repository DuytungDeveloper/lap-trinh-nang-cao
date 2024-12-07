import client from "@/lib/db";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: AuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID || '',
            clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
        }),
    ],
    session: {
        strategy: "jwt", // Use JWT for sessions
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            (session.user as any).id = token.id;
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET, // Use a random string for this
    adapter: MongoDBAdapter(client),


    // callbacks: {
    //     async redirect({ url, baseUrl }) {
    //         return baseUrl
    //     },
    // }
};
