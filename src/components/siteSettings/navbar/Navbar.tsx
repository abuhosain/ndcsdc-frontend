import { getUserFromCookie } from "@/services/auth";
import NavbarClient from "./NavbarClient";

export default async function Navbar() {
  const user = await getUserFromCookie();
  return <NavbarClient user={user} />;
}
