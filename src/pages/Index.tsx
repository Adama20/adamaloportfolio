
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout";
import Hero from "@/components/hero";
import Section from "@/components/section";
import SkillCard from "@/components/skill-card";
import ProjectCard from "@/components/project-card";
import ExperienceCard from "@/components/experience-card";

import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { education } from "@/data/education";
import { ThemeProvider } from "@/hooks/use-theme";
import { 
  Award, 
  Download, 
  Mail,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Index() {
  const [featuredProjects, setFeaturedProjects] = useState(projects.slice(0, 3));

  return (
    <ThemeProvider>
      <Layout>
        <Hero />

        <Section 
          id="about" 
          title="À propos de moi" 
          subtitle="Ingénieur en data et informatique décisionnelle, passionné par les défis technologiques"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-lg">
                Ingénieur en data et informatique décisionnelle (MIAGE Bac+5), je mets mon expertise en ingénierie des données
                et en BI au service de projets innovants, alliant analyse, synthèse et esprit d'équipe
                pour transformer les données en leviers de performance.
              </p>

              <p>
                J'aime apprendre de nouvelles technologies et relever de nouveaux défis. Ma passion pour la data
                et les solutions technologiques me pousse à toujours rechercher les meilleures approches pour 
                répondre aux problématiques métier.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button className="flex items-center gap-2" asChild>
                  <a href="/contact">
                    <Mail size={18} />
                    Me contacter
                  </a>
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Download size={18} />
                  Télécharger mon CV
                </Button>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Disponibilité</span>
                      <span className="font-medium text-green-500">Immédiate</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Mobilité</span>
                      <span className="font-medium">Toute la France</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Localisation</span>
                      <span className="font-medium">Bordeaux, France</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Permis</span>
                      <span className="font-medium">B</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-medium mb-4 flex items-center gap-2">
                    <Award size={18} className="text-primary" />
                    <span>Formation</span>
                  </h3>
                  <div className="space-y-3">
                    {education.slice(0, 2).map((edu) => (
                      <div key={edu.id} className="border-l-2 border-primary/30 pl-3">
                        <p className="font-medium">{edu.degree}</p>
                        <p className="text-sm text-muted-foreground">{edu.institution}, {edu.period}</p>
                      </div>
                    ))}
                    <Link 
                      to="/about" 
                      className="text-primary hover:underline text-sm inline-flex items-center gap-1 mt-2"
                    >
                      Voir tout mon parcours
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        <Section
          id="skills"
          title="Compétences"
          subtitle="Mes domaines d'expertise et compétences techniques"
          className="bg-secondary/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.slice(0, 6).map((category) => (
              <SkillCard
                key={category.id}
                title={category.title}
                skills={category.skills}
                icon={<category.icon size={24} />}
              />
            ))}
          </div>
        </Section>

        <Section id="experience" title="Expérience professionnelle">
          <div className="space-y-8">
            {experiences.slice(0, 2).map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                title={exp.title}
                company={exp.company}
                location={exp.location}
                period={exp.period}
                realizations={exp.realizations}
                tools={exp.tools}
                isActive={index === 0}
              />
            ))}
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link to="/experience" className="inline-flex items-center gap-2">
                  Voir toutes mes expériences
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </Section>

        <Section 
          id="projects" 
          title="Projets" 
          subtitle="Quelques projets sur lesquels j'ai travaillé"
          className="bg-secondary/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                link={project.link}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link to="/projects" className="inline-flex items-center gap-2">
                Voir tous mes projets
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </Section>

        <Section id="contact" title="Contact" subtitle="N'hésitez pas à me contacter pour discuter de vos projets">
          <div className="max-w-xl mx-auto glass-panel p-8">
            <p className="text-center mb-6">
              Vous pouvez me contacter pour discuter de vos projets, ou simplement échanger sur les sujets qui vous intéressent.
              Je serais ravi de pouvoir vous aider à concrétiser vos idées.
            </p>
            <div className="space-y-4 max-w-sm mx-auto">
              <Button className="w-full" size="lg" asChild>
                <a href="mailto:adamalo205@gmail.com" className="inline-flex items-center gap-2 justify-center">
                  <Mail size={18} />
                  Me contacter par email
                </a>
              </Button>
              <Button variant="outline" className="w-full" size="lg" asChild>
                <a href="https://bit.ly/adamalo" target="_blank" rel="noopener noreferrer">
                  Me contacter sur LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </Section>
      </Layout>
    </ThemeProvider>
  );
}
