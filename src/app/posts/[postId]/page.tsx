const Post = async ({ params }: { params: { postId: string } }) => {
  const apiResponse = await fetch(
    `https://dummyjson.com/posts/${params.postId}`
  );
  const data = await apiResponse.json();

  return (
    <main className="flex flex-col justify-center items-center pt-24">
      <h1 className="font-bold text-4xl mb-7 max-w-[700px] text-center">
        {data.title}
      </h1>
      <p className="max-w-[700px] mx-auto">{data.body}</p>
    </main>
  );
};

export default Post;
