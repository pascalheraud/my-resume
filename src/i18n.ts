import i18n, { Module, ModuleType } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
export type LanguagesType = "en" | "fr";

const resources = {
  fr: {
    translation: {
      ans_one: "{{count}} an",
      ans_other: "{{count}} ans",
      ans_en_one: "{{count}} an en {{year}}",
      ans_en_other: "{{count}} ans en {{year}}",
      mois_one: "{{count}} mois",
      mois_other: "{{count}} mois",
      mois_en_one: "{{count}} mois en {{year}}",
      mois_en_other: "{{count}} mois en {{year}}",
      semaines_en_one: "{{count}} semaine in {{year}}",
      semaines_en_other: "{{count}} semaines in {{year}}",
      jours_en_one: "{{count}} jour in {{year}}",
      jours_en_other: "{{count}} jours in {{year}}",
    },
  },
  en: {
    translation: {
      ans_one: "{{count}} yr",
      ans_other: "{{count}} yrs",
      ans_en_one: "{{count}} year in {{year}}",
      ans_en_other: "{{count}} years in {{year}}",
      mois_one: "{{count}} month",
      mois_other: "{{count}} months",
      mois_en_one: "{{count}} month in {{year}}",
      mois_en_other: "{{count}} months in {{year}}",
      semaines_en_one: "{{count}} week in {{year}}",
      semaines_en_other: "{{count}} weeks in {{year}}",
      jours_en_one: "{{count}} day in {{year}}",
      jours_en_other: "{{count}} days in {{year}}",
      Formation: "Education",
      "BAC E": "Baccalauréat",
      "DEA Informatique": "Master's degree in Computer Science",
      Français: "French",
      Anglais: "English",
      Italien: "Italian",
      Contact: "Contact",
      Langues: "Languages",
      "Compétences générales": "Soft Skills",
      "Ce CV en Français": "This resume in French",
      "Ce CV en Anglais": "This resume in English",
      "Mode Geek": "Geek Mode",
      "Mode Clair": "Light Mode",
      "Mode Sombre": "Dark Mode",
      "Orienté résultat": "Result oriented",
      Pragmatique: "Pragmatic",
      Curieux: "Curious",
      Rigoureux: "Rigorous",
      Sport: "Sport",
      Voyage: "Travel",
      "Chant/Musique": "Singing/Music",
      Bénévolat: "Volunteering",
      "CV de Pascal HERAUD": "Pascal HERAUD's resume",
      Expériences: "Experience",
      "Projets personnels": "Personal Projects",
      "Diminuer la police (Raccourci : -)": "Decrease font size (Shortcut: -)",
      "Agrandir la police (Raccourci : +)": "Increase font size (Shortcut: +)",
      "Mode Geek (Raccourci : G)": "Geek Mode (Shortcut: G)",
      "Mode Sombre (Raccourci : D)": "Dark Mode (Shortcut: D)",
      "Mode Clair (Raccourci : L)": "Light Mode (Shortcut: L)",
      "Ce CV en Français (Raccourci : F)":
        "This resume in French (Shortcut: F)",
      "Ce CV en Anglais (Raccourci : E)":
        "This resume in English (Shortcut: E)",
      "Développeur Senior Java/JS Fullstack":
        "Senior Java/JS Fullstack Developer",
      "Compétences techniques": "Technical Skills",
      " Associé / Architecte / Développeur / Devops":
        "Partner / Architect / Developer / DevOps",
      "Développement de sites de covoiturage en marque blanche":
        "Development of white-label carpooling websites",
      "Mise en place de l'architecture logicielle et matérielle":
        "Implementation of software and hardware architecture",
      "Architecture et conception de l'application":
        "Application architecture and design",
      "Migration postgreSQL depuis MySQL": "PostgreSQL migration from MySQL",
      "Conception d'un mécanisme de marque blanche":
        "Design of a white-label mechanism",
      "Conception et implémentation d'un moteur de matching de covoiturage":
        "Design and implementation of a carpooling matching engine",
      "Développement et conception d'un Dealer Locator en pur Javascript":
        "Development and design of a Dealer Locator in vanilla JavaScript",
      "Intégration d'APIs de partenaires (Sitra/Apidae, Covoiturage, SSO, ...)":
        "Integration of partner APIs (local tourisme database, Carpooling, SSO, ...)",
      "Développement d'un site de covoiturage pour le CNFPT. Intégration automatique des données des sessions":
        "Development of a carpooling website for a Government Employee Training Service. Automatic integration of data for sessions",
      "Fourniture d'APIs de covoiturage aux partenaires":
        "Release of carpooling APIs to partners",
      "Réalisation d'une App Android hybride avec Crosswalk":
        "Development of a hybrid Android app with Crosswalk",
      "Déploiement / Administration / Monitoring en production":
        "Deployment / Sysadmin / Production Monitoring",
      "Développement d'un site de covoiturage de lignes illicov.fr":
        "Development of the illicov.fr carpooling lines website",
      "Mise en place de procédures de développement":
        "Implementation of development procedures",
      "Modernisation et extension d'un site de covoiturage de lignes illicov.fr":
        "Modernization and extension of the illicov.fr carpooling lines website",
      "Modernisation de la stack front": "Modernization of the frontend stack",
      "Développement d'une application Mobile hybride iOS / Android":
        "Development of a hybrid iOS / Android mobile application",
      " Consultant / Développeur / Architecte / Formateur":
        "Consultant / Developer / Architect / Trainer",
      "Création et déploiements des packages de monitoring":
        "Creation and deployment of monitoring packages",
      "Développement des sondes Nagios pour monitoring des WebServices Kelkoo":
        "Development of Nagios probes for monitoring Kelkoo WebServices",
      "Packaging et mise en production": "Packaging and production deployment",
      "Référent technique pour l'Architecture et développements d'applications web":
        "Technical lead for Web application architecture and development",
      'Mise en place du "Cadre de cohérence Web" : Ensemble de composants et règles pour le développement d\'applications web':
        'Implementation of the "Web Consistency Framework": Set of components and rules for web application development',
      "Conception / Développement des composants":
        "Component design / development",
      "Coaching et formation des équipes de développement":
        "Coaching and training of development teams",
      "Contexte international avec les équipes d'HP Services (Grande-Bretagne, USA), ST Catagne (Italie)":
        "International context with HP Services teams (Great Britain, USA), ST Catagne (Italy)",
      "Développement du nouveau moteur d'indexation d'offres":
        "Development of the new offer indexing engine",
      "Développement et conception d'une architecture par messages":
        "Development and design of a message-based architecture",
      "Développement des indexations": "Development of indexation processes",
      "Développement d'un site de gestion de licences":
        "Development of a license management website",
      "Prototypage et expérimentation": "Prototyping and experimentation",
      "Interface avec les services métiers Cobol":
        "Interface with Cobol business services",
      "Architecture et développement du dossier client":
        "Architecture and development of the customer file",
      "Premiers développements d'une architecture multi-couches conçue pour la refonte d'une application web":
        "Initial developments of a multi-layer architecture designed for a web application overhaul",
      "Moteur de recherche de traces GPS pour le VTT":
        "GPS track search engine for mountain biking",
      "Robot d'indexation des traces GPS sur les principaux sites de partage de traces":
        "GPS track indexing robot on major sharing sites for tracks",
      "Moteur de recherche géographique de traces par une sélection sur une carte":
        "Geographic track search engine with map selection",
      "Site internet d'affichage des traces": "Tracks display website",
      "Outil d'aide à la rédaction des rapports de Graphothérapie":
        "Graphotherapy report writing assistance tool",
      "Création d'un prototype de site internet pour une amie graphothérapeute":
        "Creation of a website prototype for a graphotherapist friend",
      "Recueil des besoins et conception de l'interface du prototype":
        "Requirements gathering and interface design for the prototype",
      "Moteur de génération d'un rapport à partir d'un modèle word":
        "Report generation engine based on a Word template",
      "Projet en cours de finalisation et de commercialisation":
        "Project in finalization and commercialization phase",
      "Moteur de recherche de salles d'escalade": "Climbing gym search engine",
      "Création d'une application sans base de données pour se former sur Angular":
        "Creation of a database-free application for Angular training",
      "Utilisation d'un service open data des équipements sportifs de France":
        "Use of an open data service for French sports facilities",
      "Utilisation d'un service d'autocomplétion d'adresse en France (BAN)":
        "Use of an address autocompletion service in France (BAN)",
      "Composant de saisie d'adresse par autocomplétion sur les adresses françaises fournies par la BAN":
        "Address input component with autocompletion for French addresses provided by BAN",
      "Développement, test, documentation et publication du composant sur npmjs":
        "Development, testing, documentation, and publishing of the component on npmjs",
      "Composant de manipulation de dates": "Date manipulation component",
      "Développement, test, documentation et release du composant":
        "Development, testing, documentation, and release of the component",
      "Réalisation d'un parseur de données d'énergie":
        "Development of an energy data parser",
      "Réalisation d'un parser de données fournies par un producteur d'énergie pour les intégrer dans le site Electricity Maps":
        "Development of a data parser for energy producer data integration into Electricity Maps",
      Intérêts: "Interests",
      "Design et développement d'un moteur CORBA en C++":
        "Design and development of a CORBA engine in C++",
      "L'informatique étant une passion, il est essentiel pour moi d'explorer de nouvelles technologies et de participer au développement du logiciel libre":
        "Computers being a passion, it is essential for me to explore new technologies and participate in the development of free software",
      "Imprimer (Raccourci : Ctrl-P)": "Print (Shortcut: Ctrl-P)",
      "Stages en micro électronique (FPGAs)":
        "Internships in microelectronics (FPGAs)",
      " Technicien maintenance / Développeur":
        "Maintenance Technician / Developer",
      "Technicien de mainenance / Développeur progiciel de gestion d'aggrégats":
        "Maintenance Technician / Construction aggregate Management Software Developer",
      "Maintenance et installation sur site ":
        "On-site maintenance and installation",
      Développement: "Development",
      "R&D projet de recherche d'un Système Multi Agents":
        "R&D Multi-Agent System research project",
      "Développement d'une librairie de manipulation de graphes conceptuels":
        "Development of a conceptual graph manipulation library",
      "Développement d'interfaces graphiques":
        "Development of graphical interfaces",
      Télécharger: "Download",
      Perspectives: "Perspectives",
      Blockchain: "Blockchain",
      "Crypto monnaies": "Cryptocurrencies",
      "Réseaux de neurones / IA": "Neural networks / AI",
      "Secteur des énergies": "Energy sector",
      "Développement durable": "Sustainable development",
      "Innovation technologique": "Technological innovation",
      Cybersécurité: "Cybersecurity",
      "Fullstack (Java et/ou JS)": "Fullstack (Java and/or JS)",
      Formateur: "Trainer",
      "Développement de l'application web": "Web application development",
      "./3/Pascal-HERAUD-fr.pdf": "./3/Pascal-HERAUD-en.pdf",
      "Code source sur GitHub": "Source code on GitHub",
      "Conception / développement du site":"Design / development",
      "Référencement":"SEO",
      "Installation / déploiement sur serveur privé":"Installation / deployment on a private server",
      "Site de mise en relation avec des auxiliaires de vie":"Matching platform for home care assistants"
    },
  },
};

class MissingTranslationsBackend implements Module {
  type = "backend" as ModuleType;
  toSave = {} as Record<string, string>;

  create(_languages: string[], _namespace: string, key: string) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const translation = (resources.en.translation as any)[key];
    if (!translation) {
      this.toSave[key] = "";
      window.localStorage.setItem("i18n", JSON.stringify(this.toSave));
    }
  }
}

const missingTranslationsBackend = new MissingTranslationsBackend();

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(missingTranslationsBackend)
  .init({
    saveMissing: true,
    resources,
    supportedLngs: ["en", "fr"],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
