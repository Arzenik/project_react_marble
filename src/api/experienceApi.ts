// Création de données mockées pour remplacer l'API
const MOCK_EXPERIENCES: Experience[] = [
  {
    id: "1",
    title: "Randonnée dans les Alpes",
    description: "Profitez d'une randonnée guidée à travers les plus beaux paysages des Alpes françaises.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    location: "Chamonix, France",
    category: "Aventure",
    price: 120,
    rating: 4.8,
    availableDates: ["2023-07-15", "2023-07-22", "2023-07-29", "2023-08-05"],
    reviews: [
      { user: "Sophie L.", rating: 5, comment: "Une expérience inoubliable avec des guides passionnés!" },
      { user: "Thomas M.", rating: 4.5, comment: "Superbe randonnée, paysages à couper le souffle." }
    ]
  },
  {
    id: "2",
    title: "Cours de cuisine parisienne",
    description: "Apprenez à préparer des plats français authentiques avec un chef renommé dans un atelier parisien.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    location: "Paris, France",
    category: "Gastronomie",
    price: 95,
    rating: 4.6,
    availableDates: ["2023-07-10", "2023-07-17", "2023-07-24", "2023-08-01"],
    reviews: [
      { user: "Jean D.", rating: 4.5, comment: "Excellent cours, j'ai beaucoup appris!" },
      { user: "Marie F.", rating: 5, comment: "Le chef était incroyable et les recettes délicieuses." }
    ]
  },
  {
    id: "3",
    title: "Dégustation de vins en Bourgogne",
    description: "Découvrez les meilleurs vins de Bourgogne lors d'une dégustation guidée dans des caves historiques.",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    location: "Beaune, France",
    category: "Gastronomie",
    price: 150,
    rating: 4.9,
    availableDates: ["2023-07-08", "2023-07-15", "2023-07-22", "2023-07-29"],
    reviews: [
      { user: "Pierre L.", rating: 5, comment: "Une expérience exceptionnelle pour les amateurs de vin!" },
      { user: "Claire B.", rating: 4.8, comment: "Guide très compétent et sélection de vins remarquable." }
    ]
  },
  {
    id: "4",
    title: "Visite des châteaux de la Loire",
    description: "Explorez les magnifiques châteaux de la Loire avec un guide historien passionné.",
    image: "https://images.unsplash.com/photo-1705591929047-8044543b0756?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Vallée de la Loire, France",
    category: "Culture",
    price: 85,
    rating: 4.5,
    availableDates: ["2023-07-12", "2023-07-19", "2023-07-26", "2023-08-02"],
    reviews: [
      { user: "Michel P.", rating: 4.5, comment: "Visite très enrichissante, guide passionnant!" },
      { user: "Isabelle M.", rating: 4.5, comment: "Une journée merveilleuse à découvrir ces joyaux historiques." }
    ]
  },
  {
    id: "5",
    title: "Plongée dans la Méditerranée",
    description: "Découvrez les fonds marins de la Méditerranée lors d'une session de plongée guidée.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    location: "Nice, France",
    category: "Aventure",
    price: 130,
    rating: 4.7,
    availableDates: ["2023-07-14", "2023-07-21", "2023-07-28", "2023-08-04"],
    reviews: [
      { user: "Lucas R.", rating: 5, comment: "Expérience incroyable, moniteurs très professionnels!" },
      { user: "Emma S.", rating: 4.5, comment: "Eau cristalline et faune marine impressionnante." }
    ]
  },
  {
    id: "6",
    title: "Atelier de peinture à Montmartre",
    description: "Créez votre propre chef-d'œuvre lors d'un atelier de peinture dans le quartier artistique de Montmartre.",
    image: "https://images.unsplash.com/photo-1579762593175-20226054cad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    location: "Paris, France",
    category: "Art",
    price: 75,
    rating: 4.4,
    availableDates: ["2023-07-11", "2023-07-18", "2023-07-25", "2023-08-01"],
    reviews: [
      { user: "Camille D.", rating: 4.5, comment: "Moment très agréable, l'artiste était très pédagogue!" },
      { user: "Antoine B.", rating: 4.3, comment: "Ambiance chaleureuse et inspirante." }
    ]
  },
  {
    id: "7",
    title: "Balade en montgolfière en Provence",
    description: "Survolez les champs de lavande de Provence en montgolfière au lever du soleil.",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    location: "Provence, France",
    category: "Aventure",
    price: 220,
    rating: 4.9,
    availableDates: ["2023-07-16", "2023-07-23", "2023-07-30", "2023-08-06"],
    reviews: [
      { user: "Julien M.", rating: 5, comment: "Une expérience magique, à faire absolument!" },
      { user: "Aurélie P.", rating: 4.8, comment: "Vue imprenable et sensation de liberté incroyable." }
    ]
  },
  {
    id: "8",
    title: "Surf sur la côte basque",
    description: "Initiez-vous au surf ou perfectionnez votre technique avec des moniteurs expérimentés sur les vagues de la côte basque.",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    location: "Biarritz, France",
    category: "Sport",
    price: 80,
    rating: 4.6,
    availableDates: ["2023-07-13", "2023-07-20", "2023-07-27", "2023-08-03"],
    reviews: [
      { user: "Nicolas T.", rating: 4.5, comment: "Super cours, moniteurs patients et pédagogues!" },
      { user: "Sarah L.", rating: 4.7, comment: "J'ai réussi à me mettre debout dès la première séance!" }
    ]
  },
  {
    id: "9",
    title: "Balade à cheval en Camargue",
    description: "Découvrez les paysages sauvages de la Camargue lors d'une balade à cheval inoubliable.",
    image: "https://images.unsplash.com/photo-1450052590821-8bf91254a353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    location: "Camargue, France",
    category: "Nature",
    price: 110,
    rating: 4.7,
    availableDates: ["2023-07-09", "2023-07-16", "2023-07-23", "2023-07-30"],
    reviews: [
      { user: "Mathilde R.", rating: 5, comment: "Magnifique balade dans un cadre exceptionnel!" },
      { user: "Romain C.", rating: 4.5, comment: "Chevaux dociles et guide passionné par la région." }
    ]
  },
  {
    id: "10",
    title: "Cours de photographie à Paris",
    description: "Perfectionnez vos compétences en photographie lors d'un cours pratique dans les plus beaux quartiers de Paris.",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
    location: "Paris, France",
    category: "Art",
    price: 90,
    rating: 4.5,
    availableDates: ["2023-07-12", "2023-07-19", "2023-07-26", "2023-08-02"],
    reviews: [
      { user: "Vincent D.", rating: 4.5, comment: "Cours très instructif, j'ai beaucoup progressé!" },
      { user: "Léa B.", rating: 4.5, comment: "Le photographe partage ses astuces avec passion." }
    ]
  },
  {
    id: "11",
    title: "Atelier de fabrication de parfum à Grasse",
    description: "Créez votre propre parfum sous la direction d'un maître parfumeur dans la capitale mondiale du parfum.",
    image: "https://images.unsplash.com/photo-1505253668822-42074d58a7c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    location: "Grasse, France",
    category: "Art",
    price: 140,
    rating: 4.8,
    availableDates: ["2023-07-14", "2023-07-21", "2023-07-28", "2023-08-04"],
    reviews: [
      { user: "Charlotte M.", rating: 5, comment: "Expérience sensorielle unique, je suis repartie avec mon parfum personnalisé!" },
      { user: "Hugo L.", rating: 4.7, comment: "Atelier fascinant, le maître parfumeur est passionnant." }
    ]
  },
  {
    id: "12",
    title: "Excursion en kayak dans les calanques",
    description: "Pagayez à travers les magnifiques calanques de Marseille lors d'une excursion guidée en kayak.",
    image: "https://images.unsplash.com/photo-1544551763-92ab472cad5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    location: "Marseille, France",
    category: "Aventure",
    price: 95,
    rating: 4.7,
    availableDates: ["2023-07-15", "2023-07-22", "2023-07-29", "2023-08-05"],
    reviews: [
      { user: "Alexandre P.", rating: 4.8, comment: "Journée parfaite, eaux turquoise et paysages époustouflants!" },
      { user: "Julie R.", rating: 4.6, comment: "Guide sympathique et connaissant parfaitement la région." }
    ]
  },
  {
    id: "13",
    title: "Découverte des vignobles de Bordeaux",
    description: "Parcourez les prestigieux vignobles bordelais et dégustez les grands crus lors d'une excursion guidée.",
    image: "https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    location: "Bordeaux, France",
    category: "Gastronomie",
    price: 160,
    rating: 4.8,
    availableDates: ["2023-07-08", "2023-07-15", "2023-07-22", "2023-07-29"],
    reviews: [
      { user: "François M.", rating: 5, comment: "Journée exceptionnelle, dégustation de vins d'exception!" },
      { user: "Hélène D.", rating: 4.7, comment: "Guide passionné et châteaux magnifiques." }
    ]
  },
  {
    id: "14",
    title: "Balade en vélo dans Paris",
    description: "Découvrez Paris autrement lors d'une balade guidée à vélo à travers les quartiers emblématiques de la capitale.",
    image: "https://images.unsplash.com/photo-1583882279576-e3510b6548ef?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Paris, France",
    category: "Sport",
    price: 45,
    rating: 4.6,
    availableDates: ["2023-07-09", "2023-07-16", "2023-07-23", "2023-07-30"],
    reviews: [
      { user: "Olivier P.", rating: 4.5, comment: "Super façon de découvrir Paris, guide très sympa!" },
      { user: "Céline T.", rating: 4.7, comment: "Parcours bien pensé et anecdotes intéressantes." }
    ]
  },
  {
    id: "15",
    title: "Cours de pâtisserie française",
    description: "Apprenez à réaliser macarons, éclairs et autres délices de la pâtisserie française avec un chef pâtissier.",
    image: "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    location: "Lyon, France",
    category: "Gastronomie",
    price: 110,
    rating: 4.8,
    availableDates: ["2023-07-11", "2023-07-18", "2023-07-25", "2023-08-01"],
    reviews: [
      { user: "Nathalie B.", rating: 5, comment: "Cours très instructif, j'ai appris toutes les techniques!" },
      { user: "Laurent C.", rating: 4.7, comment: "Chef pédagogue et pâtisseries délicieuses." }
    ]
  },
  {
    id: "16",
    title: "Visite des grottes de Lascaux",
    description: "Explorez les célèbres grottes préhistoriques de Lascaux et leurs peintures rupestres exceptionnelles.",
    image: "https://images.unsplash.com/photo-1564324738080-bbbf8d6b4887?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    location: "Dordogne, France",
    category: "Culture",
    price: 70,
    rating: 4.7,
    availableDates: ["2023-07-13", "2023-07-20", "2023-07-27", "2023-08-03"],
    reviews: [
      { user: "Philippe G.", rating: 4.8, comment: "Visite fascinante, guide très érudit!" },
      { user: "Sylvie H.", rating: 4.6, comment: "Une plongée captivante dans la préhistoire." }
    ]
  },
  {
    id: "17",
    title: "Initiation au kitesurf",
    description: "Apprenez les bases du kitesurf avec des moniteurs professionnels sur les plages venteuses de Bretagne.",
    image: "https://images.unsplash.com/photo-1627068477565-3a66d5f76d5e?q=80&w=2570&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Quiberon, France",
    category: "Sport",
    price: 140,
    rating: 4.5,
    availableDates: ["2023-07-15", "2023-07-22", "2023-07-29", "2023-08-05"],
    reviews: [
      { user: "Maxime L.", rating: 4.6, comment: "Sensations garanties, moniteurs très pros!" },
      { user: "Julie V.", rating: 4.4, comment: "Excellente initiation, j'ai hâte de continuer." }
    ]
  },
  {
    id: "18",
    title: "Atelier de soufflage de verre",
    description: "Initiez-vous à l'art ancestral du soufflage de verre et créez votre propre œuvre avec un maître verrier.",
    image: "https://images.unsplash.com/photo-1597361304971-f9cfd6e154c7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Nancy, France",
    category: "Art",
    price: 120,
    rating: 4.6,
    availableDates: ["2023-07-10", "2023-07-17", "2023-07-24", "2023-07-31"],
    reviews: [
      { user: "Caroline D.", rating: 4.7, comment: "Expérience unique, le maître verrier est passionnant!" },
      { user: "Benoît M.", rating: 4.5, comment: "Atelier très instructif, fier de ma création." }
    ]
  },
  {
    id: "19",
    title: "Excursion au Mont Saint-Michel",
    description: "Découvrez la magie du Mont Saint-Michel, son abbaye millénaire et ses paysages changeants au rythme des marées.",
    image: "https://images.unsplash.com/photo-1671010496251-22eab06e3292?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Normandie, France",
    category: "Culture",
    price: 95,
    rating: 4.9,
    availableDates: ["2023-07-12", "2023-07-19", "2023-07-26", "2023-08-02"],
    reviews: [
      { user: "Stéphanie R.", rating: 5, comment: "Site exceptionnel, visite parfaitement organisée!" },
      { user: "David L.", rating: 4.8, comment: "Guide passionnant, connaissances historiques impressionnantes." }
    ]
  },
  {
    id: "20",
    title: "Descente en canoë des gorges du Verdon",
    description: "Pagayez dans les eaux turquoise des spectaculaires gorges du Verdon lors d'une descente guidée en canoë.",
    image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    location: "Provence, France",
    category: "Aventure",
    price: 85,
    rating: 4.8,
    availableDates: ["2023-07-14", "2023-07-21", "2023-07-28", "2023-08-04"],
    reviews: [
      { user: "Jérôme B.", rating: 5, comment: "Paysages à couper le souffle, expérience inoubliable!" },
      { user: "Sandrine M.", rating: 4.7, comment: "Journée parfaite, eau cristalline et nature préservée." }
    ]
  },
  {
    id: "21",
    title: "Atelier de création de parfum à Paris",
    description: "Créez votre propre parfum personnalisé sous la direction d'un parfumeur professionnel dans un atelier parisien.",
    image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    location: "Paris, France",
    category: "Art",
    price: 130,
    rating: 4.7,
    availableDates: ["2023-07-09", "2023-07-16", "2023-07-23", "2023-07-30"],
    reviews: [
      { user: "Élise T.", rating: 4.8, comment: "Atelier fascinant, j'ai adoré créer mon propre parfum!" },
      { user: "Marc D.", rating: 4.6, comment: "Expérience sensorielle unique, parfumeur très pédagogue." }
    ]
  },
  {
    id: "22",
    title: "Observation des baleines en Méditerranée",
    description: "Partez à la rencontre des cétacés de Méditerranée lors d'une sortie en mer avec des biologistes marins.",
    image: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    location: "Côte d'Azur, France",
    category: "Nature",
    price: 120,
    rating: 4.6,
    availableDates: ["2023-07-11", "2023-07-18", "2023-07-25", "2023-08-01"],
    reviews: [
      { user: "Christine F.", rating: 4.7, comment: "Moment magique, nous avons vu plusieurs dauphins!" },
      { user: "Paul G.", rating: 4.5, comment: "Équipage passionné et respectueux des animaux." }
    ]
  },
  {
    id: "23",
    title: "Cours de cuisine provençale",
    description: "Apprenez à préparer les spécialités provençales avec un chef local dans un mas traditionnel.",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    location: "Aix-en-Provence, France",
    category: "Gastronomie",
    price: 100,
    rating: 4.7,
    availableDates: ["2023-07-13", "2023-07-20", "2023-07-27", "2023-08-03"],
    reviews: [
      { user: "Sophie V.", rating: 4.8, comment: "Superbe expérience culinaire dans un cadre magnifique!" },
      { user: "Thierry M.", rating: 4.6, comment: "Chef sympathique et recettes délicieuses à refaire chez soi." }
    ]
  },
  {
    id: "24",
    title: "Vol en parapente au-dessus des Alpes",
    description: "Survolez les sommets alpins en parapente biplace avec un moniteur expérimenté pour une expérience inoubliable.",
    image: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    location: "Annecy, France",
    category: "Aventure",
    price: 150,
    rating: 4.9,
    availableDates: ["2023-07-15", "2023-07-22", "2023-07-29", "2023-08-05"],
    reviews: [
      { user: "Julien R.", rating: 5, comment: "Sensation de liberté incroyable, vue époustouflante!" },
      { user: "Émilie L.", rating: 4.8, comment: "Moniteur rassurant et professionnel, expérience magique." }
    ]
  },
  {
    id: "25",
    title: "Visite des caves à champagne",
    description: "Découvrez les secrets de fabrication du champagne lors d'une visite guidée des caves historiques suivie d'une dégustation.",
    image: "https://images.unsplash.com/photo-1590166774851-bc49b23a18fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    location: "Reims, France",
    category: "Gastronomie",
    price: 90,
    rating: 4.7,
    availableDates: ["2023-07-10", "2023-07-17", "2023-07-24", "2023-07-31"],
    reviews: [
      { user: "Catherine D.", rating: 4.8, comment: "Visite passionnante, dégustation excellente!" },
      { user: "Pierre S.", rating: 4.6, comment: "Guide très compétent, caves impressionnantes." }
    ]
  },
  {
    id: "26",
    title: "Atelier de poterie traditionnelle",
    description: "Initiez-vous à l'art de la poterie et réalisez vos propres créations sous les conseils d'un maître potier.",
    image: "https://images.unsplash.com/photo-1565373987291-4d7424dd9e59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    location: "Vallauris, France",
    category: "Art",
    price: 75,
    rating: 4.5,
    availableDates: ["2023-07-12", "2023-07-19", "2023-07-26", "2023-08-02"],
    reviews: [
      { user: "Martine L.", rating: 4.6, comment: "Atelier très enrichissant, potier passionné!" },
      { user: "Alain B.", rating: 4.4, comment: "Moment créatif très agréable, je recommande." }
    ]
  },
  {
    id: "27",
    title: "Safari photo en Camargue",
    description: "Partez à la découverte de la faune sauvage de Camargue (flamants roses, chevaux, taureaux) lors d'un safari photo guidé.",
    image: "https://images.unsplash.com/photo-1682686580391-615b1f28e5ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    location: "Camargue, France",
    category: "Nature",
    price: 85,
    rating: 4.8,
    availableDates: ["2023-07-14", "2023-07-21", "2023-07-28", "2023-08-04"],
    reviews: [
      { user: "Véronique M.", rating: 5, comment: "Journée exceptionnelle, guide naturaliste passionnant!" },
      { user: "Frédéric P.", rating: 4.7, comment: "Magnifiques observations, conseils photo très utiles." }
    ]
  }
];

// Simuler une réservation réussie
const MOCK_BOOKING_RESPONSE = {
  success: true,
  message: "Réservation confirmée",
  bookingId: "mock-booking-123"
};

export interface Experience {
    id: string;
    title: string;
    description: string;
    image: string;
    location: string;
    category: string;
    price: number;
    rating: number;
    availableDates?: string[];
    reviews?: Array<{
        user: string;
        rating: number;
        comment: string;
    }>;
}

export interface PaginatedResponse<T> {
    results: T[];
    total: number;
    page: number;
    totalPages: number;
}

export interface BookingRequest {
    experienceId: string;
    userName: string;
    userEmail: string;
    reservationDate: string;
    notes?: string;
}

export const experienceApi = {
    getAllExperiences: async (page = 1, limit = 9): Promise<PaginatedResponse<Experience>> => {
        // Simuler un délai réseau
        await new Promise(resolve => setTimeout(resolve, 300));
        
        const start = (page - 1) * limit;
        const end = start + limit;
        const paginatedResults = MOCK_EXPERIENCES.slice(start, end);

        return {
            results: paginatedResults,
            total: MOCK_EXPERIENCES.length,
            page: page,
            totalPages: Math.ceil(MOCK_EXPERIENCES.length / limit)
        };
    },

    getExperienceById: async (id: string): Promise<Experience> => {
        // Simuler un délai réseau
        await new Promise(resolve => setTimeout(resolve, 300));
        
        const experience = MOCK_EXPERIENCES.find(exp => exp.id === id);
        
        if (!experience) {
            throw new Error(`Experience with id ${id} not found`);
        }
        
        // S'assurer que toutes les propriétés requises sont présentes
        return {
            ...experience,
            reviews: experience.reviews || [],
            availableDates: experience.availableDates || []
        };
    },

    createBooking: async (booking: BookingRequest) => {
        // Simuler un délai réseau
        await new Promise(resolve => setTimeout(resolve, 500));
        
        return {
            ...MOCK_BOOKING_RESPONSE,
            booking
        };
    },

    getBestExperiences: async (limit = 3): Promise<Experience[]> => {
        // Simuler un délai réseau
        await new Promise(resolve => setTimeout(resolve, 300));
        
        return [...MOCK_EXPERIENCES]
            .sort((a, b) => b.rating - a.rating)
            .slice(0, limit);
    },

    getSimilarExperiences: async (experienceId: string, limit = 3): Promise<Experience[]> => {
        // Simuler un délai réseau
        await new Promise(resolve => setTimeout(resolve, 300));
        
        const currentExperience = MOCK_EXPERIENCES.find(exp => exp.id === experienceId);
        if (!currentExperience) return [];

        interface ExperienceWithScore extends Experience {
            similarityScore: number;
        }

        // Calculer un score de similarité pour chaque expérience
        const experiencesWithScores = MOCK_EXPERIENCES
            .filter(exp => exp.id !== experienceId)
            .map(exp => {
                let score = 0;

                // Même catégorie (40% du score)
                if (exp.category === currentExperience.category) {
                    score += 40;
                }

                // Prix similaire (30% du score)
                const priceDiff = Math.abs(exp.price - currentExperience.price);
                if (priceDiff <= 20) score += 30;
                else if (priceDiff <= 50) score += 20;
                else if (priceDiff <= 100) score += 10;

                // Note similaire (20% du score)
                const ratingDiff = Math.abs(exp.rating - currentExperience.rating);
                if (ratingDiff <= 0.5) score += 20;
                else if (ratingDiff <= 1) score += 15;
                else if (ratingDiff <= 1.5) score += 10;

                // Même région/ville (10% du score)
                if (exp.location.toLowerCase().includes(currentExperience.location.toLowerCase()) ||
                    currentExperience.location.toLowerCase().includes(exp.location.toLowerCase())) {
                    score += 10;
                }

                return { ...exp, similarityScore: score } as ExperienceWithScore;
            });

        // Trier par score de similarité et retourner les plus similaires
        return experiencesWithScores
            .filter(exp => exp.similarityScore >= 30) // Au moins 30% de similarité
            .sort((a, b) => b.similarityScore - a.similarityScore)
            .slice(0, limit)
            .map(({ similarityScore, ...exp }) => exp);
    }
};

export default experienceApi; 