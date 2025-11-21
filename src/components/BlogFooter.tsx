import Link from "next/link";
import { BLOG_PROFILE } from "@/config/blog";

export default function BlogFooter() {
  const { AUTHOR, LINKS } = BLOG_PROFILE;

  return (
    <footer className="flex flex-col mx-auto w-full max-w-screen-sm px-5 py-12">
      <div>
        <span>Made with ♥ by </span>
        <Link href={LINKS.GITHUB}>{AUTHOR.EN}</Link>
      </div>
      <span>© 2025</span>
    </footer>
  );
}
