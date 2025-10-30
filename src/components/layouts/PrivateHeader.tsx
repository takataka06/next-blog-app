import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { auth} from "@/auth";
import Setting from "./Setting";

export default async function PrivateHeader() {
  const session = await auth()
  if (!session?.user?.email) throw new Error("Unauthorized");
  return (
    <header className="border-b bg-blue-200">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/dashboard" className="font-bold text-xl">
                  管理ページ
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Setting session={session}/>
      </div>
    </header>
  )
}
