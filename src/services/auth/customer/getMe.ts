import { User } from "next-auth";

export default async function getMe(token: string): Promise<User | undefined> {
  try {
    if (token === "12345689") {
      const user = {
        id: "154879",
        fullName: "Jefferson da fonseca martins",
        email: "drpcscan@gmail.com",
        token,
      };
      return {
        ...user,
      };
    }
  } catch (error) {
    return undefined;
  }
}
