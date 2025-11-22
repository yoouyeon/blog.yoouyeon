import Link from "next/link";
import { AlternateMailIcon, GithubIcon, ObsidianIcon } from "./icons";
import { AUTHOR, LINKS } from "@/config/blog";

export default function Bio() {
  return (
    <section>
      <h2 className="flex gap-2 font-semibold text-black dark:text-white">
        <span>{AUTHOR.KO_NAME}</span>
        <span>·</span>
        <span>{AUTHOR.EN_NAME}</span>
        <span>—</span>
        <span>{AUTHOR.DESCRIPTION}</span>
      </h2>
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
          href={LINKS.EMAIL}
          className="flex gap-1 items-center !no-underline rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 ease-in-out p-1"
        >
          <AlternateMailIcon className="h-5 w-5" />
          <span className="text-sm">Mail</span>
        </Link>
        <Link
          href={LINKS.GITHUB}
          rel="noopener noreferrer"
          className="flex gap-1 items-center !no-underline rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 ease-in-out p-1"
        >
          <GithubIcon className="h-5 w-5" />
          <span className="text-sm">GitHub</span>
        </Link>
        <Link
          href={LINKS.WIKI}
          rel="noopener noreferrer"
          className="flex gap-1 items-center !no-underline rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 ease-in-out p-1"
        >
          <ObsidianIcon className="h-5 w-5" />
          <span className="text-sm">Wiki</span>
        </Link>
      </div>
    </section>
  );
}
