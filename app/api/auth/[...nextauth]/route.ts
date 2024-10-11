import { authOptions } from "@/lib/auth"
import NextAuth from "next-auth"

//Cada provider funciona de um jeito diferente
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
