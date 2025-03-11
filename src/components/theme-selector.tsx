
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Moon, Sun, Palette } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ThemeSelector() {
  const { theme, setTheme, mode, setMode } = useTheme();

  const themeOptions = [
    { name: "blue", color: "bg-blue-500", label: "Bleu" },
    { name: "green", color: "bg-green-500", label: "Vert" },
    { name: "purple", color: "bg-purple-500", label: "Violet" },
    { name: "orange", color: "bg-orange-500", label: "Orange" },
    { name: "teal", color: "bg-teal-500", label: "Turquoise" },
    { name: "indigo", color: "bg-indigo-500", label: "Indigo" },
    { name: "rose", color: "bg-rose-500", label: "Rose" },
    { name: "amber", color: "bg-amber-500", label: "Ambre" },
  ];

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        className="transition-all duration-200 ease-in-out relative group"
        aria-label="Toggle dark mode"
      >
        {mode === "light" ? <Moon size={20} /> : <Sun size={20} />}
        <span className="absolute -bottom-9 left-1/2 transform -translate-x-1/2 bg-popover text-popover-foreground text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
          {mode === "light" ? "Mode sombre" : "Mode clair"}
        </span>
      </Button>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="transition-all duration-200 ease-in-out relative group"
            aria-label="Select a theme"
          >
            <Palette size={20} />
            <span className="absolute -bottom-9 left-1/2 transform -translate-x-1/2 bg-popover text-popover-foreground text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
              Thèmes
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64 p-3" align="end">
          <div className="space-y-3">
            <p className="text-sm font-medium mb-2">Choisir un thème</p>
            <div className="grid grid-cols-4 gap-2">
              {themeOptions.map((option) => (
                <button
                  key={option.name}
                  onClick={() => setTheme(option.name as any)}
                  className={cn(
                    "w-full h-10 rounded-md border-2 transition-all flex flex-col items-center justify-center",
                    option.color,
                    theme === option.name
                      ? "ring-2 ring-offset-2 ring-primary scale-110"
                      : "hover:scale-105"
                  )}
                  aria-label={`Set theme to ${option.name}`}
                  title={option.label}
                />
              ))}
            </div>
            <div className="grid grid-cols-4 gap-2 pt-1">
              {themeOptions.map((option) => (
                <div 
                  key={`label-${option.name}`}
                  className="text-center text-xs text-muted-foreground"
                >
                  {option.label}
                </div>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
