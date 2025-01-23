import { LoaderCircle } from "lucide-react";

function PostLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <LoaderCircle className="text-muted-foreground" size="60" />
    </div>
  );
}
export default PostLoading;
