import { CreatePostAction } from "@/actions/create-post";
import { Button } from "@/components/ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const CreatePost = async () => {
  return (
    <div className="text-center pt-16">
      <h1 className="font-bold text-4xl mb-7 text-center">Create post</h1>
      <form
        action={CreatePostAction}
        className="flex justify-center items-center gap-x-2"
      >
        <input
          type="text"
          name="title"
          placeholder="Enter title for new post"
          className="border rounded px-3 h-9"
          required
        />
        <Button type="submit" className="h-full">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreatePost;
