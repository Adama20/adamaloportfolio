
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 z-50 animate-pulse-slow"></div>
      
      <div className="fixed -z-10 inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-background to-background/70 dark:from-background dark:to-background/95"></div>
      
      <Header />
      
      <main className={cn(
        "flex-grow pt-20",
        "relative", // Pour les éléments décoratifs
      )}>
        <div 
          className="absolute top-20 -right-64 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl opacity-30 animate-float"
          style={{ animationDelay: "0s" }}
        />
        
        <div 
          className="absolute bottom-40 -left-64 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl opacity-30 animate-float"
          style={{ animationDelay: "1.5s" }}
        />
        
        <div className="relative z-10">
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
