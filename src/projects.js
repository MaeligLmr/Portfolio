const projectsFr = [
  {
    id: "lical",
    title: "Lical",
    description: "Développement d'une application de gestion dans le cadre d'un stage à l'Hôtel de la province Nord de Nouvelle Calédonie.",
    presentation:
      "Dans le cadre d'un Stage lors de ma deuxième année de MMI, j'ai développé une application web de gestion pour une direction de la province Nord de Nouvelle Calédonie. Le développement de cette application de A à Z m'a permis de renforcer mes compétences de gestion de projet, notamment en méthode AGILE, mais aussi mon autonomie. Surtout, ce stage m'a permis de me former à de nouveaux langages (.Net et C#). Malheureusement, l'application créée étant interne à l'administration de la province Nord, je n'ai pas de démo à présenter.",
    tags: ["C#", ".Net", "AGILE", "Stage"],
    images: [
      { src: "/Portfolio/images/lical.svg", alt: "lical", icon : true },
      { src: "/Portfolio/images/lical-liste.webp", alt: "liste de personnes" },
      { src: "/Portfolio/images/lical-accueil.webp", alt: "accueil" },
      { src: "/Portfolio/images/lical-ajout.webp", alt: "ajouter une entité" },
    ],
    links: [
      { ref: "/Portfolio/docs/rapport_stage_maelig_lamarre.pdf", text: "Rapport de Stage" },
    ],
    color: "#6aaa6a",
  },
  {
    id: "Air_hockey",
    title: "Air Hockey",
    description: "Réalisation d'une application Android de Air Hockey",
    presentation:
      "Dans le cadre de mon second semestre de deuxième année MMI, j'ai réalisé une application Android Studio de Air Hockey en duo avec un camarade. Elle permet de jouer à 2 ou 4 joueurs et enregistre les parties et les joueurs dans une base de données permettant d'avoir un historique et un classement. Pour ce projet, je me suis occupée de la partie graphisme/interfaces et de la base de données. Il m'a donc permis de renforcer mes compétences non seulement de développement mobile, mais aussi de création graphique et UX.",
    tags: ["Android Studio", "Graphisme", "BDD", "GIT"],
    images: [
      { src: "/Portfolio/images/air-hockey.webp", alt: "Air Hockey" },
      { src: "/Portfolio/images/air-hockey-home.webp", alt: "Bienvenue" },
      { src: "/Portfolio/images/air-hockey-loby-2players.webp", alt: "Let's go - 2 joueurs" },
      { src: "/Portfolio/images/air-hockey-game.webp", alt: "Match" },
      { src: "/Portfolio/images/air-hockey-ranking.webp", alt: "Classement" },
    ],
    links: [],
    color: "#cd80d3",
  },
  {
    id: "Back_office",
    title: "Back office - E-commerce",
    description: "Développement d'un back office de site e-commerce en React.js et PHP/Symphony.",
    presentation:
      "Dans le cadre de mon second semestre de deuxième année MMI, j'ai réalisé une application web de gestion back office de site E-commerce en duo avec un camarade. Cette application codée en React.js et Symphony manipule une API REST. Ce projet a renforcé mes compétences donc en React.js, Symphony, mais aussi en versioning via Git.",
    tags: ["React.js", "Symphony", "API REST", "PHP", "GIT"],
    images: [
      { src: "/Portfolio/images/bo-desktop-list-articles.webp", alt: "back-office liste articles" },
      { src: "/Portfolio/images/bo-phone-list-articles.webp", alt: "back-office liste articles" },
      { src: "/Portfolio/images/bo-phone-add-article.webp", alt: "ajouter un article" },
      { src: "/Portfolio/images/bo-desktop-update-article.webp", alt: "modifier une musique" },
      { src: "/Portfolio/images/bo-phone-delete-article.webp", alt: "supprimer un article" },
    ],
    links: [
     // { ref: "", text: "Application Back-office" },
    ],
    color: "#7258dc",
  },
  {
    id: "Quik",
    title: "Quik",
    description: "Refonte de la charte graphique d'une application de montage : Quik",
    presentation:
      <>Dans le cadre de mon premier semestre de deuxième année MMI, j'ai réalisé, au sein d'un groupe de 5 personnes, 
      la refonte de la charte graphique d'une application de montage : 
      <a href='https://gopro.com/fr/fr/shop/quik-app-video-photo-editor' target='_blank' rel="noreferrer" className="text-blue-600 font-bold" title='Quik'> Quik </a>. 
      Cette refonte a été faite à la suite d'une étude de la concurrence et des objectifs de communication. Elle 
      a également été accompagnée de la réalisation d'un explainer.</>,
    tags: ["Stratégie de communication", "Charte graphique", "Motion design", "Explainer"],
    images: [
      { src: "/Portfolio/images/quik.svg", alt: "quik", icon:true },
      { src: "/Portfolio/images/quik-logos-sur-fond-couleur.webp", alt: "logo sur fond couleur" },
      { src: "/Portfolio/images/quik-logos-sur-fond-photo.webp", alt: "logo sur fond photo" },
      { src: "/Portfolio/images/quik-elt-graphiques.webp", alt: "éléments graphiques" },
      { src: "/Portfolio/images/quik-mock-up-web.webp", alt: "mock ups web" },
      { src: "/Portfolio/images/quik-mock-up-physiques.webp", alt: "mock ups physiques" },
    ],
    links: [
      { ref: "/Portfolio/docs/quik_plan_de_communication.pdf", text: "Plan de communication" },
      { ref: "/Portfolio/docs/quik_charte_graphique.pdf", text: "Charte graphique" },
    ],
    color: "#FFD900",
  },
  {
    id: "D_une_halle_a_l_autre",
    title: "D'une Halle à l'autre",
    description: "Réalisation d'un jeu d'énigme VR et mobile à l'occasion de l'ouverture des nouvelles Halles Gourmandes à Laval.",
    presentation:
      "Dans le cadre de mon premier semestre de troisième année MMI, j'ai développé, au sein d'un groupe de 4 personnes, un jeu d'énigmes retraçant l'histoires des différentes halles à Laval à l'occasion de l'ouverture des Nouvelles Halles Gourmandes à Laval fin Juin 2025. Ce projet nous a été demandé par Laval Patrimoine, notre commanditaire. Pour ce projet, j'ai été formé davantage à la méthode AGILE que nous appliquons au sein de mon groupe. Pour ma part j'ai commencé par faire, en duo avec un autre membre de mon groupe, un benchmark détaillé poursuivi de la conception et rédaction du scénario de jeu et des énigmes. Je me suis également occupée de la réalisation des différents éléments 3D et du développement de deux énigmes.",
    tags: [ "VR", "Unity", "3D", "Blender", "AGILE"],
    images: [
      //{ src: "/Portfolio/images/d-une-halle-a-l-autre.svg", alt: "d'une halle à l'autre" },
      { src: "/Portfolio/images/enigme-carte.webp", alt: "énigme 1 : la carte" },
      { src: "/Portfolio/images/enigme-maquette.webp", alt: "énigme 2 : maquette" },
      { src: "/Portfolio/images/enigme-chemin.webp", alt: "énigme 3 : circuit de consommation" },
    ],
    links: [
      { ref: "/Portfolio/docs/halles-benchmark.pdf", text: "Benchmark" },
      { ref: "/Portfolio/docs/halles-scenario.pdf", text: "Scénario de jeu" },
    ],
    color: "#b29972",
  },
  {
    id: "MMI_Next_Level",
    title: "MMI Next Level",
    description: "Développement d'une application web de recherche de formations post-mmi",
    presentation:
      "Dans le cadre de mon premier semestre de troisième année MMI, j'ai développé, au sein d'un groupe de 15 personnes, une application aidant les MMI à la recherche d'une future formation à trouver celle qui leur convient. Pour ce projet, nous avons dû réaliser un gros travail de recherche afin de répertorier les différents masters en lien avec MMI. Suite à cette recherche, j'ai participé à une tournée d'interview d'anciens élèves ayant été dans la difficulté à trouver des formations l'an passé afin de nommer les éléments à mettre en avant dans notre application. Nous avons enfin, avec l'équipe de développeurs développé l'applicationqui manipule une API REST, en React.js et Node.js.",
    tags: [ "React.js", "Node.js", "API REST"],
    images: [
      { src: "/Portfolio/images/mmi-next-level.webp", alt: "MMI Next Level", icon : true },
      { src: "/Portfolio/images/mmi-next-level-wireframe-accueil.webp", alt: "mmi next level master après mmi" },
      { src: "/Portfolio/images/mmi-next-level-wireframe-formation.webp", alt: "mmi next level, formation" },
    ],
    links: [
     // { ref: "", text: "MMI Next Level" },
    ],
    color: "#5e3472",
  },
  {
    id: "TicketFlutter",
    title: "TicketFlutter",
    description: "Développement d'une application web et Android de billetterie d'événements",
    presentation: "Dans le cadre de mon premier semestre de troisième année en MMI, j'ai développé, en duo avec un camarade, une application de billetterie d'événements. Elle possède un côté client, où il est possible d'aimer et de commander des billets pour un événement, ainsi qu'un côté administrateur permettant de créer, modifier et supprimer des événements, ainsi que de consulter les commandes passées. Cette application a été développée avec Flutter et utilise une base de données Supabase.",
    tags: ["Dart", "Flutter", "Figma", "Supabase"],
    images: [
        { src: "/Portfolio/images/ticketflutter-connexion.webp", alt: "TicketFlutter - Connexion" },
        { src: "/Portfolio/images/ticketflutter-liste-evenements.webp", alt: "TicketFlutter - Liste des événements" },
        { src: "/Portfolio/images/ticketflutter-evenement.webp", alt: "TicketFlutter - Détail d'un événement" },
        { src: "/Portfolio/images/ticketflutter-ajout-evenement.webp", alt: "TicketFlutter - Ajouter un événement" }
    ],
    links: [
        { ref: "https://www.figma.com/design/S1MvUXuaBWTmEWKXrczknm/ticketflutter?node-id=0-1&t=zLFqJZnImYbSeOk8-1", text: "Figma" },
        { ref: "/Portfolio/docs/ticketflutter-guide-utilisation.pdf", text: "Guide d'utilisation" },
        { ref: "https://github.com/Niesmer/ticket_flutter", text: "GitHub" }

    ],
    color: "#2D5AE2"
}, 
  {
    id: "ParcAIO",
    title: "Gestion de Parc AIO",
    description: "Développement d'une application web de gestion de Parc dans le cadre de mon stage chez AIO",
    presentation: "Ce projet a été réalisé dans le cadre de mon stage de fin de cycle chez AIO chez AIO, une entreprise spécialisée dans la conception et la mise en œuvre d’outils Lean pour l’optimisation des processus industriels. Dans un contexte où le suivi des équipements vendus est essentiel pour garantir leur performance dans la durée, la direction a exprimé le besoin d’un outil de gestion de parc. \nL’objectif était de centraliser l’ensemble des informations liées aux dispositifs commercialisés (notamment les karakuri) afin de notifier les clients des mises à jour disponibles, d’anticiper la maintenance en fonction de l’usure des composants, et d’améliorer la relation client grâce à un suivi proactif.\nLe projet a été développé en Next.js avec une base de données Airtable choisie par la direction pour sa souplesse, et intègre des interfaces intuitives facilitant l’accès aux informations clés. Ce travail a permis de traduire une problématique Lean — la réduction des interruptions de service et l’optimisation du cycle de vie produit — en une solution numérique performante.",
    tags: ["Next.js", "Leaflet", "Airtable", "Lean"],
    images: [
        { src: "/Portfolio/images/gestion-parc-carte-equipements.webp", alt: "Gestion de Parc - Carte des équipements" },
        { src: "/Portfolio/images/gestion-parc-details-equipement.webp", alt: "Gestion de Parc - Détails d’un équipement, ses infos, son acheteurs, ses logs, ses spare parts et ses appels associés" },
        { src: "/Portfolio/images/gestion-parc-liste-appels.webp", alt: "Gestion de Parc - Liste des appels (codification, acheteur et entreprise" }
    ],
    links: [ ],
    color: "#0E5A94"
},

  {
    id: "FlotteAIO",
    title: "Gestion de Flotte AIO",
    description: "Développement d'une application web de gestion de Flotte dans le cadre de mon stage chez AIO",
    presentation: "Ce projet à été réalisé dans le cadre de mon Stage de fin de cycle chez AIO, une entreprise spécialisée dans la conception et la mise en œuvre d’outils Lean pour l’optimisation des processus industriels. Certains équipements préparés chez eux sont à louer et la gestion de ces équipements mobiles, notamment des Flight Cases (conteneurs protecteurs pour matériels sensibles) et des AMR (robots mobiles autonomes utilisés en production), est devenue un enjeu majeur. Ces matériels, souvent déplacés entre sites clients, nécessitent une visibilité accrue pour limiter les pertes et garantir leur disponibilité, et c’est pour cette raison qu’une application permettant de les suivre a été mise en place.\n L’application de gestion de flotte développée utilise Next.js et Airtable pour permettre le suivi en temps réel des déplacements de ces équipements via une interface cartographique interactive. Le système centralise les données de localisation et d’usage, facilitant la planification logistique et la réactivité face aux imprévus. Ce projet illustre comment la digitalisation peut renforcer l’efficacité Lean en améliorant la traçabilité et la gestion des actifs mobiles, contribuant ainsi à une meilleure performance opérationnelle.",
    tags: ["Next.js", "Leaflet", "Airtable", "Lean"],
    images: [
        { src: "/Portfolio/images/gestion-flotte-accueil.webp", alt: "Gestion de Flotte - Cart de la flotte" },
        { src: "/Portfolio/images/gestion-flotte-liste-voyages.webp", alt: "Gestion de Flotte - Liste des voyages" },
        { src: "/Portfolio/images/gestion-flotte-ajout-lieu.webp", alt: "Gestion de Flotte - Formulaire d’ajout de lieu avec recherche GPS" },
        { src: "/Portfolio/images/gestion-flotte-details-produit.webp", alt: "Gestion de Flotte - Détails d’un Produit" }
    ],
    links: [ ],
    color: "#FF5CCB"
},



];

export default projectsFr;
