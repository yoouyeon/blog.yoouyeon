import fs from "fs";
import matter from "gray-matter";
import { FrontMatter, Post } from "@/types/post";
import { generateSlugFromPath } from "./generateSlugFromPath";

export const validateFrontmatter = (
  rawFm: unknown,
  filePath: string
): FrontMatter => {
  const errors = [];

  if (typeof rawFm !== "object" || rawFm === null) {
    throw new Error(
      `Invalid frontmatter in ${filePath}: 프론트매터가 존재하지 않거나 객체가 아닙니다.`
    );
  }

  const fm = rawFm as Record<string, unknown>;

  if (typeof fm.title !== "string" || fm.title.trim() === "") {
    errors.push("title이 존재하지 않거나 빈 문자열입니다.");
  }

  if (!(fm.date instanceof Date) || isNaN(fm.date.getTime())) {
    errors.push("date가 유효한 날짜가 아닙니다.");
  }

  if (
    fm.description !== undefined &&
    (typeof fm.description !== "string" || fm.description.trim() === "")
  ) {
    errors.push("description이 빈 문자열입니다.");
  }

  if (errors.length > 0) {
    throw new Error(
      `Invalid frontmatter in ${filePath}:\n- ${errors.join("\n- ")}`
    );
  }

  return {
    title: fm.title,
    date: fm.date,
    description: fm.description,
  } as FrontMatter;
};

export const parseMdx = (path: string): Post => {
  const fileContent = fs.readFileSync(path, "utf-8");
  const { data: frontmatter, content } = matter(fileContent);
  const slug = generateSlugFromPath(path);

  const validatedFrontmatter = validateFrontmatter(frontmatter, path);

  return {
    meta: {
      frontmatter: validatedFrontmatter,
      slug,
    },
    content,
  };
};
