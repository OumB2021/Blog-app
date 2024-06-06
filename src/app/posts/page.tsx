import { PostList } from "@/components/post-list";
import Link from "next/link";
import { Suspense } from "react";

const Posts = async () => {
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="font-bold text-4xl md:text-5xl mb-5 ">All posts</h1>
      <Suspense fallback="Loading...">
        <PostList />
      </Suspense>
    </main>
  );
};

export default Posts;
