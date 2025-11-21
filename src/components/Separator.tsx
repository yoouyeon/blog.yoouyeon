type SeparatorProps = {
  type?: "star" | "end";
};

export default function Separator({ type = "star" }: SeparatorProps) {
  switch (type) {
    case "end":
      return (
        <div
          role="separator"
          aria-orientation="horizontal"
          className="flex items-center justify-center py-16 w-full"
        >
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
        </div>
      );
    default:
      return (
        <div
          role="separator"
          aria-orientation="horizontal"
          className="flex items-center justify-center py-16 w-full"
        >
          <span className="text-sm whitespace-nowrap font-light text-black/20 dark:text-white/30 font-mono tracking-tighter">
            * * *
          </span>
        </div>
      );
  }
}
