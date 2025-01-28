import prisma from "@/lib/db";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import PostCard from "./post-card";

export const PostList = async () => {
  const posts = await prisma.post.findMany();
  return (
    <div className="flex items-center justify-center p-4">
      {posts.length === 0 ? (
        <div className="flex flex-col items-center justify-center">
          <p className="mt-10 font-medium text-muted-foreground">
            There's no post at the moment
          </p>
          <Button className="mt-5">
            <Link href="/create-post">Create a post</Link>
          </Button>
        </div>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-4">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
        // <ul>
        //   {posts.map((post) => (
        //     <li
        //       className="mb-3 hover:text-black hover:font-medium"
        //       key={post.id}
        //     >
        //       <Link href={`/posts/${post.id}`}>{post.title}</Link>
        //     </li>
        //   ))}
        // </ul>
      )}
    </div>
  );
};
