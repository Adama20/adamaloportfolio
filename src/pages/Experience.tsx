
import { useState } from "react";
import Layout from "@/components/layout";
import Section from "@/components/section";
import ExperienceCard from "@/components/experience-card";
import { experiences } from "@/data/experience";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Download, Briefcase, ExternalLink } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<number>(1);
  const [isDownloading, setIsDownloading] = useState(false);
  
  // Fonction pour télécharger le CV
  const handleDownloadCV = () => {
    try {
      setIsDownloading(true);
      
      // Créer un lien vers le fichier CV
      const link = document.createElement('a');
      link.href = '/cv-adama-lo.pdf';
      link.download = 'CV_Adama_Lo.pdf';
      document.body.appendChild(link);
      
      link.click();
      
      // Nettoyer le DOM
      setTimeout(() => {
        document.body.removeChild(link);
        setIsDownloading(false);
        toast.success("Téléchargement du CV réussi !");
      }, 100);
    } catch (error) {
      setIsDownloading(false);
      toast.error("Échec du téléchargement, veuillez réessayer.");
      console.error("Erreur lors du téléchargement:", error);
    }
  };

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
                <Button 
                  className={cn(
                    "w-full flex items-center gap-2 justify-center relative overflow-hidden group",
                    isDownloading ? "bg-primary/80" : ""
                  )}
                  onClick={handleDownloadCV}
                  disabled={isDownloading}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Download size={18} className={isDownloading ? "animate-bounce" : ""} />
                    {isDownloading ? "Téléchargement..." : "Télécharger mon CV"}
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:h-full z-0"></span>
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
                  websiteUrl={exp.websiteUrl}
                />

                <div className="mt-8 glass-panel p-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="details">
                      <AccordionTrigger className="text-xl font-semibold">
                        Détails supplémentaires
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 mt-4">
                          <p>{exp.details}</p>
                          
                          <h4 className="font-medium mt-4">Compétences développées :</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {exp.id === 1 && (
                              <>
                                <li>Analyse et modélisation de données complexes</li>
                                <li>Conception et développement de tableaux de bord BI</li>
                                <li>Automatisation des processus de reporting</li>
                                <li>Communication avec les équipes métiers</li>
                                <li>Gestion de projet en environnement agile</li>
                              </>
                            )}
                            
                            {exp.id === 2 && (
                              <>
                                <li>Développement web frontend et backend</li>
                                <li>Intégration de chatbots et outils conversationnels</li>
                                <li>Gestion de bases de données web</li>
                                <li>Optimisation des performances web</li>
                                <li>Travail collaboratif en équipe de développement</li>
                              </>
                            )}
                            
                            {exp.id === 3 && (
                              <>
                                <li>Administration système et réseau</li>
                                <li>Gestion de bases de données SQL Server</li>
                                <li>Support utilisateur et résolution de problèmes</li>
                                <li>Documentation technique et fonctionnelle</li>
                                <li>Formation des utilisateurs sur les outils informatiques</li>
                              </>
                            )}
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </Layout>
  );
}
