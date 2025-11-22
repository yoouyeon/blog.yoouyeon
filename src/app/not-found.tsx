import { LeftIcon } from "@/components/icons";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h2 className="flex gap-2 font-semibold text-black dark:text-white">
        404 Not Found
      </h2>
      <p className="my-5">페이지를 찾을 수 없습니다...</p>
      <Link href="/" className="flex items-center w-fit">
        <LeftIcon className="h-6 w-6" />
        <span>Back to blog</span>
      </Link>
    </>
  );
}
