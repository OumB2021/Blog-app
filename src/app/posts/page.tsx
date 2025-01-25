import { PostList } from "@/app/posts/_components/post-list";
import Link from "next/link";
import { Suspense } from "react";
import PostLoading from "./post-loading";

const Posts = async () => {
  return (
    <main>
      <div className="flex flex-col pt-16 pb-10">
        <h1 className="font-semibold text-4xl md:text-5xl text-center ">
          Articles
        </h1>
        <p className="text-center text-sm text-gray-500 font-light">
          This is a list of all the articles published
        </p>
      </div>
      <Suspense fallback={<PostLoading />}>
        <PostList />
      </Suspense>
    </main>
  );
};

export default Posts;
