import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Lenny Zachelin — Développeur Backend",
  author: "Lenny Zachelin",
  description:
    "Développeur C# Backend, étudiant en BTS SIO (SLAM) après un BAC Pro Systèmes Numériques.",
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
    specialty: "Développeur C# Backend",
    summary:
      "Étudiant en BTS SIO (SLAM) issu d'un BAC Pro SN. En parallèle de mon cursus, je me spécialise en autodidacte sur C#, Rust et C++ tout en maîtrisant PHP/SQL en classe.",
    email: "lenny.zachelin@exemple.com",
  },
  experience: [
    {
      company: "Projets Personnels (En parallèle du BTS)",
      position: "Spécialisation Autodidacte",
      startDate: "2020",
      endDate: "Présent",
      summary: [
        "2024 - Présent : Spécialisation intensive en C# (Backend, Sockets, Système).",
        "2023 : Exploration des langages système avec C++ et Rust.",
        "2020 - 2023 : Automatisation et scripting via Autoit v2.",
      ],
    },
    {
      company: "BTS SIO SLAM (En classe)",
      position: "Formation Académique",
      startDate: "2025",
      endDate: "2027",
      summary: [
        "Web Backend : Développement de solutions de gestion avec PHP.",
        "Bases de données : Conception et administration via SQL.",
        "Mobile : Introduction au développement avec Kotlin.",
      ],
    },
    {
      company: "BAC Pro Systèmes Numériques",
      position: "Formation Initiale",
      startDate: "2017",
      endDate: "2020",
      summary: [
        "Apprentissage des bases fondamentales des systèmes informatiques et des réseaux.",
      ],
    },
  ],
  projects: [
    {
      name: "Remote Access Tool (C#)",
      summary: "Projet majeur prévu pour l'été 2026 : Développement d'un RAT complet en C# focalisé sur les communications Sockets.",
      linkPreview: "/",
      linkSource: "https://github.com/promacklol",
      image: "/project-rat.png",
    },
    {
      name: "WinForms Desktop Apps",
      summary: "Création d'outils d'administration et de gestion de données utilisant .NET et WinForms.",
      linkPreview: "/",
      linkSource: "https://github.com/promacklol",
      image: "/project-winforms.png",
    },
    {
      name: "Autoit Automation",
      summary: "Scripts d'automatisation système développés en autonomie entre 2020 et 2023.",
      linkPreview: "/",
      linkSource: "https://github.com/promacklol",
      image: "/project-autoit.png",
    },
  ],
  about: {
    description: `
      Ancien élève de BAC Pro Systèmes Numériques, je prépare actuellement mon BTS SIO option SLAM. 
      Ma force réside dans ma capacité à mener deux apprentissages de front : le cursus académique structuré (PHP, SQL, Kotlin) et une spécialisation personnelle poussée sur des technologies backend et système (C#, Rust, C++).
      Passionné par la logique pure et les interactions de bas niveau, je cherche constamment à approfondir mes connaissances en parallèle de mes études.
    `,
    image: "/profile.jpg",
  },
};
