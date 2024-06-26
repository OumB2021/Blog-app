import prisma from "@/lib/db";
import Link from "next/link";
import { Button } from "./ui/button";

export const PostList = async () => {
  const posts = await prisma.post.findMany();
  return (
    <div>
      {posts.length === 0 ? (
        <div>
          <p className="mt-10 font-medium">There's no post at the moment</p>
          <Button className="mt-5">
            <Link href="/create-post">Create a post</Link>
          </Button>
        </div>
      ) : (
        <ul>
          {posts.map((post) => (
            <li
              className="mb-3 hover:text-black hover:font-medium"
              key={post.id}
            >
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
