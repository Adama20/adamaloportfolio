
import { useState } from "react";
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

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={cn(
        "glass-panel overflow-hidden transition-all duration-300 hover:shadow-xl group",
        className
      )}
    >
      <div className="h-48 overflow-hidden relative">
        <img
          src={image}
          alt={title}
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
            >
              {expanded ? (
                <>
                  <Minus size={16} />
                  Voir moins
                </>
              ) : (
                <>
                  <Plus size={16} />
                  Voir plus
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
