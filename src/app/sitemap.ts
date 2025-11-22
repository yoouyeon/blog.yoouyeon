import type { MetadataRoute } from "next";
import { LINKS } from "@/config/blog";
import { getAllPosts } from "@/libs/getAllPosts";

const staticSitemap: MetadataRoute.Sitemap = [
  { url: LINKS.BLOG, lastModified: new Date() },
];

// NOTE : url이 50000개가 넘는 경우에는 사이트맵을 쪼개야 한다는 것을 기억하기
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();
  const postSitemap = posts.map((post) => ({
    url: `${LINKS.BLOG}/${post.slug}`,
    lastModified: new Date(),
  }));

  return [...staticSitemap, ...postSitemap];
}
