import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signOut} from "@/auth"
import { Button } from "../ui/button"
import { Session } from "next-auth" // セッションの型をインポート

export default function Setting({session}: { session: Session}) {
  const handleLogout = async () => {
    "use server";
    await signOut();
  }
  return (
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" className="font-medium">
      {session.user?.name}
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end" className="w-48">
    <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
      ログアウト</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
  )
}
