
import { cn } from "@/lib/utils";

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  className?: string;
}

export default function SkillCard({ title, skills, icon, className }: SkillCardProps) {
  return (
    <div 
      className={cn(
        "glass-panel p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-2xl",
        className
      )}
    >
      <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
            <span className="text-sm">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
