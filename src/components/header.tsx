"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogOut } from "./logout";
import { Button } from "./ui/button";

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
          throw new Error("Network response error: " + response);
        }
        const data = await response.json();
        setIsLoggedIn(data.isLoggedIn);
      } catch (error) {
        console.error("Failed to check authentication status:", error);
      }
    };

    checkAuthStatus();
  }, []);
  return (
    <div className="shadow-sm">
      <header className="flex items-center justify-between py-4 px-7 max-w-7xl mx-auto">
        <Link href="/">
          <Image
            src="https://bytegrad.com/course-assets/youtube/example-logo.png"
            alt="Logo"
            width="40"
            height="40"
          />
        </Link>
        <nav>
          <ul className="flex items-center gap-x-5 text-[14px]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  className={`${
                    pathname === link.href
                      ? "text-zinc-900 font-semibold"
                      : "text-zinc-400 font-light"
                  } hover:text-black `}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {isLoggedIn && (
              <li>
                <LogOut>
                  <Button>Logout</Button>
                </LogOut>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
};
