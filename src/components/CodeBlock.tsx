import { RawCode, highlight, Pre } from "codehike/code";
import CodeCopyButton from "./CodeCopyButton";
import "@/styles/codeblock.css";

type CodeBlockProps = {
  codeblock: RawCode;
};

async function CodeBlock({ codeblock }: CodeBlockProps) {
  try {
    const highlighted = await highlight(codeblock, "github-from-css");

    return (
      <figure className="font-mono my-6">
        {highlighted.meta ? (
          <figcaption className="text-sm mb-1">{highlighted.meta}</figcaption>
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
  } catch {
    return (
      <figure className="font-mono my-6">
        <div className="relative">
          <pre className="not-prose px-4 py-3 rounded-md overflow-x-auto bg-black/5 dark:bg-[#212121] peer">
            <code>{codeblock.value}</code>
          </pre>
          <CodeCopyButton text={codeblock.value} />
        </div>
      </figure>
    );
  }
}

export default CodeBlock;
