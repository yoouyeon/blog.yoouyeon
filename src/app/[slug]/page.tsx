import type { Metadata } from "next";
import Link from "next/link";
import ArticleHeader from "@/components/ArticleHeader";
import Giscus from "@/components/Giscus";
import { getAllPosts } from "@/libs/getAllPosts";
import { parseMdx } from "@/libs/parseMdx";
import Article from "@/components/Article";

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

type PostProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const { slug } = await params;
  const { meta } = parseMdx(`src/content/posts/${slug}/index.mdx`);
  const { frontmatter } = meta;
  const { title, description } = frontmatter;

  return {
    title,
    description,
  };
}

export default async function Post({ params }: PostProps) {
  const { slug } = await params;
  const { default: PostComponent } = await import(
    `@/content/posts/${slug}/index.mdx`
  );
  const { meta } = parseMdx(`src/content/posts/${slug}/index.mdx`);

  return (
    <div className="px-5">
      <ArticleHeader {...meta.frontmatter} />
      <Article slug={slug} />
      {/* <Giscus /> */}
      <section role="navigation" className="mb-16">
        <button>
          <Link href={"/writings"}>
            {/* <ArrowUturnLeftIcon className="w-4 h-4" /> */}
            목록으로 돌아가기
          </Link>
        </button>
      </section>
      <Giscus />
    </div>
  );
}
