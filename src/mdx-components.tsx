import type { MDXComponents } from "mdx/types";
import CodeBlock from "@/components/CodeBlock";
import Separator from "@/components/Separator";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    CodeBlock,
    hr: Separator,
  };
}
