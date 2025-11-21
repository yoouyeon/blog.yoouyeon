import Link from "next/link";
import dayjs from "dayjs";
import { getAllPosts } from "@/libs/getAllPosts";

async function PostList() {
  const posts = await getAllPosts();

  return (
    <section className="mt-16">
      <h3 className="font-semibold text-black dark:text-white">{`Writings (${posts.length})`}</h3>
      <ul className="group pt-5">
        {posts.map((meta) => {
          const { frontmatter, slug } = meta;
          const { title, date } = frontmatter;

          return (
            <li
              key={slug}
              className="py-4 group-hover:text-black/30 hover:!text-black dark:group-hover:text-white/30 dark:hover:!text-white"
            >
              <Link
                href={slug}
                className="flex gap-4 justify-between !no-underline"
              >
                <span className="text-black dark:text-white group-hover:text-inherit">
                  {title}
                </span>
                <div className="hidden md:block my-auto h-[1px] bg-black/5 dark:bg-white/5 flex-1" />
                <span className="text-sm whitespace-nowrap tabular-nums">
                  {dayjs(date).format("YYYY.MM.DD")}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default PostList;
