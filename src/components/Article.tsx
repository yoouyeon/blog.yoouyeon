import Separator from "./Separator";

type ArticleProps = {
  slug: string;
};

export default async function Article({ slug }: ArticleProps) {
  try {
    // slug가 안전한 형식인지 검증 (영문자, 숫자, 하이픈만 허용)
    if (!/^[a-zA-Z0-9-]+$/.test(slug)) {
      throw new Error("Invalid slug format");
    }
    const { default: Mdx } = await import(`@/content/posts/${slug}/index.mdx`);

    return (
      <>
        <article className="prose dark:prose-invert">
          <Mdx />
        </article>
        <Separator type="end" />
      </>
    );
  } catch {
    return (
      <article className="prose dark:prose-invert">
        <p>글을 찾을 수 없습니다.</p>
      </article>
    );
  }
}
