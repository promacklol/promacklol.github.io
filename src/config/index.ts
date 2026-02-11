export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Lenny Zachelin",
    specialty: "Développeur C# & Backend",
    summary:
      "Étudiant en BTS SIO (SLAM) après un BAC Pro Systèmes Numériques. Passionné par le développement bas niveau et backend.",
    email: "ton-email@exemple.com",
  },
  experience: [
    {
      company: "Parcours Technique",
      position: "Évolution Langages",
      startDate: "2017",
      endDate: "Présent",
      summary: [
        "2017 - 2020 : Débuts et bases durant le BAC Pro Systèmes Numériques.",
        "2020 - 2023 : Automatisation et scripting avec Autoit v2.",
        "2023 : Transition vers des langages système et orientés objet (C++, Rust, C#).",
        "2024 - Présent : Spécialisation approfondie en C# dans le cadre du BTS SIO.",
      ],
    },
  ],
  projects: [
    {
      name: "Remote Access Tool (C#)",
      summary: "Développement d'un outil d'administration à distance en C# prévu pour l'été, focalisé sur les communications socket et la gestion système.",
      linkPreview: "/",
      linkSource: "https://github.com/promacklol",
      image: "/votre-image-projet.png",
    },
    {
      name: "Projet WinForms / .NET",
      summary: "Réalisation d'interfaces d'administration et de gestion de données en utilisant le framework .NET.",
      linkPreview: "/",
      linkSource: "https://github.com/promacklol",
      image: "/winforms-project.png",
    }
  ],
  about: {
    description: `
      Ancien élève de BAC Pro Systèmes Numériques, je poursuis actuellement mon cursus en BTS SIO option SLAM. 
      Mon parcours est marqué par une évolution constante : j'ai commencé par l'automatisation avec Autoit avant de plonger dans des langages plus robustes comme le C++, le Rust et enfin le C#, qui est aujourd'hui mon langage de prédilection. 
      Je m'intéresse particulièrement à la logique backend et aux interactions système.
    `,
    image: "/votre-photo-profil.jpg",
  },
};
