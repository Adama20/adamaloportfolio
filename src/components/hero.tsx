
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  const scrollToContent = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const jobTitle = "Consultant Data | Ingénieur BI";
  const jobTitleAlt = "Consultant en données | Ingénieur BI";

  return (
    <section className={cn("relative min-h-screen flex items-center justify-center px-6", className)}>
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/10 -top-20 -right-20 animate-float"></div>
        <div className="absolute w-[300px] h-[300px] rounded-full bg-primary/5 bottom-20 -left-20 animate-float"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm animate-fade-in" translate="no">
            {jobTitle}
          </span>
          <span className="sr-only">{jobTitleAlt}</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-in-top">
          <span className="block">Bonjour, je suis</span> 
          <span className="text-primary">Adama LO</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
          Ingénieur en data et informatique décisionnelle, je transforme les données 
          en insights stratégiques pour optimiser les performances de votre entreprise.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
          <Button size="lg" className="text-base px-6 py-6" asChild>
            <a href="/contact">Me contacter</a>
          </Button>
          <Button variant="outline" size="lg" className="text-base px-6 py-6" asChild>
            <a href="#projects">Voir mes projets</a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-pulse-slow">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full"
          onClick={scrollToContent}
          aria-label="Défiler vers le bas"
        >
          <ArrowDown size={24} />
        </Button>
      </div>
    </section>
  );
}
