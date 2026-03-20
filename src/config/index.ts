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
    { text: "Github", href: "https://github.com/l3nnyz" },
  ],
  socialImage: "/og-image.png",
  canonicalURL: "https://l3nnyz.github.io",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Lenny Zachelin",
    specialty: "Développeur Logiciel C# ",
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
      name: "AutoRestoreSystem (.NET 9)",
      summary: "Utilitaire de sécurité automatisant la création et la rotation des points de restauration Windows via une interface C# pilotant PowerShell.",
      linkPreview: "/",
      linkSource: "https://github.com/l3nnyz/AutoRestoreSystem",
      image: "/project-restore.png",
    },
  ],
  about: {
    description: `
      Ancien élève de Bac Pro Systèmes Numériques, je prépare actuellement mon BTS SIO option SLAM. 
      Ma force réside dans la synergie entre mon cursus académique et une spécialisation personnelle approfondie. 
      Initialement formé aux fondamentaux de la programmation système via le C++, j'ai naturellement évolué vers l'écosystème C# pour la conception d'outils utilitaires performants. 
      Passionné par la logique pure et les interactions de bas niveau, je cherche constamment à lier rigueur technique et architecture logicielle moderne, au-delà du cadre scolaire.
    `,
    image: "/profile.jpg",
  },
};
