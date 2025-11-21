import Link from "next/link";

export default function BlogFooter() {
  return (
    <footer className="flex flex-col mx-auto w-full max-w-screen-sm px-5 py-12">
      <div>
        <span>Made with ♥ by </span>
        <Link href="https://github.com/yoouyeon">yoouyeon</Link>
      </div>
      <span>© 2025</span>
    </footer>
  );
}
