import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import User from "@/models/user";
import connectDB from "@/db/connectDB";


export const authOptions = NextAuth({

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })

  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // const isAllowedToSignIn = true
      if (account.provider === "github" || account.provider === "google") {
        await connectDB();

        //check if person is in the database
        //  const curretUser = await client.db("users").collection("users").findOne({email: user.email});
        const curretUser = await User.findOne({ email: email });
        if (!curretUser) {
          //create a new user
          const newUser = await User.create({ 
            email: user.email,
            UserName: user.email.split("@")[0],
            Profile_PIC: null,
            Cover_PIC: null,
            Razorpay_ID: null,
            Razorpay_SECRET: null,
          })

        }

        return true;
      }
    },
    async session({ session, user, token }) {
      const dbUser = await User.findOne({ email: session.user.email })
      console.log(dbUser);
      session.user.name = dbUser.UserName
      return session
    },
    // async signIn({ account, profile }) {
    //   if (account.provider === "google") {
    //     return profile.email_verified && profile.email.endsWith("@gmail.com")
    //   }
    //   return true // Do different verification for other providers that don't have `email_verified`
    // },
  }
})


export { authOptions as GET, authOptions as POST }