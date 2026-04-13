'use strict';

/* =====================================================
   Culture Générale BTS SIO — app.js
   ===================================================== */

// ─────────────────────────── DONNÉES ───────────────────────────

const PERIODES = [
  {
    id: 'prehistoire',
    nom: 'Préhistoire',
    dates: 'avant 3 500 av. J.-C.',
    desc: "De l'apparition de l'Homme à l'invention de l'écriture. Peintures rupestres, outils, premiers mythes.",
    couleur: '#8D6E63',
  },
  {
    id: 'antiquite',
    nom: 'Antiquité',
    dates: '3 500 av. J.-C. – 476 ap. J.-C.',
    desc: 'Égypte, Grèce, Rome — naissance des grandes civilisations, de la philosophie, du droit et des arts.',
    couleur: '#C4A265',
  },
  {
    id: 'moyen-age',
    nom: 'Moyen Âge',
    dates: '476 – 1492',
    desc: 'Féodalité, christianisme dominant, art roman et gothique, épopées, essor des universités.',
    couleur: '#7B68EE',
  },
  {
    id: 'renaissance',
    nom: 'Renaissance',
    dates: '1492 – 1610',
    desc: "Humanisme, redécouverte de l'Antiquité, révolution artistique et scientifique, imprimerie.",
    couleur: '#E8853A',
  },
  {
    id: 'classicisme',
    nom: 'Classicisme (XVIIe)',
    dates: '1610 – 1715',
    desc: "Idéaux de clarté, d'ordre et de raison sous Louis XIV. Théâtre classique, jardins à la française.",
    couleur: '#4A90D9',
  },
  {
    id: 'lumieres',
    nom: 'Lumières (XVIIIe)',
    dates: '1715 – 1789',
    desc: "Raison, liberté, esprit critique et encyclopédisme. Philosophes remettent en question l'ordre établi.",
    couleur: '#F0B429',
  },
  {
    id: 'revolution',
    nom: 'Révolution & Empire',
    dates: '1789 – 1815',
    desc: "Rupture politique et sociale profonde. Naissance de la République, Droits de l'Homme, code Napoléon.",
    couleur: '#E84545',
  },
  {
    id: 'romantisme',
    nom: 'Romantisme & Réalisme',
    dates: '1815 – 1900',
    desc: "Exaltation du sentiment et de la nature face à l'industrialisation. Engagement social et réalisme critique.",
    couleur: '#52B788',
  },
  {
    id: 'belle-epoque',
    nom: 'Belle Époque & Modernisme',
    dates: '1900 – 1939',
    desc: "Progrès technique, avant-gardes artistiques, cubisme, surréalisme, jazz, montée des totalitarismes.",
    couleur: '#E066A8',
  },
  {
    id: 'apres-guerre',
    nom: 'Après-guerre & Trente Glorieuses',
    dates: '1939 – 1975',
    desc: "Reconstruction, existentialisme, décolonisation, société de consommation, Guerre froide.",
    couleur: '#5FA8D3',
  },
  {
    id: 'contemporain',
    nom: 'Époque contemporaine',
    dates: '1975 – aujourd\'hui',
    desc: "Mondialisation, révolution numérique, postmodernisme, questions environnementales et identitaires.",
    couleur: '#6366f1',
  },
];

const TYPES = [
  'Architecture', 'Cinéma', 'Littérature', 'Musique',
  'Peinture', 'Philosophie', 'Photographie', 'Sculpture',
  'Théâtre', 'Autre',
];

// Œuvres étudiées BTS SIO — L'animal
const DEFAULT_WORKS = [
  {
    id: 'd01',
    titre: 'La figuration animale dans les cartoons américains',
    auteur: 'Divers (Disney, Warner Bros…)',
    annee: 1940,
    type: 'Cinéma',
    periode: 'apres-guerre',
    theme: "L'animal comme miroir de l'humain",
    description: "Les dessins animés comme Bugs Bunny, Mickey ou Tom & Jerry utilisent les animaux humanisés pour faire rire et transmettre des valeurs. L'animal devient un miroir de nos comportements humains (avidité, malice, courage).",
  },
  {
    id: 'd02',
    titre: 'Le Roman de Renart',
    auteur: 'Anonyme',
    annee: 1180,
    type: 'Littérature',
    periode: 'moyen-age',
    theme: "L'animal comme critique sociale, Les vices humains",
    description: "Cycle médiéval où Renart, le goupil, rusé et trompeur, défie les puissants (souvent le lion). L'animal symbolise les vices et qualités humaines et sert à critiquer la société féodale.",
  },
  {
    id: 'd03',
    titre: 'Dialogues de bêtes',
    auteur: 'Colette',
    annee: 1904,
    type: 'Littérature',
    periode: 'belle-epoque',
    theme: "La sensibilité animale, Le regard ironique sur l'homme",
    description: "Conversations entre son chien Toby et son chat Kiki-la-Doucette. Met en valeur la sensibilité animale et leur regard ironique sur l'homme.",
  },
  {
    id: 'd04',
    titre: 'La Métamorphose',
    auteur: 'Franz Kafka',
    annee: 1915,
    type: 'Littérature',
    periode: 'belle-epoque',
    theme: "L'exclusion sociale, L'animalité comme métaphore du rejet",
    description: "Gregor Samsa se réveille transformé en insecte. L'animalité devient métaphore de l'exclusion sociale et du rejet familial et professionnel.",
  },
  {
    id: 'd05',
    titre: 'Princesse Mononoké',
    auteur: 'Hayao Miyazaki',
    annee: 1997,
    type: 'Cinéma',
    periode: 'contemporain',
    theme: "La nature, La spiritualité, L'opposition homme/nature",
    description: "Les esprits animaux et la nature s'opposent à la violence industrielle des hommes. L'animal incarne la force vitale et spirituelle de la nature.",
  },
  {
    id: 'd06',
    titre: 'La Terre',
    auteur: 'Émile Zola',
    annee: 1887,
    type: 'Littérature',
    periode: 'romantisme',
    theme: "La dépendance réciproque homme/animal, Le monde rural",
    description: "Décrit la vie paysanne, où l'animal (le bœuf, le cheval) est outil de travail mais aussi compagnon. Montre la dépendance réciproque homme/animal dans le monde rural.",
  },
  {
    id: 'd07',
    titre: 'Cannibale',
    auteur: 'Didier Daeninckx',
    annee: 1998,
    type: 'Littérature',
    periode: 'contemporain',
    theme: "Le colonialisme, La déshumanisation, Le regard colonial",
    description: "Des Kanaks racontent avoir été trompés et exhibés comme « cannibales » au côté d'animaux lors de l'Exposition coloniale. L'homme est réduit à l'état d'animal par le regard colonial.",
  },
  {
    id: 'd08',
    titre: 'Le Lion',
    auteur: 'Joseph Kessel',
    annee: 1958,
    type: 'Littérature',
    periode: 'apres-guerre',
    theme: "L'amitié homme/animal, La sauvagerie, La domestication",
    description: "L'histoire d'une petite fille et de son lion apprivoisé en Afrique. L'amitié homme/animal, mais aussi la frontière fragile entre sauvagerie et domestication.",
  },
  {
    id: 'd09',
    titre: 'Croc-Blanc',
    auteur: 'Jack London',
    annee: 1906,
    type: 'Littérature',
    periode: 'belle-epoque',
    theme: "L'instinct animal vs civilisation, La sauvagerie et l'apprivoisement",
    description: "Le parcours d'un loup hybride, entre violence sauvage et apprivoisement par l'homme. Réflexion sur l'instinct animal face à la civilisation.",
  },
  {
    id: 'd10',
    titre: 'Flow',
    auteur: 'Gints Zilbalodis',
    annee: 2024,
    type: 'Cinéma',
    periode: 'contemporain',
    theme: "La résilience, La coopération inter-espèces, L'adaptation",
    description: "Film d'animation où un chat solitaire navigue un monde englouti, accompagné d'autres animaux. Le chat devient un guide silencieux, symbole de résilience, d'adaptation et de coopération interespèces.",
  },
  {
    id: 'd11',
    titre: 'Le Règne animal',
    auteur: 'Thomas Cailley',
    annee: 2023,
    type: 'Cinéma',
    periode: 'contemporain',
    theme: "L'altérité, La transformation, Le lien familial",
    description: "Des humains mutent en créatures hybrides animales dans une société en mutation. L'animalité devient métaphore de l'altérité, de la transformation et du lien familial.",
  },
  {
    id: 'd12',
    titre: 'Melancholia',
    auteur: 'Victor Hugo',
    annee: 1853,
    type: 'Littérature',
    periode: 'romantisme',
    theme: "L'exploitation, La machine dévoreuse, L'innocence enfantine",
    description: "Poème dénonçant le travail des enfants à l'ère industrielle. L'animalité est suggérée dans la métaphore du « monstre hideux » : la machine dévore comme une bête, opposée à l'innocence enfantine.",
  },
  {
    id: 'd13',
    titre: 'Fresques de la grotte de Lascaux',
    auteur: 'Artistes préhistoriques (anonymes)',
    annee: -17000,
    type: 'Peinture',
    periode: 'prehistoire',
    theme: "Le sacré, La spiritualité, La mémoire collective",
    description: "Peintures pariétales représentant aurochs, chevaux, cerfs et autres animaux préhistoriques. L'animalité est sacrée, source de vie, de spiritualité et de mémoire collective.",
  },
  {
    id: 'd14',
    titre: 'La Ferme des animaux',
    auteur: 'George Orwell',
    annee: 1945,
    type: 'Littérature',
    periode: 'apres-guerre',
    theme: "La lutte sociale, La naïveté politique, La corruption du pouvoir",
    description: "Roman allégorique où les animaux se révoltent contre les humains, puis reproduisent les mêmes oppressions. L'animalité incarne la lutte sociale, la naïveté politique et la corruption du pouvoir.",
  },
  {
    id: 'd15',
    titre: 'Grizzly Man',
    auteur: 'Werner Herzog',
    annee: 2005,
    type: 'Cinéma',
    periode: 'contemporain',
    theme: "La nature sauvage, La fascination, L'indomptable",
    description: "Documentaire sur Timothy Treadwell, qui vivait parmi les grizzlys jusqu'à sa mort tragique. L'ours devient miroir de la nature sauvage, à la fois majestueuse et indomptable.",
  },
  {
    id: 'd16',
    titre: 'Fables',
    auteur: 'Jean de La Fontaine',
    annee: 1668,
    type: 'Littérature',
    periode: 'classicisme',
    theme: "La morale, La ruse, Le pouvoir, La sagesse",
    description: "Recueil de plus de 240 fables inspirées d'Ésope et de Phèdre. L'animal devient miroir de la société humaine : la ruse (le renard), la naïveté (l'agneau), la force (le lion), la sagesse (la tortue).",
  },
  {
    id: 'd17',
    titre: "Pourquoi les ânes nous font du bien",
    auteur: 'Isabelle Taubes',
    annee: null,
    type: 'Autre',
    periode: 'contemporain',
    theme: "Le bien-être, La thérapie, La médiation animale",
    description: "Article sur les bienfaits psychologiques et thérapeutiques de l'âne. L'âne comme médiateur du bien-être humain.",
  },
  {
    id: 'd18',
    titre: "Voyage avec un âne dans les Cévennes",
    auteur: 'R.L. Stevenson',
    annee: 1879,
    type: 'Littérature',
    periode: 'romantisme',
    theme: "La lenteur, La patience, La proximité avec l'animal",
    description: "Récit de voyage où l'âne est un compagnon têtu mais attachant. L'animal incarne la patience, la lenteur et la proximité.",
  },
  {
    id: 'd19',
    titre: 'Antoinette dans les Cévennes',
    auteur: 'Caroline Vignal',
    annee: 2020,
    type: 'Cinéma',
    periode: 'contemporain',
    theme: "La liberté intérieure, L'émotion, Le compagnon de route",
    description: "Une femme en randonnée avec un âne dans un paysage naturel. L'âne comme compagnon de route, miroir des émotions humaines et symbole de liberté intérieure.",
  },
  {
    id: 'd20',
    titre: "La sirène à travers les âges",
    auteur: 'Kiko Herrero',
    annee: null,
    type: 'Autre',
    periode: 'contemporain',
    theme: "L'imaginaire, Les fantasmes et peurs, La créature hybride",
    description: "Étude sur l'évolution de cette créature hybride (femme/animal marin). La sirène est un animal imaginaire qui reflète nos fantasmes et nos peurs.",
  },
  {
    id: 'd21',
    titre: 'Le Bestiaire divin de Guillaume, clerc de Normandie',
    auteur: 'Guillaume le Clerc / éd. M.C. Hippeau',
    annee: 1210,
    type: 'Littérature',
    periode: 'moyen-age',
    theme: "Le symbolisme religieux, La morale, L'animal divin",
    description: "Compilation médiévale où chaque animal, réel ou imaginaire, symbolise une leçon religieuse. L'animal comme langage symbolique du divin.",
  },
  {
    id: 'd22',
    titre: 'Sirène argentine',
    auteur: 'Ève Bertini',
    annee: 2025,
    type: 'Peinture',
    periode: 'contemporain',
    theme: "L'hybridité, L'imaginaire, L'émotion",
    description: "Illustration fantastique d'une sirène jouant de la musique sous l'eau, entourée de poissons et d'éléments marins. La sirène comme figure hybride entre animal et humain, révélatrice de notre imaginaire et de nos émotions.",
  },
  {
    id: 'd23',
    titre: 'Les Fleurs du mal — « Le Chat » (poème 34)',
    auteur: 'Charles Baudelaire',
    annee: 1857,
    type: 'Littérature',
    periode: 'romantisme',
    theme: "Le mystère, Le désir, La beauté intérieure, Le chat énigmatique",
    description: "Poème lyrique où le chat est décrit comme un être mystérieux, sensuel et presque sacré. Le chat comme figure énigmatique, miroir du désir et de la beauté intérieure.",
  },
  {
    id: 'd24',
    titre: '« Dans la tête des chats » — Philosophie Magazine',
    auteur: 'Octave Lamargnac-Matheron',
    annee: 2023,
    type: 'Autre',
    periode: 'contemporain',
    theme: "L'intelligence animale, La conscience, L'autonomie du chat",
    description: "Article sur la perception, l'intelligence et les comportements des chats. Le chat comme être conscient, autonome et porteur d'une forme d'intelligence animale.",
  },
  {
    id: 'd25',
    titre: 'Le Chat blanc',
    auteur: 'Pierre Bonnard',
    annee: 1894,
    type: 'Peinture',
    periode: 'belle-epoque',
    theme: "L'animal domestique, Le regard subjectif, La présence affective",
    description: "Peinture humoristique où le chat occupe une place centrale, presque disproportionnée, dans un décor minimaliste. Le chat comme figure dominante et expressive, révélateur du regard humain sur l'animal domestique.",
  },
  {
    id: 'd26',
    titre: 'Sans famille',
    auteur: 'Hector Malot',
    annee: 1878,
    type: 'Littérature',
    periode: 'romantisme',
    theme: "Le compagnon affectif, La survie, L'enfance nomade",
    description: "Roman sur les aventures d'un enfant accompagné d'animaux dressés dans un spectacle ambulant. L'animal comme compagnon affectif et partenaire de survie dans une vie nomade.",
  },
  {
    id: 'd27',
    titre: "Les Mémoires d'un dompteur",
    auteur: 'François Bidel',
    annee: 1888,
    type: 'Littérature',
    periode: 'romantisme',
    theme: "Le fauve, La maîtrise, Le spectacle, La fascination",
    description: "Récit autobiographique sur le travail avec les fauves dans le monde du cirque. L'animal comme figure sauvage à dompter, entre fascination, maîtrise et mise en scène.",
  },
  {
    id: 'd28',
    titre: 'Affiche « Monsieur Charles avec ses merveilleux lions habillés »',
    auteur: 'Ch. Krone et fils',
    annee: null,
    type: 'Autre',
    periode: 'belle-epoque',
    theme: "Le spectacle, L'humanisation de l'animal, Le divertissement",
    description: "Affiche publicitaire montrant des lions costumés dans un spectacle. L'animal comme objet du spectacle, humanisé et détourné pour divertir le public.",
  },
  {
    id: 'd29',
    titre: "L'animal et son biographe (3e partie)",
    auteur: 'Stéphanie Hochet',
    annee: 2020,
    type: 'Littérature',
    periode: 'contemporain',
    theme: "La mémoire animale, La singularité, La biographie",
    description: "Essai contemporain qui interroge la manière dont les écrivains racontent la vie des animaux. L'animal comme sujet digne de mémoire, dont la biographie révèle une singularité et une valeur propre.",
  },
  {
    id: 'd30',
    titre: 'Les Contes du chat perché',
    auteur: 'Marcel Aymé',
    annee: 1934,
    type: 'Littérature',
    periode: 'belle-epoque',
    theme: "La complicité homme/animal, La morale, L'imaginaire enfantin",
    description: "Recueil de récits pour enfants où deux petites filles dialoguent avec des animaux qui parlent. L'animal comme figure familière et complice, humanisé pour transmettre une morale et stimuler l'imaginaire.",
  },
  {
    id: 'd31',
    titre: 'Le Marché aux chevaux',
    auteur: 'Rosa Bonheur',
    annee: 1853,
    type: 'Peinture',
    periode: 'romantisme',
    theme: "La puissance animale, Le naturalisme, La vitalité",
    description: "Grande toile réaliste représentant la vente de chevaux à Paris, saisissant la puissance et la nervosité des animaux au milieu des hommes. L'animal comme force brute et majestueuse, observé avec précision naturaliste.",
  },
  {
    id: 'd32',
    titre: 'Les Contemplations — « Mélancholia »',
    auteur: 'Victor Hugo',
    annee: 1856,
    type: 'Littérature',
    periode: 'romantisme',
    theme: "L'exploitation animale, L'injustice, La souffrance",
    description: "Poème dénonçant la souffrance des chevaux de trait, écrasés par le travail et la brutalité humaine. L'animal comme victime de l'exploitation, miroir de l'injustice sociale et de la cruauté des hommes.",
  },
  {
    id: 'd33',
    titre: 'Articles bêtes — Dictionnaire philosophique',
    auteur: 'Voltaire',
    annee: 1764,
    type: 'Philosophie',
    periode: 'lumieres',
    theme: "La condition animale, La sensibilité, La frontière homme/bête",
    description: "Voltaire s'interroge sur la condition animale et la frontière entre l'homme et la bête. L'animal comme être sensible, dont la souffrance oblige à repenser la morale et la raison humaine.",
  },
  {
    id: 'd34',
    titre: 'Croire aux fauves',
    auteur: 'Nastassja Martin',
    annee: 2019,
    type: 'Littérature',
    periode: 'contemporain',
    theme: "Le sauvage, La fascination, Les limites de l'homme face à la nature",
    description: "Récit autour des fauves, mettant en avant la fascination et la peur qu'ils inspirent. L'animal comme incarnation du sauvage, force indomptable qui confronte l'homme à ses limites.",
  },
  {
    id: 'd35',
    titre: 'Peintures des grottes de Chauvet',
    auteur: 'Artistes préhistoriques (anonymes)',
    annee: -36000,
    type: 'Peinture',
    periode: 'prehistoire',
    theme: "Le sacré, L'art primitif, La spiritualité des origines",
    description: "Représentations pariétales de lions, chevaux, bisons et autres animaux tracés avec une maîtrise étonnante (~36 000 av. J.-C.). L'animal comme figure sacrée au cœur des premières formes d'art humain.",
  },
  {
    id: 'd36',
    titre: 'Chien et renard',
    auteur: 'Bruno Andreas Liljefors',
    annee: 1885,
    type: 'Peinture',
    periode: 'romantisme',
    theme: "La prédation, La nature, Les lois animales",
    description: "Peinture naturaliste montrant la tension entre un chien et un renard dans un paysage nordique. L'animal comme acteur d'une scène de prédation, inscrit dans la nature et ses lois.",
  },
  {
    id: 'd37',
    titre: 'La grande Ourse',
    auteur: 'Maêlys Adhémar',
    annee: null,
    type: 'Littérature',
    periode: 'contemporain',
    theme: "Le mythe, L'initiation, La figure cosmique et poétique",
    description: "Texte où l'animal mythique de la constellation devient métaphore poétique et récit initiatique. L'animal comme figure cosmique et imaginaire, reliant l'humain au ciel et au mythe.",
  },
  {
    id: 'd38',
    titre: 'Un animal doué de raison',
    auteur: 'Robert Merle',
    annee: 1965,
    type: 'Littérature',
    periode: 'apres-guerre',
    theme: "L'intelligence animale, Le dialogue inter-espèces, La suprématie humaine remise en cause",
    description: "Roman de science-fiction où des dauphins communiquent et raisonnent avec les hommes. L'animal comme intelligence autre, qui remet en cause la suprématie humaine et ouvre au dialogue inter-espèces.",
  },
  {
    id: 'd39',
    titre: 'Le Pigeon',
    auteur: 'Patrick Süskind',
    annee: 1987,
    type: 'Littérature',
    periode: 'contemporain',
    theme: "L'angoisse existentielle, La fragilité humaine, L'animal révélateur",
    description: "Nouvelle où un homme voit sa vie bouleversée par la présence d'un pigeon devant sa porte. L'animal comme révélateur existentiel, déclencheur d'angoisse et miroir des fragilités humaines.",
  },
  {
    id: 'd40',
    titre: 'Les Animaux dénaturés',
    auteur: 'Vercors',
    annee: 1952,
    type: 'Littérature',
    periode: 'apres-guerre',
    theme: "L'humanité, La dignité, La frontière homme/animal",
    description: "Roman philosophique sur la frontière entre l'homme et l'animal, à travers la découverte d'une espèce intermédiaire. L'animal comme question ontologique, au centre du débat sur l'humanité et la dignité.",
  },
  {
    id: 'd41',
    titre: 'Le Coq',
    auteur: 'Marc Chabâal',
    annee: null,
    type: 'Peinture',
    periode: 'contemporain',
    theme: "L'emblème, Le symbole collectif, La fierté nationale",
    description: "Représentation picturale du coq, symbole de fierté et d'identité. L'animal comme emblème, porteur de valeurs collectives et de puissance symbolique.",
  },
  {
    id: 'd42',
    titre: '« Avec ou sans viande ? Du végétarisme au régime paléolithique »',
    auteur: 'Laure Belhassen / Eugénie Suner',
    annee: null,
    type: 'Autre',
    periode: 'contemporain',
    theme: "L'alimentation, L'éthique, La consommation de viande",
    description: "Entretien avec une diététicienne-nutritionniste sur les différents régimes alimentaires et leurs implications pour la santé et la société. L'animal comme enjeu alimentaire et éthique.",
  },
  {
    id: 'd43',
    titre: '« À propos du végétarisme »',
    auteur: 'Élisée Reclus',
    annee: 1901,
    type: 'Philosophie',
    periode: 'belle-epoque',
    theme: "Le végétarisme, Le respect animal, L'éthique alimentaire",
    description: "Le géographe et penseur défend le végétarisme comme un choix moral fondé sur le respect des animaux et une vision humaniste de la nature. L'animal comme être sensible appelant à une réflexion éthique.",
  },
  {
    id: 'd44',
    titre: 'Hure de sanglier en églantine — Le Cuisinier parisien',
    auteur: 'Marie-Antoine Carême',
    annee: 1828,
    type: 'Autre',
    periode: 'romantisme',
    theme: "L'animal gastronomique, L'art culinaire, L'esthétique",
    description: "Description et illustration d'un plat sophistiqué de haute cuisine mettant en scène une tête de sanglier décorée artistiquement. L'animal comme objet gastronomique et esthétique, transformé par l'art culinaire.",
  },
  {
    id: 'd45',
    titre: 'Les Essais — « Apologie de Raymond Sebond »',
    auteur: 'Michel de Montaigne',
    annee: 1572,
    type: 'Philosophie',
    periode: 'renaissance',
    theme: "La supériorité humaine remise en cause, L'animal comme miroir",
    description: "Montaigne remet en question la supériorité de l'homme sur l'animal et souligne les ressemblances entre leurs comportements et capacités. L'animal comme miroir de l'homme, relativisateur de la supériorité humaine.",
  },
  {
    id: 'd46',
    titre: "L'Animal que donc je suis",
    auteur: 'Jacques Derrida',
    annee: 2006,
    type: 'Philosophie',
    periode: 'contemporain',
    theme: "L'anthropocentrisme, La frontière humanité/animalité",
    description: "Derrida critique la réduction historique des animaux à une catégorie inférieure et interroge la frontière entre humanité et animalité. L'animal comme sujet philosophique, révélant les limites de la pensée anthropocentrée.",
  },
  {
    id: 'd47',
    titre: "Le Jardin des délices — panneau de l'Enfer",
    auteur: 'Hieronymus Bosch',
    annee: 1515,
    type: 'Peinture',
    periode: 'renaissance',
    theme: "Le fantastique, La peur, Les créatures hybrides, Les châtiments",
    description: "Peinture représentant un univers infernal peuplé de créatures hybrides et d'animaux symboliques participant aux supplices humains. L'animal comme figure symbolique et fantastique, associé aux peurs et aux châtiments.",
  },
  {
    id: 'd48',
    titre: '« Le Chien et son image »',
    auteur: 'Ésope',
    annee: -500,
    type: 'Littérature',
    periode: 'antiquite',
    theme: "L'avidité, La cupidité, La morale",
    description: "Fable où un chien perd son morceau de viande en voulant saisir son reflet dans l'eau. L'animal comme personnage moral illustrant la critique de l'avidité et de la cupidité.",
  },
  {
    id: 'd49',
    titre: '« Le Chien qui lâche sa proie pour l\'ombre »',
    auteur: 'Jean de La Fontaine',
    annee: 1668,
    type: 'Littérature',
    periode: 'classicisme',
    theme: "L'illusion, La convoitise, La perte par excès de désir",
    description: "Adaptation d'Ésope où un chien perd sa proie en voulant attraper son reflet dans l'eau. L'animal comme instrument moral dénonçant l'illusion et la convoitise humaines.",
  },
  {
    id: 'd50',
    titre: 'Les Oies cendrées',
    auteur: 'Konrad Lorenz',
    annee: 1988,
    type: 'Autre',
    periode: 'contemporain',
    theme: "L'éthologie, L'intelligence animale, Le comportement social",
    description: "Récit scientifique et personnel sur l'observation du comportement des oies, révélant leur intelligence et leurs relations sociales. L'animal comme être intelligent et social, objet d'étude de l'éthologie.",
  },
  {
    id: 'd51',
    titre: '« Deux têtes physiognomoniques inspirées par le cheval »',
    auteur: 'Charles Le Brun',
    annee: 1671,
    type: 'Peinture',
    periode: 'classicisme',
    theme: "La physiognomonie, Les émotions, Le rapport homme/animal",
    description: "Étude graphique comparant les traits du visage humain et animal afin de montrer les correspondances entre physionomie et caractère. L'animal comme modèle d'analyse du visage humain et des émotions.",
  },
  {
    id: 'd52',
    titre: 'Comme une bête',
    auteur: 'Joy Sorman',
    annee: 2012,
    type: 'Littérature',
    periode: 'contemporain',
    theme: "La viande, L'exploitation animale, La violence alimentaire",
    description: "Roman sur l'obsession d'un apprenti boucher fasciné par la viande et la transformation des animaux en nourriture. L'animal comme corps exploité, révélant la violence de la consommation de viande.",
  },
  {
    id: 'd53',
    titre: "L'Intelligence de l'animal",
    auteur: 'Jacques Vauclair',
    annee: 2017,
    type: 'Autre',
    periode: 'contemporain',
    theme: "La cognition animale, L'apprentissage, La remise en cause de la suprématie humaine",
    description: "Essai scientifique montrant les capacités cognitives de nombreuses espèces animales. L'animal comme être pensant, capable d'apprentissage et de raisonnement, qui remet en cause l'idée d'une intelligence exclusivement humaine.",
  },
  {
    id: 'd54',
    titre: 'Le Bœuf écorché',
    auteur: 'Rembrandt',
    annee: 1655,
    type: 'Peinture',
    periode: 'classicisme',
    theme: "Le corps sacrifié, L'abattage, La violence et la réalité de la viande",
    description: "Peinture représentant la carcasse d'un bœuf suspendue après l'abattage, dans une scène à la fois réaliste et saisissante. L'animal comme corps sacrifié, rappelant la violence de l'abattage.",
  },
  {
    id: 'd55',
    titre: '« La Foire aux chats à Ypres »',
    auteur: 'Adolphe Dinaux',
    annee: 1847,
    type: 'Littérature',
    periode: 'romantisme',
    theme: "La cruauté, Le spectacle, Les traditions humaines et l'animal",
    description: "Texte décrivant une fête traditionnelle où des chats étaient jetés du haut d'une tour, pratique aujourd'hui disparue. L'animal comme victime de traditions humaines mêlant spectacle et cruauté.",
  },
  {
    id: 'd56',
    titre: 'Bouvard et Pécuchet',
    auteur: 'Gustave Flaubert',
    annee: 1881,
    type: 'Littérature',
    periode: 'romantisme',
    theme: "La science, La naïveté, L'illusion du progrès",
    description: "Roman satirique dans lequel deux personnages accumulent des savoirs sans vraiment les comprendre, y compris sur la nature et les animaux. L'animal comme objet de savoir mal maîtrisé, révélant la naïveté et l'illusion du progrès scientifique.",
  },
];


// ─────────────────────────── ÉTAT ───────────────────────────

const state = {
  works: loadWorks(),
  period: 'all',
  search: '',
  type: '',
  sort: 'date-asc',
  editingId: null,
  deletingId: null,
};


// ─────────────────────────── PERSISTENCE ───────────────────────────

function loadWorks() {
  try {
    const saved = localStorage.getItem('cg-bts-sio-v2');
    return saved ? JSON.parse(saved) : structuredClone(DEFAULT_WORKS);
  } catch {
    return structuredClone(DEFAULT_WORKS);
  }
}

function saveWorks() {
  localStorage.setItem('cg-bts-sio-v2', JSON.stringify(state.works));
}


// ─────────────────────────── UTILITAIRES ───────────────────────────

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function getPeriode(id) {
  return PERIODES.find(p => p.id === id) || null;
}

function formatYear(y) {
  if (y === null || y === undefined || y === '') return '';
  const n = Number(y);
  if (isNaN(n)) return '';
  return n < 0 ? `${Math.abs(n)} av. J.-C.` : String(n);
}

function esc(s) {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function highlight(text, query) {
  if (!query) return esc(text);
  const safe = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return esc(text).replace(new RegExp(`(${safe})`, 'gi'), '<mark>$1</mark>');
}

function hex2rgba(hex, a) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
}


// ─────────────────────────── FILTRAGE / TRI ───────────────────────────

function getFiltered() {
  let list = state.works.slice();

  if (state.period !== 'all') {
    list = list.filter(w => w.periode === state.period);
  }

  if (state.type) {
    list = list.filter(w => w.type === state.type);
  }

  if (state.search) {
    const q = state.search.toLowerCase();
    list = list.filter(w =>
      (w.titre || '').toLowerCase().includes(q) ||
      (w.auteur || '').toLowerCase().includes(q) ||
      (w.theme || '').toLowerCase().includes(q) ||
      (w.description || '').toLowerCase().includes(q)
    );
  }

  list.sort((a, b) => {
    switch (state.sort) {
      case 'date-asc':   return (a.annee ?? 99999) - (b.annee ?? 99999);
      case 'date-desc':  return (b.annee ?? -99999) - (a.annee ?? -99999);
      case 'alpha':      return (a.titre || '').localeCompare(b.titre || '', 'fr');
      case 'alpha-desc': return (b.titre || '').localeCompare(a.titre || '', 'fr');
      default: return 0;
    }
  });

  return list;
}

function countByPeriod(id) {
  return id === 'all'
    ? state.works.length
    : state.works.filter(w => w.periode === id).length;
}


// ─────────────────────────── RENDU SIDEBAR ───────────────────────────

function renderSidebar() {
  const nav = document.getElementById('periods-nav');

  const allActive = state.period === 'all' ? 'active' : '';
  const allCount = countByPeriod('all');

  let html = `
    <button class="period-btn ${allActive}" data-period="all">
      <span class="period-dot" style="background:#6366f1"></span>
      <span class="period-info">
        <span class="period-name-wrap">
          <span class="period-name">Toutes les périodes</span>
        </span>
        <span class="period-count">${allCount}</span>
      </span>
    </button>`;

  for (const p of PERIODES) {
    const active = state.period === p.id ? 'active' : '';
    const count = countByPeriod(p.id);
    html += `
      <button class="period-btn ${active}" data-period="${p.id}">
        <span class="period-dot" style="background:${p.couleur}"></span>
        <span class="period-info">
          <span class="period-name-wrap">
            <span class="period-name">${esc(p.nom)}</span>
            <span class="period-dates">${esc(p.dates)}</span>
          </span>
          <span class="period-count">${count}</span>
        </span>
      </button>`;
  }

  nav.innerHTML = html;

  const total = state.works.length;
  document.getElementById('total-works').textContent =
    `${total} œuvre${total !== 1 ? 's' : ''} au total`;
}


// ─────────────────────────── RENDU EN-TÊTE ───────────────────────────

function renderHeader() {
  const titleEl  = document.getElementById('current-period-title');
  const banner   = document.getElementById('period-banner');
  const bannerDates = document.getElementById('banner-dates');
  const bannerDesc  = document.getElementById('banner-desc');

  if (state.period === 'all') {
    titleEl.textContent = 'Toutes les périodes';
    banner.hidden = true;
  } else {
    const p = getPeriode(state.period);
    if (p) {
      titleEl.textContent = p.nom;
      bannerDates.textContent = p.dates;
      bannerDesc.textContent = p.desc;
      banner.style.borderLeftColor = p.couleur;
      banner.style.background = hex2rgba(p.couleur, 0.07);
      banner.hidden = false;
    }
  }
}


// ─────────────────────────── RENDU GRILLE ───────────────────────────

function renderGrid() {
  const grid  = document.getElementById('works-grid');
  const empty = document.getElementById('empty-state');
  const countEl = document.getElementById('results-count');

  const filtered = getFiltered();
  const total = state.works.length;

  // Compteur de résultats
  if (state.search || state.type || state.period !== 'all') {
    countEl.textContent = `${filtered.length} résultat${filtered.length !== 1 ? 's' : ''}`;
  } else {
    countEl.textContent = '';
  }

  if (filtered.length === 0) {
    grid.style.display = 'none';
    empty.style.display = 'flex';
    return;
  }

  grid.style.display = '';
  empty.style.display = 'none';
  grid.innerHTML = filtered.map(renderCard).join('');
}

function renderCard(w) {
  const p = getPeriode(w.periode);
  const color = p ? p.couleur : '#6366f1';
  const q = state.search;

  const yearStr = formatYear(w.annee);

  const periodTag = (state.period === 'all' && p)
    ? `<span class="tag" style="background:${hex2rgba(color, 0.12)};color:${color}">${esc(p.nom)}</span>`
    : '';

  const themeLine = w.theme
    ? `<div class="card-theme">📌 ${highlight(w.theme, q)}</div>`
    : '';

  const descLine = w.description
    ? `<div class="card-desc">${highlight(w.description, q)}</div>`
    : '';

  return `
    <article class="work-card" style="--card-color:${color}" data-id="${esc(w.id)}">
      <div class="card-header">
        <div class="card-title">${highlight(w.titre, q)}</div>
      </div>
      <div class="card-author">${highlight(w.auteur, q)}</div>
      <div class="card-meta">
        ${w.type   ? `<span class="tag tag-type">${esc(w.type)}</span>` : ''}
        ${periodTag}
        ${yearStr  ? `<span class="tag tag-year">${yearStr}</span>` : ''}
      </div>
      ${themeLine}
      ${descLine}
    </article>`;
}


// ─────────────────────────── RENDU GLOBAL ───────────────────────────

function render() {
  renderSidebar();
  renderHeader();
  renderGrid();
}


// ─────────────────────────── MODAL AJOUT / ÉDITION ───────────────────────────

function openAddModal() {
  state.editingId = null;
  document.getElementById('modal-title').textContent = 'Ajouter une œuvre';
  document.getElementById('f-titre').value       = '';
  document.getElementById('f-auteur').value      = '';
  document.getElementById('f-annee').value       = '';
  document.getElementById('f-type').value        = TYPES[2]; // Littérature par défaut
  document.getElementById('f-periode').value     = state.period !== 'all' ? state.period : PERIODES[0].id;
  document.getElementById('f-theme').value       = '';
  document.getElementById('f-description').value = '';
  document.getElementById('form-error').textContent = '';
  document.getElementById('modal-overlay').classList.add('open');
  setTimeout(() => document.getElementById('f-titre').focus(), 50);
}

function openEditModal(id) {
  const w = state.works.find(w => w.id === id);
  if (!w) return;
  state.editingId = id;
  document.getElementById('modal-title').textContent = "Modifier l'œuvre";
  document.getElementById('f-titre').value       = w.titre       || '';
  document.getElementById('f-auteur').value      = w.auteur      || '';
  document.getElementById('f-annee').value       = w.annee       ?? '';
  document.getElementById('f-type').value        = w.type        || TYPES[0];
  document.getElementById('f-periode').value     = w.periode     || PERIODES[0].id;
  document.getElementById('f-theme').value       = w.theme       || '';
  document.getElementById('f-description').value = w.description || '';
  document.getElementById('form-error').textContent = '';
  document.getElementById('modal-overlay').classList.add('open');
  setTimeout(() => document.getElementById('f-titre').focus(), 50);
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  state.editingId = null;
}


// ─────────────────────────── MODAL SUPPRESSION ───────────────────────────

function openDeleteConfirm(id) {
  const w = state.works.find(w => w.id === id);
  if (!w) return;
  state.deletingId = id;
  document.getElementById('confirm-text').textContent = `"${w.titre}" — ${w.auteur}`;
  document.getElementById('confirm-overlay').classList.add('open');
}

function closeDeleteConfirm() {
  document.getElementById('confirm-overlay').classList.remove('open');
  state.deletingId = null;
}


// ─────────────────────────── CRUD ───────────────────────────

function handleFormSubmit(e) {
  e.preventDefault();

  const titre   = document.getElementById('f-titre').value.trim();
  const auteur  = document.getElementById('f-auteur').value.trim();
  const type    = document.getElementById('f-type').value;
  const periode = document.getElementById('f-periode').value;

  if (!titre || !auteur || !type || !periode) {
    document.getElementById('form-error').textContent =
      'Veuillez remplir les champs obligatoires (titre, auteur, type, période).';
    return;
  }

  const anneeRaw = document.getElementById('f-annee').value;
  const work = {
    titre,
    auteur,
    annee:       anneeRaw !== '' ? parseInt(anneeRaw, 10) : null,
    type,
    periode,
    theme:       document.getElementById('f-theme').value.trim(),
    description: document.getElementById('f-description').value.trim(),
  };

  if (state.editingId) {
    state.works = state.works.map(w =>
      w.id === state.editingId ? { ...w, ...work } : w
    );
  } else {
    state.works.push({ ...work, id: uid() });
  }

  saveWorks();
  closeModal();
  render();
}

function handleDeleteConfirm() {
  if (!state.deletingId) return;
  state.works = state.works.filter(w => w.id !== state.deletingId);
  saveWorks();
  closeDeleteConfirm();
  render();
}


// ─────────────────────────── EXPORT / IMPORT ───────────────────────────

function exportJSON() {
  const blob = new Blob([JSON.stringify(state.works, null, 2)], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `culture-g-bts_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importJSON(file) {
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if (!Array.isArray(data)) throw new Error('Format invalide');
      state.works = data;
      saveWorks();
      render();
    } catch {
      alert('Fichier JSON invalide. Veuillez utiliser un fichier exporté depuis cette application.');
    }
  };
  reader.readAsText(file);
}


// ─────────────────────────── INITIALISATION DES SELECTS ───────────────────────────

function populateSelects() {
  // Filtre type (header)
  const filterType = document.getElementById('filter-type');
  filterType.innerHTML =
    '<option value="">Tous les types</option>' +
    TYPES.map(t => `<option value="${esc(t)}">${esc(t)}</option>`).join('');

  // Select type (form)
  const fType = document.getElementById('f-type');
  fType.innerHTML = TYPES.map(t => `<option value="${esc(t)}">${esc(t)}</option>`).join('');

  // Select période (form)
  const fPeriode = document.getElementById('f-periode');
  fPeriode.innerHTML = PERIODES.map(p =>
    `<option value="${esc(p.id)}">${esc(p.nom)} (${esc(p.dates)})</option>`
  ).join('');
}


// ─────────────────────────── ÉVÉNEMENTS ───────────────────────────

function bindEvents() {

  // Sidebar : clic sur période (délégation)
  document.getElementById('periods-nav').addEventListener('click', e => {
    const btn = e.target.closest('.period-btn');
    if (!btn) return;
    state.period = btn.dataset.period;
    render();
  });

  // Ajouter

  // Fermer modal édition
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('btn-cancel').addEventListener('click', closeModal);
  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });

  // Soumettre formulaire
  document.getElementById('work-form').addEventListener('submit', handleFormSubmit);

  // Supprimer — confirmation
  document.getElementById('confirm-cancel').addEventListener('click', closeDeleteConfirm);
  document.getElementById('confirm-delete').addEventListener('click', handleDeleteConfirm);
  document.getElementById('confirm-overlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeDeleteConfirm();
  });

  // Grille : edit / delete (délégation)
  document.getElementById('works-grid').addEventListener('click', e => {
    const editBtn   = e.target.closest('.card-btn.edit');
    const deleteBtn = e.target.closest('.card-btn.delete');
    if (editBtn)   openEditModal(editBtn.dataset.id);
    if (deleteBtn) openDeleteConfirm(deleteBtn.dataset.id);
  });

  // Filtres
  document.getElementById('search').addEventListener('input', e => {
    state.search = e.target.value.trim();
    renderGrid();
  });

  document.getElementById('filter-type').addEventListener('change', e => {
    state.type = e.target.value;
    renderGrid();
  });

  document.getElementById('sort-by').addEventListener('change', e => {
    state.sort = e.target.value;
    renderGrid();
  });

  // Export / Import
  document.getElementById('btn-export').addEventListener('click', exportJSON);

  document.getElementById('btn-import-trigger').addEventListener('click', () => {
    document.getElementById('import-file').click();
  });

  document.getElementById('import-file').addEventListener('change', e => {
    const file = e.target.files[0];
    if (file) importJSON(file);
    e.target.value = '';
  });

  // Touche Echap
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    closeModal();
    closeDeleteConfirm();
  });
}


// ─────────────────────────── DÉMARRAGE ───────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  populateSelects();
  bindEvents();
  render();
});
