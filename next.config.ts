import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import { remarkCodeHike, recmaCodeHike } from "codehike/mdx";
import stripFrontmatter from "@/libs/stripFrontmatter";
import { rewriteAssetsPath } from "@/libs/rewriteAssetsPath";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["md", "mdx", "ts", "tsx"],
};

/** @type {import('codehike/mdx').CodeHikeConfig} */
const chConfig = {
  components: { code: "CodeBlock" },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkFrontmatter,
      stripFrontmatter,
      rewriteAssetsPath,
      [remarkCodeHike, chConfig],
    ],
    recmaPlugins: [[recmaCodeHike, chConfig]],
  },
});

export default withMDX(nextConfig);
