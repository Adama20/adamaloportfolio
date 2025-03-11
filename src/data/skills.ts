
import {
  Database,
  BarChart,
  Code,
  BrainCircuit,
  Server,
  Languages,
  ScrollText,
  Briefcase
} from "lucide-react";

export const skillCategories = [
  {
    id: 1,
    title: "Data & BI",
    icon: BarChart,
    skills: [
      "Power BI",
      "ETL (Power Query)",
      "SQL Server",
      "MySQL",
      "Oracle",
      "PostgreSQL",
      "Data Visualisation"
    ]
  },
  {
    id: 2,
    title: "Programmation",
    icon: Code,
    skills: [
      "Python",
      "PL/SQL",
      "Java",
      "T-SQL",
      "VBA",
      "R",
      "HTML5/CSS3",
      "JavaScript"
    ]
  },
  {
    id: 3,
    title: "Intelligence Artificielle",
    icon: BrainCircuit,
    skills: [
      "Régression",
      "Clustering",
      "Classification",
      "CNN",
      "Mathématiques & Statistiques"
    ]
  },
  {
    id: 4,
    title: "Systèmes & Réseaux",
    icon: Server,
    skills: [
      "GNU/Linux",
      "Windows",
      "TCP/IP",
      "Ethernet",
      "LAN/WAN",
      "Routage",
      "Scripting (Bash, PowerShell)"
    ]
  },
  {
    id: 5,
    title: "Gestion de Projet",
    icon: Briefcase,
    skills: [
      "Méthode agile",
      "Trello",
      "Git",
      "Systèmes d'Information",
      "ERP Odoo"
    ]
  },
  {
    id: 6,
    title: "Langues",
    icon: Languages,
    skills: [
      "Français (Courant)",
      "Anglais (B1)"
    ]
  }
];

export const certifications = [
  {
    id: 1,
    title: "L'essentiel de Power BI",
    issuer: "LinkedIn Learning",
    date: "2023"
  },
  {
    id: 2,
    title: "L'essentiel de Power BI service",
    issuer: "LinkedIn Learning",
    date: "2023"
  },
  {
    id: 3,
    title: "Modéliser les données avec DAX",
    issuer: "Microsoft",
    date: "2023"
  },
  {
    id: 4,
    title: "Les fondements de Microsoft Fabric",
    issuer: "Microsoft",
    date: "2024"
  },
  {
    id: 5,
    title: "Les Fondements de Microsoft Azure",
    issuer: "Microsoft",
    date: "2023"
  }
];
