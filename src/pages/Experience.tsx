
import { useState } from "react";
import Layout from "@/components/layout";
import Section from "@/components/section";
import ExperienceCard from "@/components/experience-card";
import { experiences } from "@/data/experience";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Download, Briefcase } from "lucide-react";

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<number>(1);

  return (
    <Layout>
      <Section title="Expérience professionnelle" subtitle="Mon parcours professionnel et mes réalisations">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="glass-panel p-6 sticky top-24">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Briefcase size={20} className="text-primary" />
                Parcours
              </h3>
              <div className="space-y-4">
                {experiences.map((exp) => (
                  <button
                    key={exp.id}
                    onClick={() => setSelectedExperience(exp.id)}
                    className={cn(
                      "w-full text-left p-3 rounded-lg transition-all border",
                      selectedExperience === exp.id
                        ? "border-primary/50 bg-primary/5 shadow-sm"
                        : "border-transparent hover:bg-secondary"
                    )}
                  >
                    <h4 className="font-medium">{exp.company}</h4>
                    <p className="text-sm text-muted-foreground">{exp.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{exp.period}</p>
                  </button>
                ))}
              </div>
              <div className="mt-6">
                <Button className="w-full flex items-center gap-2 justify-center">
                  <Download size={18} />
                  Télécharger mon CV
                </Button>
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className={cn(
                  "transition-all duration-300",
                  selectedExperience === exp.id ? "opacity-100" : "hidden"
                )}
              >
                <ExperienceCard
                  title={exp.title}
                  company={exp.company}
                  location={exp.location}
                  period={exp.period}
                  realizations={exp.realizations}
                  tools={exp.tools}
                  isActive={true}
                />

                <div className="mt-8 glass-panel p-6">
                  <h3 className="text-xl font-semibold mb-4">Détails supplémentaires</h3>
                  <div className="space-y-4">
                    <p>
                      En tant que {exp.title} chez {exp.company}, j'ai pu développer mes compétences techniques 
                      et professionnelles dans un environnement stimulant. Cette expérience m'a permis de 
                      renforcer ma maîtrise des outils suivants : {exp.tools}.
                    </p>
                    <p>
                      J'ai travaillé sur des projets variés qui m'ont permis d'acquérir une vision globale
                      des problématiques métier et des solutions technologiques adaptées.
                    </p>
                    <h4 className="font-medium mt-4">Compétences développées :</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Analyse et compréhension des besoins métier</li>
                      <li>Conception et mise en œuvre de solutions BI adaptées</li>
                      <li>Optimisation des performances et automatisation des processus</li>
                      <li>Communication et collaboration avec les équipes métier</li>
                      <li>Gestion de projet et respect des délais</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </Layout>
  );
}
