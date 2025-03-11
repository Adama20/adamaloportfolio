
import { useState } from "react";
import Layout from "@/components/layout";
import Section from "@/components/section";
import ProjectCard from "@/components/project-card";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");
  
  // Extract unique technologies from all projects
  const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))];
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.technologies.includes(filter));

  return (
    <Layout>
      <Section title="Mes projets" subtitle="Découvrez les projets sur lesquels j'ai travaillé">
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button 
              variant={filter === "all" ? "default" : "outline"}
              className="transition-all duration-200"
              onClick={() => setFilter("all")}
            >
              Tous les projets
            </Button>
            
            {allTechnologies.map((tech, index) => (
              <Button
                key={index}
                variant={filter === tech ? "default" : "outline"}
                className="transition-all duration-200"
                onClick={() => setFilter(tech)}
              >
                {tech}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              link={project.link}
              className={cn(
                "transition-all duration-300",
                filter === "all" || project.technologies.includes(filter)
                  ? "opacity-100 scale-100"
                  : "opacity-50 scale-95"
              )}
            />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-10">
            <p className="text-muted-foreground">Aucun projet ne correspond à ce filtre.</p>
          </div>
        )}
      </Section>
      
      <Section 
        title="Vous avez un projet ?" 
        subtitle="Je serais ravi de discuter de vos idées et de voir comment je peux vous aider"
        className="bg-secondary/50"
      >
        <div className="max-w-2xl mx-auto text-center">
          <p className="mb-6">
            Si vous cherchez un professionnel pour vous accompagner dans vos projets data ou de BI,
            n'hésitez pas à me contacter. Mon expertise en ingénierie des données et en informatique
            décisionnelle pourrait être l'atout dont vous avez besoin pour transformer vos données
            en leviers de performance.
          </p>
          <Button size="lg" asChild>
            <a href="/contact">Me contacter</a>
          </Button>
        </div>
      </Section>
    </Layout>
  );
}
