import { PropsWithChildren, ReactNode } from "react";

type SeparatorProps = {
  type?: "star" | "end";
};

function SeparatorWrapper({ children, ...props }: PropsWithChildren) {
  return <div {...props}>{children}</div>;
}

export default function Separator({ type = "star" }: SeparatorProps) {
  switch (type) {
    case "end":
      return (
        <SeparatorWrapper>
          <div
            className="flex-grow border-t border-black/20 dark:border-white/30"
            aria-hidden="true"
          />
          <span className="px-3 text-sm whitespace-nowrap font-light text-black/20 dark:text-white/30 font-mono">
            end
          </span>
          <div
            className="flex-grow border-t border-black/20 dark:border-white/30"
            aria-hidden="true"
          />
        </SeparatorWrapper>
      );
    default:
      return (
        <SeparatorWrapper>
          <span className="text-sm whitespace-nowrap font-light text-black/20 dark:text-white/30 font-mono tracking-tighter">
            * * *
          </span>
        </SeparatorWrapper>
      );
  }
}
