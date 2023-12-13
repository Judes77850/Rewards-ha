async function start() {
  const searchTerms = [
    "Meilleurs films d'action",
"Films d'espionnage populaires",
"Acteurs de films de thriller",
"Critiques de films policiers",
"Bandes-annonces de films d'aventure",
"Réalisateurs de films de suspense",
"Films à suspense des années 90",
"Films d'action récents",
"Films d'espionnage cultes",
"Scénarios de films policiers",
"Histoires de films d'aventure",
"Analyse des films de thriller",
"Effets spéciaux dans les films d'action",
"Musiques de films d'espionnage",
"Évaluation des films policiers",
"Actrices de films d'aventure",
"Films à suspense des années 2000",
"Meilleures scènes d'action",
"Films d'espionnage en noir et blanc",
"Films policiers réalistes",
"Thèmes récurrents dans les films d'aventure",
"Tendances du thriller moderne",
"Références de films d'action",
"Décors de films d'espionnage",
"Techniques de réalisation dans les films policiers",
"Réflexions sur les films d'aventure",
"Comparaison des différents types de thriller",
"Évolution des effets spéciaux dans les films d'action",
"Héroïnes des films d'espionnage",
"Films policiers des années 80",
"Études sur les récits de films d'aventure",
"Influences culturelles dans les thrillers",
"Analyse psychologique des personnages de films d'action",
"Évolution du style des films d'espionnage",
"Éthique et morale dans les films policiers",
"Rocher",
"Paysages dans les films d'aventure",
"Symbolisme utilisé dans les thrillers",
"Comparaison entre les différents genres de films d'action",
"Films d'espionnage contemporains",
"Films policiers à twists",
"Archétypes des personnages dans les films d'aventure",
"Évolution de l'antagoniste dans les thrillers",
    
  ];

  for (let i = 0; i < searchTerms.length; i++) {
    let button = document.getElementById("onClick1");
    let link =
      "https://www.bing.com/search?q=" +
      encodeURIComponent(searchTerms[i]) +
      "&form=QBLH&sp=-1&pq=test&sc=10-4&qs=n&sk=&cvid=C18421E39EB741F7AF6EA71C4439BFFB&ghsh=0&ghacc=0&ghpl=";
    await openLink(link);
    button.style.backgroundColor = "green";
  }
}

async function start2() {
  const searchTerms = [
    "Nouveaux jeux vidéo",
"Technologies émergentes",
"Recettes de cuisine végétarienne",
"Exercices de méditation",
"Meilleurs livres de science-fiction",
"Conseils de jardinage écologique",
"Tendances de la mode printemps-été",
"Cours en ligne gratuits",
"Astrophotographie pour débutants",
"Conseils de productivité professionnelle",
"Actualités sur l'environnement",
"Guides de voyage hors des sentiers battus",
"Méthodes de gestion du stress",
"DIY décoration d'intérieur",
"Concerts et événements locaux",
"Applications de fitness populaires",
"Découvertes archéologiques récentes",
"Idées de cadeaux originaux",
"Séries TV à suspense",
"Cours de cuisine du monde",
"Projets artistiques DIY faciles",
"Actualités scientifiques récentes",
"Podcasts éducatifs intéressants",
"Innovations technologiques",
"Voyages en famille abordables",
"Conseils pour un sommeil de qualité",
"Concerts en ligne à ne pas manquer",
"Écriture créative pour débutants",
"Tendances en matière de bien-être",
"Projets de rénovation de maison",
"Émissions de télévision pour enfants éducatives",
"Ressources pour apprendre une nouvelle langue",
"Conseils pour le développement personnel",
    
  ];

  for (let i = 0; i < searchTerms.length; i++) {
    let button = document.getElementById("onClick1");
    let link =
      "https://www.bing.com/search?q=" +
      encodeURIComponent(searchTerms[i]) +
      "&form=QBLH&sp=-1&pq=test&sc=10-4&qs=n&sk=&cvid=C18421E39EB741F7AF6EA71C4439BFFB&ghsh=0&ghacc=0&ghpl=";
    await openLink(link);
    button.style.backgroundColor = "green";
  }
}

async function openLink(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      window.open(url, "ABC");
      resolve();
    }, 2000);
  });
}
