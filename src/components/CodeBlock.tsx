import { RawCode, highlight, Pre } from "codehike/code";
import CodeCopyButton from "./CodeCopyButton";
import "@/styles/codeblock.css";

type CodeBlockProps = {
  codeblock: RawCode;
};

async function CodeBlock({ codeblock }: CodeBlockProps) {
  const highlighted = await highlight(codeblock, "github-from-css");

  return (
    <figure className="font-mono my-6">
      {highlighted.meta ? (
        <figcaption className="text-sm mb-1 h-5">{highlighted.meta}</figcaption>
      ) : null}
      <div className="relative">
        <Pre
          className="not-prose px-4 py-3 rounded-md overflow-x-auto bg-black/5 dark:bg-[#212121] peer"
          code={highlighted}
        />
        <CodeCopyButton text={highlighted.code} />
      </div>
    </figure>
  );
}

export default CodeBlock;
