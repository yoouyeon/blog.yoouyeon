"use client";

import { LeftIcon } from "@/components/icons";
import { useRouter } from "next/navigation";

export default function Error() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <>
      <h2 className="flex gap-2 font-semibold text-black dark:text-white">
        Something went wrong!
      </h2>
      <p className="my-5">문제가 발생했습니다...</p>
      <button
        className="flex items-center w-fit underline underline-offset-2 decoration-black/10 dark:decoration-white/30 hover:decoration-black/20 dark:hover:decoration-white/50 hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out"
        onClick={goBack}
      >
        <LeftIcon className="h-6 w-6" />
        <span>Go back</span>
      </button>
    </>
  );
}
