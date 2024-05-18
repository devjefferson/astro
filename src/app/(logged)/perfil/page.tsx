import Perfil from "@/features/Perfil";
import getCurrentUser from "@/services/auth/customer/getCurrentUser";

import { redirect } from "next/navigation";

export default async function Page() {
  const [user] = await Promise.all([await getCurrentUser()]);

  if (!user) {
    redirect("/login");
    return;
  }
  return <Perfil data={user} />;
}
