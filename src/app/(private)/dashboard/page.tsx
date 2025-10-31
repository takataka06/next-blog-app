import { auth } from "@/auth";
import { getOwnPost } from "@/lib/ownPost";

export default async function DashboardPage() {
  const session = await auth()
  const userId = session?.user?.id
  if (!session?.user?.email || !userId){
    throw new Error("不正なリクエスト")
  }
  const posts = await getOwnPost(userId)

  return (
    <>
    
    </>
  )
}
