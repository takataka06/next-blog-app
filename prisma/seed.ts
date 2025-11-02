import { PrismaClient } from "@prisma/client";

import * as bcrypt from 'bcryptjs';
// Prisma Clientのインスタンスを作成
const prisma = new PrismaClient();

async function main() {
  // クリーンアップ
  await prisma.user.deleteMany();
  await prisma.post.deleteMany();

  const hashedPassword = await bcrypt.hash('password123', 10);

  // ダミー画像のURL
  const dummyImages = [
    'https://picsum.photos/seed/post1/600/400',
    'https://picsum.photos/seed/post2/600/400',
  ]

  const user = await prisma.user.create({
    data: {
      email: "test@example.com",
      name: "Test User",
      password: hashedPassword,
      posts: {
        create: [
          {
            title: "初めての投稿",
            content: "これは私の最初のブログ投稿です！",
            published: true,
            topImage: dummyImages[0],
          },
          {
            title: "2の投稿",
            content: "これは私の2のブログ投稿です!",
            published: true,
            topImage: dummyImages[1],
          }
        ],
      },
    },
  });

  console.log({ user });
}
// 
main()
// メイン内で発生したエラーをキャッチしてログに出力
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
// エラーの有無にかかわらずPrisma Clientの接続を切断
  .finally(async () => {
    await prisma.$disconnect();
  });