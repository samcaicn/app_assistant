import { authOptions } from "@cs-magic/next-auth/dist/next-auth.options.js"
import NextAuth from "next-auth"

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
