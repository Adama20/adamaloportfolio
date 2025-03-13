
export const projects = [
  {
    id: 1,
    title: "Application web et mobile de prédiction de la météo (IA)",
    description: "Application météorologique utilisant l'intelligence artificielle pour prédire les conditions météorologiques sur les campus universitaires avec une haute précision. Ce projet combine des modèles de Machine Learning avec des interfaces web et mobile intuitives. Les algorithmes d'IA analysent des données historiques et en temps réel pour fournir des prévisions personnalisées pour chaque campus. L'interface utilisateur permet d'afficher des données détaillées comme la température, l'humidité, la vitesse du vent, ainsi que des alertes météorologiques.",
    image: "/lovable-uploads/3c9fb4a1-90a5-4697-9052-ec0a2b86c4d1.png", 
    technologies: ["Python", "IA", "React", "React Native"],
    link: "/projects/meteo-campus",
    githubUrl: "https://github.com/Lucas-Matusiak/meteo-campus/tree/main",
    category: "principal"
  },
  {
    id: 2,
    title: "Optimisation de la performance des données SNCF",
    description: "Solution d'optimisation de la performance et de la gouvernance des données dans l'analyse des données de SNCF Voyageurs, en utilisant des technologies cloud et d'automatisation. Ce projet a permis d'améliorer significativement les temps de traitement et la qualité des données. J'ai travaillé sur la mise en place d'une architecture data moderne qui centralise les données provenant de multiples sources, tout en implémentant des contrôles de qualité automatisés. L'utilisation d'Azure a permis de créer un pipeline de données robuste et évolutif, facilitant ainsi l'analyse et la visualisation via Power BI.",
    image: "/images/sncf-data.jpg",
    technologies: ["Azure", "Power BI", "SQL", "Power Automate"],
    link: "/projects/sncf-data",
    category: "principal"
  },
  {
    id: 3,
    title: "Développement de solutions BI pour améliorer le suivi des actions stratégiques et opérationnelles du pôle QSE de SNCF Voyageurs",
    description: "Solution BI complète, nommée MAISON STRATÉGIQUE, permettant d'améliorer le suivi des actions stratégiques et opérationnelles du pôle QSE, facilitant la prise de décision et l'analyse de performance. Cette solution intègre des tableaux de bord interactifs et des rapports automatisés. Le projet a impliqué la création d'un modèle de données relationnel optimisé pour les requêtes analytiques, des visualisations avancées pour suivre les KPIs de sécurité et qualité, ainsi que des alertes automatiques pour les actions prioritaires. Cette solution permet aux dirigeants et aux équipes opérationnelles de suivre efficacement leurs objectifs et d'identifier rapidement les points d'amélioration.",
    image: "/images/maison-strategique.jpg",
    technologies: ["Power BI", "SQL", "DAX", "SharePoint"],
    link: "/projects/qse-actions",
    category: "principal"
  },
  {
    id: 4,
    title: "Analyse environnementale et écomobilité",
    description: "Rapport Power BI pour l'analyse environnementale et les initiatives d'écomobilité, permettant de suivre et d'optimiser l'impact écologique des activités de l'entreprise. Ce tableau de bord facilite le suivi des KPIs environnementaux et l'identification des actions d'amélioration. J'ai conçu des visualisations interactives pour mesurer l'empreinte carbone, la consommation d'énergie et les habitudes de déplacement des collaborateurs. Le tableau de bord inclut également des analyses prédictives pour anticiper les tendances et proposer des recommandations d'optimisation. Cette solution aide l'entreprise à atteindre ses objectifs de développement durable et à communiquer efficacement sur ses initiatives environnementales.",
    image: "/images/eco-analysis.jpg",
    technologies: ["Power BI", "DAX", "Data Analysis"],
    link: "/projects/eco-analysis",
    category: "principal"
  },
  {
    id: 5,
    title: "Application Power Apps pour la gestion des précurseurs d'accidents",
    description: "Participation au développement d'une application Power Apps pour la gestion des précurseurs d'accidents et la prévention des risques. Cette solution permet aux collaborateurs de signaler facilement les situations à risque et d'en assurer le suivi. L'application comprend un formulaire intuitif pour signaler les incidents, un système de notification automatique, et un tableau de bord de suivi pour les responsables sécurité. J'ai contribué à l'intégration avec SharePoint pour le stockage des données et à la configuration des flux Power Automate pour automatiser les processus de validation et d'escalade. Cette solution a permis de réduire significativement le temps de traitement des signalements et d'améliorer la réactivité face aux situations dangereuses.",
    image: "/images/power-apps-securite.jpg",
    technologies: ["Power Apps", "SharePoint", "Power Automate"],
    link: "/projects/power-apps-securite",
    category: "sncf"
  },
  {
    id: 6,
    title: "REVUE SÉCURITÉ - Tableau de bord de sécurité",
    description: "Refonte et optimisation du tableau de bord pour la revue de sécurité, offrant une vision globale et détaillée des indicateurs de sécurité au sein de SNCF Voyageurs. Ce projet a permis d'améliorer le suivi et l'analyse des incidents de sécurité. J'ai restructuré complètement le modèle de données en utilisant une architecture en étoile pour optimiser les performances des requêtes. Les nouvelles visualisations incluent des cartes de chaleur pour identifier les zones à risque, des graphiques de tendance pour suivre l'évolution des incidents, et des filtres contextuels pour une analyse approfondie. Le tableau de bord permet maintenant de comparer les indicateurs avec les objectifs et d'analyser les incidents par type, gravité, localisation et équipe responsable.",
    image: "/images/revue-securite.jpg",
    technologies: ["Power BI", "DAX", "SQL", "Power Query"],
    link: "/projects/revue-securite",
    category: "sncf"
  },
  {
    id: 7,
    title: "ELEC ACADÉMIE - Suivi des formations électriques",
    description: "Tableau de bord avancé pour le suivi des formations électriques, permettant de visualiser les parcours de formation, les certifications et les besoins en formation du personnel. Cet outil facilite la planification et le suivi des formations obligatoires. J'ai conçu un système qui intègre des données provenant de SharePoint, du SIRH et des plannings de formation pour offrir une vue complète du statut de chaque collaborateur. Le tableau de bord comprend un module d'alerte pour les certifications arrivant à expiration, un planificateur de sessions de formation, et des analyses détaillées des taux de réussite. Cette solution a permis de réduire de 40% le temps consacré à la planification des formations et d'augmenter de 25% le taux de conformité aux exigences réglementaires.",
    image: "/images/elec-academie.jpg",
    technologies: ["Power BI", "SharePoint", "Power Query", "DAX"],
    link: "/projects/elec-academie",
    category: "sncf"
  },
  {
    id: 8,
    title: "Rapport d'écomobilité",
    description: "Développement d'un rapport Power BI dédié aux initiatives d'écomobilité, permettant de suivre l'évolution des moyens de transport utilisés par les collaborateurs et l'impact environnemental associé. Ce tableau de bord aide à la prise de décision en matière de politique de transport. J'ai créé des visualisations interactives pour analyser les habitudes de déplacement, calculer les émissions de CO2 évitées, et mesurer l'adoption des alternatives de transport durable comme le vélo, le covoiturage ou les transports en commun. Le rapport inclut également des analyses comparatives par site et par département, ainsi que des projections d'économies potentielles. Cette solution a contribué à une augmentation de 30% de l'utilisation des transports durables et à une réduction mesurable de l'empreinte carbone de l'entreprise.",
    image: "/images/ecomobilite.jpg",
    technologies: ["Power BI", "DAX", "Excel"],
    link: "/projects/ecomobilite",
    category: "sncf"
  },
  {
    id: 9,
    title: "Analyse Financière de Total Energie",
    description: "Mise en place d'une solution BI complète pour l'analyse financière de Total Energie, utilisant Power BI et Azure Synapse. Ce projet académique a permis de créer un tableau de bord complet d'analyse financière avec des KPIs précis et des visualisations interactives. J'ai conçu un modèle de données multidimensionnel qui intègre les données financières, opérationnelles et de marché pour permettre une analyse approfondie des performances. Le tableau de bord comprend des analyses de rentabilité par segment d'activité, des prévisions financières basées sur des modèles statistiques, et des simulations de scénarios. Cette solution permet aux décideurs de comprendre rapidement les tendances financières et d'identifier les opportunités d'optimisation, tout en facilitant la production de rapports réglementaires.",
    image: "/images/total-energie.jpg",
    technologies: ["Power BI", "Azure Synapse", "SQL", "DAX"],
    link: "/projects/total-energie",
    category: "academique"
  },
  {
    id: 10,
    title: "Conception de Data Warehouse et Data Mart",
    description: "Projet de conception et d'implémentation d'un entrepôt de données et de data marts avec Talend. Ce projet a permis de mettre en pratique les concepts de modélisation dimensionnelle et d'ETL dans un contexte d'entreprise. J'ai analysé les besoins métiers pour définir les dimensions et les faits pertinents, puis conçu une architecture en trois couches (staging, ODS, data warehouse). Les processus ETL développés avec Talend incluent des mécanismes de validation, de transformation, et de chargement incrémental des données. Les data marts spécifiques ont été créés pour répondre aux besoins d'analyse des différents départements. Ce projet a démontré ma capacité à concevoir des solutions data warehouse performantes et à implémenter des processus ETL robustes et évolutifs.",
    image: "/images/data-warehouse.jpg",
    technologies: ["Talend", "SQL", "Data Modeling"],
    link: "/projects/data-warehouse",
    category: "academique"
  },
  {
    id: 11,
    title: "Identification des clés minimales en base de données",
    description: "Implémentation d'un algorithme permettant de trouver tous les identifiants minimaux des tables d'une base de données avec SQL et Python. Ce projet de recherche a permis de développer une solution optimisée pour l'analyse de structures de données complexes. J'ai conçu un algorithme qui analyse les dépendances fonctionnelles entre les attributs d'une table pour identifier tous les ensembles minimaux d'attributs pouvant servir de clé candidate. L'implémentation combine des requêtes SQL avancées pour analyser les données et des structures algorithmiques en Python pour la détection optimisée des clés minimales. Cette solution est particulièrement utile pour l'optimisation de schémas de bases de données, la normalisation, et la compréhension des relations entre données. Le projet a abouti à un outil qui peut être utilisé pour l'analyse automatique de bases de données existantes.",
    image: "/images/minimal-keys.jpg",
    technologies: ["SQL", "Python", "Algorithmes"],
    link: "/projects/minimal-keys",
    category: "academique"
  }
];
