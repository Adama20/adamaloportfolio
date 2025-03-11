
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Moon, Sun, Palette } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ThemeSelector() {
  const { theme, setTheme, mode, setMode } = useTheme();

  const themeOptions = [
    { name: "blue", color: "bg-blue-500" },
    { name: "green", color: "bg-green-500" },
    { name: "purple", color: "bg-purple-500" },
    { name: "orange", color: "bg-orange-500" },
  ];

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        className="transition-all duration-200 ease-in-out"
        aria-label="Toggle dark mode"
      >
        {mode === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </Button>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="transition-all duration-200 ease-in-out"
            aria-label="Select a theme"
          >
            <Palette size={20} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-48 p-2" align="end">
          <div className="space-y-2">
            <p className="text-sm font-medium mb-2">Choose a theme</p>
            <div className="grid grid-cols-4 gap-2">
              {themeOptions.map((option) => (
                <button
                  key={option.name}
                  onClick={() => setTheme(option.name as any)}
                  className={cn(
                    "w-full h-8 rounded-md border-2 transition-all",
                    option.color,
                    theme === option.name
                      ? "ring-2 ring-offset-2 ring-primary scale-110"
                      : "hover:scale-105"
                  )}
                  aria-label={`Set theme to ${option.name}`}
                />
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
