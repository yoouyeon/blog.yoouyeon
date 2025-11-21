import Separator from "./Separator";

type ArticleProps = {
  slug: string;
};

export default async function Article({ slug }: ArticleProps) {
  const { default: Mdx } = await import(`@/content/posts/${slug}/index.mdx`);

  return (
    <>
      <article className="prose dark:prose-invert">
        <Mdx />
      </article>
      <Separator type="end" />
    </>
  );
}
