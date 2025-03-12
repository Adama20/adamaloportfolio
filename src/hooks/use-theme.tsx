
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "blue" | "green" | "purple" | "orange" | "teal" | "indigo" | "rose" | "amber";
type Mode = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  mode: Mode;
  setMode: (mode: Mode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    return savedTheme || "blue";
  });
  
  const [mode, setMode] = useState<Mode>(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("mode") as Mode;
      if (savedMode) return savedMode;
      
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return prefersDark ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    
    // Remove all theme classes first
    document.body.classList.remove(
      "theme-blue", 
      "theme-green", 
      "theme-purple", 
      "theme-orange", 
      "theme-teal", 
      "theme-indigo", 
      "theme-rose", 
      "theme-amber"
    );
    
    // Then add the selected theme class
    document.body.classList.add(`theme-${theme}`);
    
    // Apply theme CSS variables for each theme
    const root = document.documentElement;
    
    // Reset all theme-specific colors
    switch(theme) {
      case "teal":
        root.style.setProperty('--primary', 'hsl(168, 76%, 42%)');
        root.style.setProperty('--primary-foreground', 'hsl(168, 76%, 98%)');
        break;
      case "indigo":
        root.style.setProperty('--primary', 'hsl(231, 48%, 48%)');
        root.style.setProperty('--primary-foreground', 'hsl(231, 48%, 98%)');
        break;
      case "rose":
        root.style.setProperty('--primary', 'hsl(339, 81%, 66%)');
        root.style.setProperty('--primary-foreground', 'hsl(339, 81%, 98%)');
        break;
      default:
        // For other themes, use the default configuration
        root.style.removeProperty('--primary');
        root.style.removeProperty('--primary-foreground');
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("mode", mode);
    
    if (mode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
