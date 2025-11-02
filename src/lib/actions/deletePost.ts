"use server";

import { redirect } from "next/dist/server/api-utils";
import { prisma } from "@/lib/prisma";

type ActionState = {
  success: boolean,
  errors: Record<string, string[]>,
}

export async function deletePost(postId: string): Promise<ActionState> {
  try {
    await prisma.post.delete({ where: { id: postId } });
    return { success: true, errors: {} };
  } catch (error) {
    return { success: false, errors: { general: ["削除に失敗しました"] } };
  }
}
