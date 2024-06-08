"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogOut } from "./logout";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
  {
    href: "/create-post",
    label: "Create post",
  },
];

export const Header = () => {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch("/api/auth/status");
        if (!response.ok) {
          throw new Error("Network response error: " + respone);
        }
        const data = await response.json();
        console.log(data.isLoggedIn);
        setIsLoggedIn(data.isLoggedIn);
      } catch (error) {
        console.error("Failed to check authentication status:", error);
      }
    };

    checkAuthStatus();
  }, []);
  return (
    <header className="flex items-center justify-between py-4 px-7 border-b ">
      <Link href="/">
        <Image
          src="https://bytegrad.com/course-assets/youtube/example-logo.png"
          alt="Logo"
          width="40"
          height="40"
        />
      </Link>
      <nav>
        <ul className="flex gap-x-5 text-[14px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                className={`${
                  pathname === link.href ? "text-zinc-900" : "text-zinc-400"
                } hover:text-black font-medium`}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
          {isLoggedIn && (
            <li>
              <LogOut className="text-zinc-300 font-semibold p-3 rounded-md bg-zinc-900 hover:text-white">
                Logout
              </LogOut>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
