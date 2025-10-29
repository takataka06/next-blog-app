import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "../ui/button";
import SearchBox from "../post/SearchBox";

export default function PublicHeader() {
  return (
    <div>
      <header className="border-b bg-blue-200 ">
        <div className="container mx-auto flex px-4 py-4 items-center justify-between">
          <NavigationMenu>
          <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/dashboard" className="font-bold text-xl"> 管理ページ </Link> 
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-4">
            <SearchBox />
            <Button variant="outline" asChild>
              <Link href="/login">
              ログイん
              </Link>
            </Button>
            <Button asChild>
              <Link href="/register">
              会員登録
              </Link>
            </Button>
          </div>
        </div>
      </header>
    </div>
  )
}
