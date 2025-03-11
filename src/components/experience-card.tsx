
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface RealizationItem {
  title: string;
  description: string;
}

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  realizations: RealizationItem[];
  tools?: string;
  className?: string;
  isActive?: boolean;
  websiteUrl?: string;
}

export default function ExperienceCard({
  title,
  company,
  location,
  period,
  realizations,
  tools,
  className,
  isActive = false,
  websiteUrl,
}: ExperienceCardProps) {
  return (
    <div
      className={cn(
        "glass-panel p-6 mb-6 transition-all duration-300",
        isActive && "border-primary/50 shadow-lg",
        className
      )}
    >
      <div className="mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex flex-col sm:flex-row sm:items-center text-sm text-muted-foreground mt-1">
          <span className="font-medium text-primary">{company}</span>
          <span className="hidden sm:block mx-2">•</span>
          <span>{location}</span>
          <span className="hidden sm:block mx-2">•</span>
          <span>{period}</span>
        </div>
        
        {websiteUrl && (
          <div className="mt-3">
            <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
              <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
                Voir le site web
                <ExternalLink size={16} />
              </a>
            </Button>
          </div>
        )}
      </div>

      <div className="space-y-4">
        {realizations.map((item, index) => (
          <div key={index} className="pl-4 border-l-2 border-primary/30">
            <h4 className="font-medium">{item.title}</h4>
            <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
          </div>
        ))}
      </div>

      {tools && (
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-sm">
            <span className="font-medium">Outils :</span> {tools}
          </p>
        </div>
      )}
    </div>
  );
}
