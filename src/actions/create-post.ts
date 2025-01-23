"use server";

import prisma from "@/lib/db";
import { redirect } from "next/navigation";

export const CreatePostAction = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;
  await prisma.post.create({
    data: {
      title,
      body,
    },
  });
  redirect("/posts");
};
