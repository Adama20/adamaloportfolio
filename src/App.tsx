
import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/use-theme";
import { SupabaseProvider } from "@/hooks/use-supabase";
import Index from "./pages/Index";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Import badge remover utility and run on every page
import initBadgeRemover from './utils/badge-remover.js';

const queryClient = new QueryClient();

// Pour GitHub Pages, utilisons toujours HashRouter
// HashRouter fonctionne mieux pour les sites statiques car il utilise la partie # de l'URL
const App = () => {
  // Run badge remover on component mount
  useEffect(() => {
    const cleanup = initBadgeRemover();
    return cleanup;
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <SupabaseProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <HashRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </HashRouter>
          </TooltipProvider>
        </SupabaseProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
