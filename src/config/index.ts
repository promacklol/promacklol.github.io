import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Lenny Zachelin — Étudiant Développeur Logiciel C#",
  author: "Lenny Zachelin",
  description: "Étudiant en BTS SIO (SLAM) et développeur passionné par l'architecture logicielle. Expertise académique en PHP/Kotlin et spécialisation autodidacte en développement logiciel C# .NET.",
  lang: "fr",
  siteLogo: "/logo.png",
  navLinks: [
    { text: "Parcours", href: "#experience" },
    { text: "Projets", href: "#projects" },
    { text: "Profil", href: "#about" },
  ],
  socialLinks: [
    { text: "Github", href: "https://github.com/promacklol" },
  ],
  socialImage: "/og-image.png",
  canonicalURL: "https://promacklol.github.io",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Lenny Zachelin",
    specialty: "Développeur Logiciel C#",
    summary:
      "Futur diplômé en BTS SIO (SLAM). Je combine un socle académique rigoureux (PHP, SQL, Kotlin) avec une expertise autodidacte en C# pour concevoir des applications performantes et des outils système.",
    email: "lenny.zachelin@exemple.com",
  },
  experience: [
    {
      company: "Développement Indépendant & R&D",
      position: "Spécialisation Autodidacte",
      startDate: "2017",
      endDate: "Présent",
      summary: [
        "2024 - Présent : Spécialisation intensive en développement logiciel C# .NET (Sockets, Programmation asynchrone, Architecture logicielle).",
        "2020 - 2023 : Automatisation et scripting avancé via AutoIt v3.",
        "2017 - 2020 : Initiation au développement d'utilitaires et scripts d'automatisation en Batch.",
      ],
    },
    {
      company: "BTS SIO SLAM (Léonard de Vinci, Melun)",
      position: "Formation Académique",
      startDate: "2025",
      endDate: "2027",
      summary: [
        "Développement Web : Conception de solutions de gestion avec PHP.",
        "Bases de données : Conception, modélisation et administration via SQL.",
        "Mobile : Introduction au développement d'applications avec Kotlin.",
      ],
    },
  ],
  projects: [
    {
      name: "LennyClient (Config Manager)",
      summary: "Application console C# intégrant un système de persistance de données via le Registre Windows et une interface utilisateur CLI interactive.",
      linkPreview: "/",
      linkSource: "https://github.com/promacklol/LennyClient",
      image: "/project-client.png",
    },
  ],
  about: {
    description: `
      Ancien élève de Bac Pro Systèmes Numériques, je prépare actuellement mon BTS SIO option SLAM. 
      Ma force réside dans ma capacité à mener deux apprentissages de front : un cursus académique structuré et une spécialisation personnelle poussée sur le développement logiciel avec l'écosystème C#. 
      Passionné par la logique pure et les interactions de bas niveau, je cherche constamment à approfondir mes connaissances techniques et la conception applicative au-delà du cadre scolaire.
    `,
    image: "/profile.jpg",
  },
};
