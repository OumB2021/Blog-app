import { CreatePostAction } from "@/actions/create-post";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const CreatePost = async () => {
  return (
    <div className="text-center pt-16">
      <h1 className="font-bold text-4xl mb-7 text-center">Create post</h1>
      <form
        action={CreatePostAction}
        className="flex flex-col justify-center items-center gap-5 max-w-[500px] mx-auto"
      >
        <Input
          type="text"
          name="title"
          placeholder="Enter title for new post"
          className="border rounded px-3 h-9 w-full"
          required
        />
        <Textarea
          type="text"
          name="body"
          placeholder="Body content for new post"
          className="border rounded px-3"
          rows={6}
          required
        />
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreatePost;
