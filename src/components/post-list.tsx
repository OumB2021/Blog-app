import Link from "next/link";

export const PostList = async () => {
  const apiResponse = await fetch("https://dummyjson.com/posts?limit=15");
  const { posts } = await apiResponse.json();
  return (
    <ul>
      {posts.map((post) => (
        <li className="mb-3 hover:text-black hover:font-medium" key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};
