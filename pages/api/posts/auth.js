import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const options = {
  Credentialsproviders: [
    CredentialsProviders.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
};

module.exports = (req, res) => NextAuth(req, res, options);
