
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Github, ExternalLink, Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  link?: string;
  className?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  image = "/placeholder.svg",
  technologies,
  link,
  className,
  githubUrl,
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState(image || "/placeholder.svg");

  // Reset image error state and update image source when image prop changes
  useEffect(() => {
    if (image) {
      setImageSrc(image);
      setImageError(false);
    } else {
      setImageSrc("/placeholder.svg");
    }
  }, [image]);

  const toggleDescription = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default behavior
    e.stopPropagation(); // Stop propagation
    setExpanded(!expanded);
  };

  const handleImageError = () => {
    console.error(`Image failed to load: ${imageSrc}`);
    // Only set to placeholder if not already using placeholder
    if (imageSrc !== "/placeholder.svg") {
      setImageError(true);
      setImageSrc("/placeholder.svg");
    }
  };

  // Get the current language from browser
  const userLanguage = navigator.language || "fr";
  const isEnglish = userLanguage.startsWith("en");

  // Localized button text
  const showMoreText = isEnglish ? "Show more" : "Voir plus";
  const showLessText = isEnglish ? "Show less" : "Voir moins";

  return (
    <div
      className={cn(
        "glass-panel overflow-hidden transition-all duration-300 hover:shadow-xl group",
        className
      )}
    >
      <div className="h-48 overflow-hidden relative">
        <img
          src={imageSrc}
          alt={title}
          onError={handleImageError}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="relative">
          <p className={cn(
            "text-muted-foreground text-sm mb-4",
            expanded ? "" : "line-clamp-3"
          )}>
            {description}
          </p>
          
          {description.length > 150 && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center gap-1 mt-1 mb-3" 
              onClick={toggleDescription}
              type="button"
            >
              {expanded ? (
                <>
                  <Minus size={16} />
                  {showLessText}
                </>
              ) : (
                <>
                  <Plus size={16} />
                  {showMoreText}
                </>
              )}
            </Button>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-2 items-center">
          {link && (
            <Link
              to={link}
              className="inline-flex items-center text-primary font-medium text-sm group-hover:underline"
            >
              Voir le projet
              <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
          
          {githubUrl && (
            <Button variant="outline" size="sm" className="ml-auto flex items-center gap-1" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={16} />
                GitHub
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
