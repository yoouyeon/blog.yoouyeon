import dayjs from "dayjs";
import { FrontMatter } from "@/types/post";
import Link from "next/link";
import { LeftIcon } from "./icons";

export default function ArticleHeader({ title, date }: FrontMatter) {
  return (
    <section>
      <Link
        href={"/"}
        className="text-sm flex gap-0.5 !no-underline py-1 pl-1 pr-2 border w-fit rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 ease-in-out hover:text-black dark:hover:text-white border-black/15 dark:border-white/15"
      >
        <LeftIcon className="h-5 w-5" />
        <span>Back to blog</span>
      </Link>
      <div className="flex flex-col gap-1.5 my-10">
        <span className="text-sm">{dayjs(date).format("MMM DD, YYYY")}</span>
        <h1 className="text-black dark:text-white font-bold text-3xl">
          {title}
        </h1>
        <div>
          <span>by </span>
          <Link href={"/"}>유연</Link>
        </div>
      </div>
    </section>
  );
}
