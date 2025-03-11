
import Layout from "@/components/layout";
import Section from "@/components/section";
import SkillCard from "@/components/skill-card";
import { education } from "@/data/education";
import { skillCategories, certifications } from "@/data/skills";
import { Award, Download, GraduationCap, Heart, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const interests = [
    { name: "Sport", details: "Football, Running, Vélo" },
    { name: "Voyage", details: "France, Sénégal, Espagne" },
    { name: "Association", details: "AMEES éducative" },
    { name: "Arts Visuels", details: "Photographie, Design" }
  ];

  return (
    <Layout>
      <Section title="À propos de moi" subtitle="Apprenez-en plus sur mon parcours et mes compétences">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-panel p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Briefcase size={20} className="text-primary" />
                Profil professionnel
              </h3>
              <div className="space-y-4">
                <p>
                  Ingénieur en data et informatique décisionnelle (MIAGE Bac+5), passionné par la
                  data et les défis technologiques, je mets mon expertise en ingénierie des données
                  et en BI au service de projets innovants, alliant analyse, synthèse et esprit d'équipe
                  pour transformer les données en leviers de performance.
                </p>
                <p>
                  J'aime apprendre de nouvelles technologies et relever de nouveaux défis. Ma passion pour la data
                  et les solutions technologiques me pousse à toujours rechercher les meilleures approches pour 
                  répondre aux problématiques métier.
                </p>
                <p>
                  Mon expérience en tant que Consultant Data et Ingénieur BI m'a permis de développer une solide compréhension
                  des enjeux métiers et des solutions technologiques adaptées. J'ai ainsi pu contribuer à l'amélioration
                  des processus décisionnels au sein de grandes entreprises comme la SNCF.
                </p>
              </div>
            </div>

            <div className="glass-panel p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <GraduationCap size={20} className="text-primary" />
                Parcours académique
              </h3>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.id} className="border-l-2 border-primary/30 pl-4 py-1">
                    <h4 className="font-medium">{edu.degree}</h4>
                    <p className="text-muted-foreground mt-1">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.location}, {edu.period}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Award size={20} className="text-primary" />
                Certifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert) => (
                  <div key={cert.id} className="border border-border rounded-lg p-3">
                    <h4 className="font-medium">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium mb-4 flex items-center gap-2">
                  <Heart size={18} className="text-primary" />
                  <span>Centres d'intérêt</span>
                </h3>
                <div className="space-y-4">
                  {interests.map((interest, index) => (
                    <div key={index} className="border-l-2 border-primary/30 pl-3">
                      <p className="font-medium">{interest.name}</p>
                      <p className="text-sm text-muted-foreground">{interest.details}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

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
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Langues</span>
                    <span className="font-medium">Français, Anglais</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6">
              <Button className="w-full flex items-center gap-2 justify-center">
                <Download size={18} />
                Télécharger mon CV
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="skills"
        title="Compétences techniques"
        subtitle="Mes domaines d'expertise et compétences techniques"
        className="bg-secondary/50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <SkillCard
              key={category.id}
              title={category.title}
              skills={category.skills}
              icon={<category.icon size={24} />}
            />
          ))}
        </div>
      </Section>
    </Layout>
  );
}
