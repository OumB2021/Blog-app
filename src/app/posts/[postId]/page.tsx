import prisma from "@/lib/db";

const Post = async ({ params }: { params: { postId: string } }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.postId),
    },
  });

  return (
    <main className="flex flex-col justify-center items-center pt-24">
      <h1 className="font-bold text-4xl mb-7 max-w-[700px] text-center">
        {post?.title}
      </h1>
      <p className="max-w-[700px] mx-auto">{post?.body}</p>
    </main>
  );
};

export default Post;
