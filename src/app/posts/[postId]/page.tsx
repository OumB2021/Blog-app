"use client";

import { useParams } from "next/navigation";

const Post = async () => {
  const param = useParams();
  const apiResponse = await fetch(
    `https://dummyjson.com/posts/${param.postId}`
  );
  const data = await apiResponse.json();

  return (
    <main className="flex flex-col justify-center items-center pt-24">
      <h1 className="font-bold text-5xl pb-10">{data.title}</h1>
      <p className="max-w-[750px] mx-auto">{data.body}</p>
    </main>
  );
};

export default Post;
