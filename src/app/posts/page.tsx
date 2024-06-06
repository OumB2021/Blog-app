import Link from "next/link";

const Posts = async () => {
  const apiResponse = await fetch("https://dummyjson.com/posts");
  const { posts } = await apiResponse.json();
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="font-bold text-4xl md:text-5xl mb-5 ">All posts</h1>
      <ul>
        {posts.map((post) => (
          <li className="mb-3 hover:text-black hover:font-medium" key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Posts;
