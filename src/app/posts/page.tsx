import { PostList } from "@/app/posts/_components/post-list";
import Link from "next/link";
import { Suspense } from "react";
import PostLoading from "./post-loading";

const Posts = async () => {
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="font-bold text-4xl md:text-5xl mb-5 ">All posts</h1>
      <Suspense fallback={<PostLoading />}>
        <PostList />
      </Suspense>
    </main>
  );
};

export default Posts;
