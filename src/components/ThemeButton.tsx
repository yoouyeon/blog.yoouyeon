import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";

function ThemeButton() {
  const { resolvedTheme: theme, setTheme } = useTheme();

  return (
    <button
      className="hover:cursor-pointer rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 ease-in-out hover:text-black dark:hover:text-white"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <SunIcon className="h-5 w-5 m-2" />
      ) : (
        <MoonIcon className="h-5 w-5 m-2" />
      )}
    </button>
  );
}

export default ThemeButton;
