import type { MDXComponents } from "mdx/types";
import CodeBlock from "@/components/CodeBlock";
import Separator from "@/components/Separator";
import Youtube from "@/components/Youtube";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    CodeBlock,
    Youtube,
    hr: Separator,
  };
}
