import { PostList } from "@/app/posts/_components/post-list";
import Link from "next/link";
import { Suspense } from "react";
import PostLoading from "./post-loading";

const Posts = async () => {
  return (
    <main className="pt-16 px-5">
      <div className="flex flex-col ">
        <h1 className="font-semibold text-4xl md:text-5xl  ">Articles</h1>
        <p className="text-center md:text-left text-sm text-gray-500 font-light">
          This is a list of all the posts published
        </p>
      </div>
      <Suspense fallback={<PostLoading />}>
        <PostList />
      </Suspense>
    </main>
  );
};

export default Posts;
