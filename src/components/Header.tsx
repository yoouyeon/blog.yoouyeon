"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
const ThemeButton = dynamic(() => import("@/components/ThemeButton"), {
  ssr: false,
});

export default function Header() {
  return (
    <header className="mx-auto max-w-screen-sm px-5 flex items-center justify-between gap-2">
      <Link href={"/"} className="w-full font-semibold !no-underline">
        blog.yoouyeon
      </Link>
      <div className="flex gap-1 items-center">
        <Link href="/about">about</Link>
        <span>/</span>
        <Link href="/tags">tags</Link>
        {/* <SearchButton /> */}
      </div>
      <ThemeButton />
    </header>
  );
}
