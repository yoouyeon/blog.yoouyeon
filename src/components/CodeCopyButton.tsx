"use client";

import { useEffect, useRef, useState } from "react";
import { CopyIcon, CheckIcon, ExclamationIcon } from "./icons";

type CodeCopyButtonProps = { text: string };

export default function CopyButton({ text }: CodeCopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      setFailed(true);
    } finally {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setCopied(false);
        setFailed(false);
      }, 1200);
    }
  };
  // bg-white dark:bg-black hover:bg-black/15 dark:hover:bg-white/15
  return (
    <button
      aria-label="클립보드에 복사"
      onClick={copy}
      className="absolute top-2.5 right-2.5 opacity-0 peer-hover:opacity-75 hover:opacity-100 text-black dark:text-white border border-black/15 dark:border-white/15 bg-white dark:bg-black rounded-md cursor-pointer"
    >
      {copied && <CheckIcon className="h-5 w-5 m-2" />}
      {failed && <ExclamationIcon className="h-5 w-5 m-2" />}
      {!(copied && failed) && <CopyIcon className="h-5 w-5 m-2" />}
    </button>
  );
}
