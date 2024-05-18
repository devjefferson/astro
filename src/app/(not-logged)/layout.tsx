import { redirect } from "next/navigation";

import getCurrentUser from "@/services/auth/customer/getCurrentUser";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();

  if (user) redirect("/perfil");

  return <div>{children}</div>;
}
