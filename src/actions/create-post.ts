"use server";

export const CreatePostAction = async (formData: FormData) => {
  const title = formData.get("title") as string;
  console.log(title);
};
