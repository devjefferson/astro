import getCurrentUser from "@/services/auth/customer/getCurrentUser";
import { redirect } from "next/navigation";

export default async function Page({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();

  if (!user) redirect("/login");

  return <>{children}</>;
}
