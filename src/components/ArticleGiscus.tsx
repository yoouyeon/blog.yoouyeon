"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { GISCUS_CONFIG } from "@/config/giscus";

export default function ArticleGiscus() {
  const giscusRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme: theme } = useTheme();
  const { REPO, REPO_ID, CATEGORY, CATEGORY_ID } = GISCUS_CONFIG;

  useEffect(() => {
    if (!theme || !giscusRef.current) return;

    // 기존 giscus iframe 제거
    giscusRef.current.innerHTML = "";

    const giscusTheme = theme === "dark" ? "noborder_dark" : "noborder_light";

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", REPO);
    script.setAttribute("data-repo-id", REPO_ID);
    script.setAttribute("data-category", CATEGORY);
    script.setAttribute("data-category-id", CATEGORY_ID);
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", giscusTheme);
    script.setAttribute("data-lang", "ko");
    script.setAttribute("data-loading", "lazy");
    script.async = true;
    script.crossOrigin = "anonymous";

    giscusRef.current?.appendChild(script);
  }, [theme]);

  return <section ref={giscusRef} id="giscus" />;
}
