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

  // 제목 검증
  if (typeof fm.title !== "string" || fm.title.trim() === "") {
    errors.push("title이 존재하지 않거나 빈 문자열입니다.");
  }

  // 날짜 검증
  let dateString: string | null = null;
  if (typeof fm.date === "string") {
    if (isNaN(Date.parse(fm.date))) {
      errors.push("date가 유효한 날짜 형식이 아닙니다. : 문자열 파싱 실패");
    } else {
      dateString = new Date(fm.date).toISOString();
    }
  } else if (fm.date instanceof Date) {
    if (isNaN(fm.date.getTime())) {
      errors.push("date가 유효한 날짜 형식이 아닙니다. : Date 객체 파싱 실패");
    } else {
      dateString = fm.date.toISOString();
    }
  } else {
    errors.push(
      "date가 유효한 날짜 형식이 아닙니다. : 문자열 또는 Date 객체가 아님"
    );
  }

  // description 검증
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
    date: dateString as string,
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
