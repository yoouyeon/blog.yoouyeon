import type { Metadata } from "next";
import { getAllPosts } from "@/libs/getAllPosts";
import { parseMdx } from "@/libs/parseMdx";
import Article from "@/components/Article";
import ArticleHeader from "@/components/ArticleHeader";
import ArticleNavigation from "@/components/ArticleNavigation";
import ArticleGiscus from "@/components/ArticleGiscus";

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
  const { meta } = parseMdx(`src/content/posts/${slug}/index.mdx`);
  const { title, date } = meta.frontmatter;

  return (
    <>
      <ArticleHeader title={title} date={date} />
      <Article slug={slug} />
      <ArticleNavigation />
      <ArticleGiscus />
    </>
  );
}
