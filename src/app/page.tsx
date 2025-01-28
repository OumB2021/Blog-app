import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center my-auto">
      <h1 className="font-bold text-center text-xl sm:text-4xl md:text-5xl mb-5 ">
        Welcome to my blog app
      </h1>
      <p className="md:max-w-[750px] px-4 md:px-0 text-center leading-6 sm:leading-8 text-sm sm:text-base text-zinc-600 font-light">
        Welcome to my blog app! This is a space where ideas come to life,
        stories are shared, and knowledge flows freely. Whether you&apos;re here
        to explore the latest trends, dive into thought-provoking articles, or
        simply find inspiration, you&apos;ve come to the right place. From
        technology and innovation to lifestyle tips, personal growth, and
        everything in between, we aim to create a platform that sparks curiosity
        and fuels creativity. Take a moment to browse, learn, and
        connect—there&apos;s something here for everyone. We&apos;re excited to
        have you join this journey of discovery and conversation. Let&apos;s
        explore together!
      </p>
      <Button className="mt-5 rounded-sm">
        <Link href="/posts" className="font-light">
          View our posts
        </Link>
      </Button>
    </main>
  );
}
