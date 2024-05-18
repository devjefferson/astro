import { getServerSession } from "next-auth";
import authOptions from "../option";

export default async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  return session?.user;
}
