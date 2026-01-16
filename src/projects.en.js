const projectsEn = [
    {
      id: "lical",
      title: "Lical",
      description: "Development of a management application as part of an internship at the Hôtel de la province Nord in New Caledonia.",
      presentation:
        "As part of an internship during my second year of MMI, I developed a web management application for a department of the province Nord in New Caledonia. Developing this application from scratch allowed me to strengthen my project management skills, especially in AGILE methodology, as well as my autonomy. Moreover, this internship enabled me to learn new languages (.Net and C#). Unfortunately, as the created application is internal to the province Nord's administration, I don't have a demo to present.",
      tags: ["C#", ".Net", "AGILE", "Internship"],
      images: [
        { src: "/Portfolio/images/lical.svg", alt: "lical", icon : true },
        { src: "/Portfolio/images/lical-liste.webp", alt: "list of people" },
        { src: "/Portfolio/images/lical-accueil.webp", alt: "homepage" },
        { src: "/Portfolio/images/lical-ajout.webp", alt: "add entity" },
      ],
      links: [
        { ref: "/Portfolio/docs/rapport_stage_maelig_lamarre.pdf", text: "Internship Report" },
      ],
      color: "#6aaa6a",
    },
    {
      id: "Air_hockey",
      title: "Air Hockey",
      description: "Creation of an Android application for Air Hockey",
      presentation:
        "During the second semester of my second year in MMI, I developed an Air Hockey application using Android Studio in a duo with a classmate. It allows 2 or 4 players and records games and players in a database for history and ranking. For this project, I handled the graphic/interface design and the database, strengthening my skills not only in mobile development but also in graphic design and UX.",
      tags: ["Android Studio", "Design", "Database", "GIT"],
      images: [
        { src: "/Portfolio/images/air-hockey.webp", alt: "Air Hockey" },
        { src: "/Portfolio/images/air-hockey-home.webp", alt: "Welcome screen" },
        { src: "/Portfolio/images/air-hockey-loby-2players.webp", alt: "Let's go - 2 players" },
        { src: "/Portfolio/images/air-hockey-game.webp", alt: "Game match" },
        { src: "/Portfolio/images/air-hockey-ranking.webp", alt: "Ranking" },
      ],
      links: [],
      color: "#cd80d3",
    },
    {
      id: "Back_office",
      title: "Back office - E-commerce",
      description: "Development of an e-commerce site back-office using React.js and PHP/Symfony.",
      presentation:
        "During the second semester of my second year in MMI, I developed an e-commerce site back-office in a duo with a classmate. This application, coded in React.js and Symfony, interacts with a REST API. This project enhanced my skills in React.js, Symfony, and versioning using Git.",
      tags: ["React.js", "Symfony", "REST API", "PHP", "GIT"],
      images: [
        { src: "/Portfolio/images/bo-desktop-list-articles.webp", alt: "back-office article list" },
        { src: "/Portfolio/images/bo-phone-list-articles.webp", alt: "back-office article list" },
        { src: "/Portfolio/images/bo-phone-add-article.webp", alt: "add an article" },
        { src: "/Portfolio/images/bo-desktop-update-article.webp", alt: "update a song" },
        { src: "/Portfolio/images/bo-phone-delete-article.webp", alt: "delete an article" },
      ],
      links: [
       // { ref: "", text: "Back-office Application" },
      ],
      color: "#7258dc",
    },
    {
      id: "Quik",
      title: "Quik",
      description: "Redesign of the graphic charter for a video editing application: Quik",
      presentation:
        <>As part of my first semester of the second year in MMI, I participated in a group of 5 people to redesign 
        the graphic charter of a video editing application: <a href='https://gopro.com/fr/fr/shop/quik-app-video-photo-editor' 
        target='_blank' rel="noreferrer" className="text-blue-500 font-bold" title='Quik'> Quik</a>. This redesign was conducted after a study of competitors and communication objectives. 
        It was accompanied by the creation of an explainer video.</>,
      tags: ["Communication strategy", "Graphic charter", "Motion design", "Explainer"],
      images: [
        { src: "/Portfolio/images/quik.svg", alt: "quik", icon : true },
        { src: "/Portfolio/images/quik-logos-sur-fond-couleur.webp", alt: "logo on colored background" },
        { src: "/Portfolio/images/quik-logos-sur-fond-photo.webp", alt: "logo on photo background" },
        { src: "/Portfolio/images/quik-elt-graphiques.webp", alt: "graphic elements" },
        { src: "/Portfolio/images/quik-mock-up-web.webp", alt: "web mockups" },
        { src: "/Portfolio/images/quik-mock-up-physiques.webp", alt: "physical mockups" },
      ],
      links: [
        { ref: "/Portfolio/docs/quik_plan_de_communication.pdf", text: "Communication Plan" },
        { ref: "/Portfolio/docs/quik_charte_graphique", text: "Graphic Charter" },
      ],
      color: "#FFD900",
    },
    {
      id: "D_une_halle_a_l_autre",
      title: "From One Hall to Another",
      description: "Creation of a VR and mobile puzzle game for the opening of the new Gourmet Halls in Laval.",
      presentation:
        "As part of my first semester of the third year in MMI, I developed a puzzle game within a group of 4 people. The game traces the history of the different halls in Laval for the opening of the new Gourmet Halls in Laval in late June 2025. This project was commissioned by Laval Patrimoine. For this project, I was further trained in the AGILE methodology, which we applied within my group. I started by working, alongside another member, on a detailed benchmark followed by the design and writing of the game scenario and puzzles. I also handled the creation of various 3D elements and the development of two riddles.",
      tags: [ "VR", "Unity", "3D", "Blender", "AGILE"],
      images: [
        //{ src: "/Portfolio/images/d-une-halle-a-l-autre.svg", alt: "from one hall to another" },
        { src: "/Portfolio/images/enigme-carte.webp", alt: "puzzle 1: the map" },
        { src: "/Portfolio/images/enigme-maquette.webp", alt: "puzzle 2: model" },
        { src: "/Portfolio/images/enigme-chemin.webp", alt: "puzzle 3: consumption circuit" },
      ],
      links: [
        { ref: "/Portfolio/docs/halles-benchmark.pdf", text: "Benchmark" },
        { ref: "/Portfolio/docs/halles-scenario.pdf", text: "Game Scenario" },

      ],
      color: "#b29972",
    },
    {
      id: "MMI_Next_Level",
      title: "MMI Next Level",
      description: "Development of a web application for finding post-MMI training programs.",
      presentation:
        "As part of my first semester of the third year in MMI, I developed, within a group of 15 people, an application that helps MMI students in their search for further studies to find the most suitable one. For this project, we conducted extensive research to list the different master's programs related to MMI. Following this research, I participated in interviews with alumni who had difficulty finding programs last year to identify key elements for our application. We then, with the developer team, built the application, which interacts with a REST API, using React.js and Node.js.",
      tags: [ "React.js", "Node.js", "REST API"],
      images: [
        { src: "/Portfolio/images/mmi-next-level.webp", alt: "MMI Next Level", icon : true },
        { src: "/Portfolio/images/mmi-next-level-wireframe-accueil.webp", alt: "mmi next level masters after mmi" },
        { src: "/Portfolio/images/mmi-next-level-wireframe-formation.webp", alt: "mmi next level, training" },
      ],
      links: [
        //{ ref: "", text: "MMI Next Level" },
      ],
      color: "#5e3472",
    },
    {
      id: "TicketFlutter",
      title: "TicketFlutter",
      description: "Development of a web and Android event ticketing application",
      presentation: "As part of my first semester of the third year in MMI, I developed, in a duo with my classmate, an event ticketing application. It features a client side, where users can like and purchase tickets for an event, and an admin side, which allows event creation, modification, deletion, and order tracking. This application was developed using Flutter and integrates a Supabase database.",
      tags: ["Dart", "Flutter", "Figma", "Supabase"],
      images: [
          { src: "/Portfolio/images/ticketflutter-connexion.webp", alt: "TicketFlutter - Login" },
          { src: "/Portfolio/images/ticketflutter-liste-evenements.webp", alt: "TicketFlutter - Event list" },
          { src: "/Portfolio/images/ticketflutter-evenement.webp", alt: "TicketFlutter - Event details" },
          { src: "/Portfolio/images/ticketflutter-ajout-evenement.webp", alt: "TicketFlutter - Add an event" }
      ],
      links: [
          { ref: "https://www.figma.com/design/S1MvUXuaBWTmEWKXrczknm/ticketflutter?node-id=0-1&t=zLFqJZnImYbSeOk8-1", text: "Figma" },
          { ref: "/Portfolio/docs/ticketflutter-guide-utilisation.pdf", text: "User Guide" },
          { ref: "https://github.com/Niesmer/ticket_flutter", text: "GitHub" }

      ],
      color: "#2D5AE2"
  }, 
  
  {
  "id": "ParcAIO",
  "title": "AIO Asset Management",
  "description": "Development of a web application for asset management during my internship at AIO",
  "presentation": "This project was carried out as part of my final-year internship at AIO, a company specialized in designing and implementing Lean tools to optimize industrial processes. In a context where monitoring sold equipment is essential to ensure long-term performance, management expressed the need for an asset management tool. \nThe objective was to centralize all information related to commercialized devices (particularly the karakuri) in order to notify customers of available updates, anticipate maintenance based on component wear, and enhance customer relations through proactive follow-up. \nThe project was developed in Next.js with an Airtable database, chosen by management for its flexibility, and integrates intuitive interfaces to facilitate access to key information. This work transformed a Lean challenge — reducing service interruptions and optimizing product lifecycle — into an efficient digital solution.",
  "tags": ["Next.js", "Leaflet", "Airtable", "Lean"],
  "images": [
    { "src": "/Portfolio/images/gestion-parc-carte-equipements.webp", "alt": "Asset Management - Equipment location map" },
    { "src": "/Portfolio/images/gestion-parc-details-equipement.webp", "alt": "Asset Management - Equipment details including information, buyer, logs, spare parts, and related service calls" },
    { "src": "/Portfolio/images/gestion-parc-liste-appels.webp", "alt": "Asset Management - List of service calls (coding, buyer, and company)" }
  ],
  "links": [],
  "color": "#0E5A94"
},

{
  "id": "FlotteAIO",
  "title": "AIO Fleet Management",
  "description": "Development of a web application for fleet management during my internship at AIO",
  "presentation": "This project was carried out as part of my final-year internship at AIO, a company specialized in designing and implementing Lean tools to optimize industrial processes. Some of the equipment prepared in-house is available for rental, and managing these mobile assets — particularly Flight Cases (protective containers for sensitive equipment) and AMRs (autonomous mobile robots used in production) — has become a major challenge. These assets, often moved between client sites, require enhanced visibility to reduce losses and ensure availability. For this reason, a tracking application was developed. \nThe fleet management application uses Next.js and Airtable to enable real-time tracking of equipment movements through an interactive map interface. The system centralizes location and usage data, facilitating logistical planning and rapid response to unforeseen events. This project demonstrates how digitalization can enhance Lean efficiency by improving asset traceability and mobile equipment management, ultimately contributing to greater operational performance.",
  "tags": ["Next.js", "Leaflet", "Airtable", "Lean"],
  "images": [
    { "src": "/Portfolio/images/gestion-flotte-accueil.webp", "alt": "Fleet Management - Fleet map" },
    { "src": "/Portfolio/images/gestion-flotte-liste-voyages.webp", "alt": "Fleet Management - List of trips" },
    { "src": "/Portfolio/images/gestion-flotte-ajout-lieu.webp", "alt": "Fleet Management - Location addition form with GPS search" },
    { "src": "/Portfolio/images/gestion-flotte-details-produit.webp", "alt": "Fleet Management - Product details" }
  ],
  "links": [],
  "color": "#FF5CCB"
}

  
  ];
  
  export default projectsEn;
  