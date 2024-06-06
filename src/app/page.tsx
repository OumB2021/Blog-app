import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center my-auto">
      <h1 className="font-bold text-4xl md:text-5xl mb-5 ">
        Welcome to my blog app
      </h1>
      <p className="max-w-[750px] mx-auto leading-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        officia sapiente fugit inventore assumenda doloribus vel pariatur
        aperiam, optio quia? Neque itaque inventore aliquid sequi in, esse ad
        explicabo voluptate quibusdam eligendi quia eius, voluptatum laudantium
        dignissimos doloribus, repudiandae optio amet omnis harum possimus
        repellendus rem officia quod et! Nam?
      </p>
      <Button className="mt-5">
        <Link href="/posts">View our posts</Link>
      </Button>
    </main>
  );
}
