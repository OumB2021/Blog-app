import { LoaderCircle } from "lucide-react";

function PostLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div>
        <LoaderCircle className="text-muted-foreground size-5" />
      </div>
    </div>
  );
}
export default PostLoading;
