import Link from "next/link";
import { GithubIcon, ObsidianIcon } from "./icons";

export default function Bio() {
  return (
    <section>
      <p className="flex gap-2 font-semibold text-black dark:text-white">
        <span>유연</span>
        <span>·</span>
        <span>yoouyeon</span>
        <span className="">—</span>
        <span>frontend developer</span>
      </p>
      <p className="my-5">
        <span>
          생각과 배움을 글로 정리했을 때 더 깊이 이해할 수 있어 꾸준히 남기고
          있습니다.
        </span>
        <br />
        <span>
          제 경험이 누군가에게 도움이 되길 바라며 블로그에 글을 씁니다.
        </span>
      </p>
      <div className="flex gap-1">
        <Link
          href="https://github.com/yoouyeon"
          className="flex gap-1 items-center no-underline  rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 ease-in-out p-1"
        >
          <GithubIcon />
          <span className="text-sm">GitHub</span>
        </Link>
        <Link
          href="https://log.yoouyeon.dev/"
          className="flex gap-1 items-center no-underline  rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 ease-in-out p-1"
        >
          <ObsidianIcon />
          <span className="text-sm">Wiki</span>
        </Link>
      </div>
    </section>
  );
}
