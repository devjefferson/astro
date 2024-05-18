export type TSignIn = {
  email: string;
  password: string;
};

export default async function signIn({
  password,
  email,
}: TSignIn): Promise<{ token: string; ok: boolean } | undefined> {
  try {
    if (email === "t@t.com" && password === "123456") {
      return {
        token: "12345689",
        ok: true,
      };
    }
  } catch (error) {
    return undefined;
  }
}
