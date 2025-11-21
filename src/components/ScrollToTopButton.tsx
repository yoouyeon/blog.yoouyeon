"use client";

import { UpIcon } from "./icons";

export default function ScrollToTopButton() {
  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex justify-end">
      <button
        type="button"
        onClick={ScrollToTop}
        className="text-sm flex gap-0.5 !no-underline py-1 pl-1 pr-2 border w-fit rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 ease-in-out hover:text-black dark:hover:text-white border-black/15 dark:border-white/15 cursor-pointer"
      >
        <UpIcon className="h-5 w-5" />
        <span>Back to top</span>
      </button>
    </div>
  );
}
