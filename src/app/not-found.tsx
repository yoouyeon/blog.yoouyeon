import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <button className="mt-8">
        <Link href={"/"}>
          {/* <ArrowUturnLeftIcon className="w-4 h-4" /> */}
          홈으로 돌아가기
        </Link>
      </button>
    </>
  );
}
