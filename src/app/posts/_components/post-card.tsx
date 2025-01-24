import Image from "next/image";

function PostCard() {
  return (
    <div className="flex flex-col gap-4 p-4 bg-zinc-50 shadow-sm rounded-md max-w-sm">
      {/* IMAGE */}
      <div className="relative w-full h-56">
        <Image
          src="/img.jpg"
          layout="fill"
          objectFit="cover"
          alt="Article image"
          className="rounded-md"
        />
      </div>

      {/* INFO */}
      <div className="flex flex-col gap-2">
        {/* Title */}
        <h2 className="text-xl font-bold">
          The Future of Technology: Innovations that are Transforming Our World
        </h2>
        {/* Description */}
        <p className="text-gray-600 text-sm">
          Explore the latest technological advancements and their impact on
          society. From Artificial Intelligence to the Internet of Things, learn
          about the cutting-edge innovations.
        </p>
        {/* Author and Date */}
        <div className="flex items-center justify-between text-gray-500 text-sm">
          <div className="flex flex-col gap-2 text-left">
            <p>by Ryan Lee</p>
            <p>August 24, 2023</p>
          </div>
          {/* Actions */}
          <div className="flex items-center justify-end gap-2">
            <button className="p-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.75L12 13.25M12 13.25l-5.25-4.5M12 13.25v6.5"
                />
              </svg>
            </button>
            <button className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 12l7.5 6.5L18.75 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
