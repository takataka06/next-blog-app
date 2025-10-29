import { prisma } from "@/lib/prisma";

export async function getPosts() {
  return await prisma.post.findMany({
    where: { published: true },
    include: {
      author: { select: { name: true}}
    },
    orderBy: { createdAt: "desc" },
  })
}

export async function getPost(id: string) {
  return await prisma.post.findUnique({
    where: {id},
    include: {
      author: {
        select: {name: true}
      }
    }
  })
}

export async function searchPosts(search:string) {
  // でコード化された検索クエリをデコード
  const decodedSearch = decodeURIComponent(search)
  // 全角スペースを半角スペースに変換し、前後の空白をとり除く
  const normalizedSearch = decodedSearch.replace(/[\s　]/g, ' ').trim()
  // 検索語をスペースで分割
  const searchWords = normalizedSearch.split(' ').filter(Boolean)

  const filters = searchWords.map((word) => ({
    OR : [
      { title: { contains: word }},
      { content: { contains: word }},
    ]
  }))
  return await prisma.post.findMany({
    where: {
      AND: filters,
    },
    include: {
      author: {
        select: {name: true}
      }
    },
    orderBy: { createdAt: "desc" },
  })

}