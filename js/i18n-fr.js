// =====================================================================
// Couche de traduction française (affichage uniquement)
// ---------------------------------------------------------------------
// Le jeu continue d'utiliser les noms anglais en interne (sauvegardes,
// prérequis, calculs). Ce fichier fournit seulement le texte à afficher :
//   t("Beggar")        -> "Mendiant"
//   tTooltip("Beggar") -> la description française de la classe
// Si une traduction manque, le texte anglais d'origine est affiché.
// =====================================================================

const FR_NAMES = {
    // --- Catégories de classes ---
    "Common work": "Travail ordinaire",
    "Military": "Armée",
    "The Arcane Association": "L'Association des Arcanes",
    "The Void": "Le Néant",
    "Galactic Council": "Conseil galactique",

    // --- Catégories de compétences ---
    "Fundamentals": "Fondamentaux",
    "Combat": "Combat",
    "Magic": "Magie",
    "Dark Magic": "Magie noire",
    "Void Manipulation": "Manipulation du Néant",
    "Celestial Powers": "Pouvoirs célestes",
    "Almightiness": "Toute-puissance",

    // --- Catégories de la boutique ---
    "Properties": "Logements",
    "Misc": "Divers",

    // --- Classes : Travail ordinaire ---
    "Beggar": "Mendiant",
    "Farmer": "Fermier",
    "Fisherman": "Pêcheur",
    "Miner": "Mineur",
    "Blacksmith": "Forgeron",
    "Merchant": "Marchand",

    // --- Classes : Armée ---
    "Squire": "Écuyer",
    "Footman": "Fantassin",
    "Veteran footman": "Fantassin vétéran",
    "Centenary": "Centenier",
    "Knight": "Chevalier",
    "Veteran Knight": "Chevalier vétéran",
    "Holy Knight": "Chevalier sacré",
    "Lieutenant General": "Lieutenant général",

    // --- Classes : Association des Arcanes ---
    "Student": "Étudiant",
    "Apprentice Mage": "Mage apprenti",
    "Adept Mage": "Mage adepte",
    "Master Wizard": "Maître sorcier",
    "Archmage": "Archimage",
    "Chronomancer": "Chronomancien",
    "Chairman": "Président",
    "Imperator": "Imperator",

    // --- Classes : Le Néant ---
    "Corrupted": "Corrompu",
    "Void Slave": "Esclave du Néant",
    "Void Fiend": "Démon du Néant",
    "Abyss Anomaly": "Anomalie abyssale",
    "Void Wraith": "Spectre du Néant",
    "Void Reaver": "Ravageur du Néant",
    "Void Lord": "Seigneur du Néant",
    "Abyss God": "Dieu des Abysses",

    // --- Classes : Conseil galactique ---
    "Eternal Wanderer": "Vagabond éternel",
    "Nova": "Nova",
    "Sigma Proioxis": "Sigma Proioxis",
    "Acallaris": "Acallaris",
    "One Above All": "L'Être suprême",

    // --- Compétences : Fondamentaux ---
    "Concentration": "Concentration",
    "Productivity": "Productivité",
    "Bargaining": "Marchandage",
    "Meditation": "Méditation",

    // --- Compétences : Combat ---
    "Strength": "Force",
    "Battle Tactics": "Tactique de combat",
    "Muscle Memory": "Mémoire musculaire",

    // --- Compétences : Magie ---
    "Mana Control": "Contrôle du mana",
    "Life Essence": "Essence de vie",
    "Time Warping": "Distorsion temporelle",
    "Astral Body": "Corps astral",
    "Temporal Dimension": "Dimension temporelle",
    "All Seeing Eye": "Œil omniscient",
    "Brainwashing": "Lavage de cerveau",

    // --- Compétences : Magie noire ---
    "Dark Influence": "Influence obscure",
    "Evil Control": "Maîtrise du Mal",
    "Intimidation": "Intimidation",
    "Demon Training": "Entraînement démoniaque",
    "Blood Meditation": "Méditation sanglante",
    "Demon's Wealth": "Richesse démoniaque",
    "Dark Knowledge": "Savoir interdit",
    "Void Influence": "Influence du Néant",
    "Time Loop": "Boucle temporelle",
    "Evil Incarnate": "Le Mal incarné",

    // --- Compétences : Manipulation du Néant ---
    "Absolute Wish": "Vœu absolu",
    "Void Amplification": "Amplification du Néant",
    "Mind Seize": "Emprise mentale",
    "Ceaseless Abyss": "Abîme sans fin",
    "Void Symbiosis": "Symbiose du Néant",
    "Void Embodiment": "Incarnation du Néant",
    "Abyss Manipulation": "Manipulation abyssale",

    // --- Compétences : Pouvoirs célestes ---
    "Cosmic Longevity": "Longévité cosmique",
    "Cosmic Recollection": "Réminiscence cosmique",
    "Essence Collector": "Collecteur d'essence",
    "Galactic Command": "Commandement galactique",

    // --- Compétences : Toute-puissance ---
    "Yin Yang": "Yin Yang",
    "Parallel Universe": "Univers parallèle",
    "Higher Dimensions": "Dimensions supérieures",
    "Epiphany": "Épiphanie",

    // --- Boutique : Logements ---
    "Homeless": "Sans-abri",
    "Tent": "Tente",
    "Wooden Hut": "Cabane en bois",
    "Cottage": "Chaumière",
    "House": "Maison",
    "Large House": "Grande maison",
    "Small Palace": "Petit palais",
    "Grand Palace": "Grand palais",
    "Town Ruler": "Seigneur du bourg",
    "City Ruler": "Maître de la cité",
    "Nation Ruler": "Souverain de la nation",
    "Pocket Dimension": "Dimension de poche",
    "Void Realm": "Royaume du Néant",
    "Void Universe": "Univers du Néant",
    "Astral Realm": "Royaume astral",
    "Galactic Throne": "Trône galactique",

    // --- Boutique : Divers ---
    "Book": "Livre",
    "Dumbbells": "Haltères",
    "Personal Squire": "Écuyer personnel",
    "Steel Longsword": "Épée longue en acier",
    "Butler": "Majordome",
    "Sapphire Charm": "Talisman de saphir",
    "Study Desk": "Bureau d'étude",
    "Library": "Bibliothèque",
    "Observatory": "Observatoire",
    "Mind's Eye": "Œil de l'esprit",
    "Void Necklace": "Collier du Néant",
    "Void Armor": "Armure du Néant",
    "Void Blade": "Lame du Néant",
    "Void Orb": "Orbe du Néant",
    "Void Dust": "Poussière du Néant",
    "Celestial Robe": "Robe céleste",
    "Universe Fragment": "Fragment d'univers",
    "Multiverse Fragment": "Fragment de multivers",

    // --- Effets (colonne « Effet ») ---
    "Ability XP": "XP des compétences",
    "Class XP": "XP des classes",
    "Reduced Expenses": "Dépenses réduites",
    "Happiness": "Bonheur",
    "Military Pay": "Solde militaire",
    "Military XP": "XP militaire",
    "Strength XP": "XP de Force",
    "T.A.A. XP": "XP des Arcanes",
    "T.A.A Pay": "Salaire des Arcanes",
    "Longer Lifespan": "Espérance de vie",
    "Longer lifespan": "Espérance de vie",
    "Gamespeed": "Vitesse du jeu",
    "Evil Gain": "Gain de Mal",
    "The Void XP": "XP du Néant",
    "Reduced Happiness": "Bonheur réduit",
    "Max Lvl Multiplier": "Multiplicateur de niv. max",
    "Essence Gain": "Gain d'essence",
    "All XP": "Toute l'XP",
    "Class Pay": "Salaire des classes",
    "Essence + Evil Gain": "Gain d'essence et de Mal",
    "Galactic Council XP": "XP du Conseil galactique",
    "Magic XP": "XP de Magie",
    "Fundamentals XP": "XP des Fondamentaux",
    "Void Manipulation XP": "XP de Manipulation du Néant",
}

const FR_TOOLTIPS = {
    // Travail ordinaire
    "Beggar": "Lutter jour et nuit pour quelques pièces de cuivre. Chaque jour, vous avez l'impression d'être au bord de la mort.",
    "Farmer": "Labourer les champs et faire pousser les récoltes. Ce n'est pas grand-chose, mais c'est un travail honnête.",
    "Fisherman": "Pêcher toutes sortes de poissons et les vendre pour une poignée de pièces. Un métier reposant, mais mal payé.",
    "Miner": "S'aventurer dans des cavernes dangereuses pour extraire des minerais précieux. La paie est bien maigre au regard des risques.",
    "Blacksmith": "Fondre le minerai et forger avec soin des armes pour l'armée. Un métier respectable et correctement payé pour un roturier.",
    "Merchant": "Voyager de ville en ville pour négocier de beaux produits. Plutôt bien payé et beaucoup moins physique.",

    // Armée
    "Squire": "Porter le bouclier et l'épée de votre chevalier sur le champ de bataille. Paie dérisoire, mais l'expérience est précieuse.",
    "Footman": "Risquer votre vie face aux soldats ennemis. Un métier courageux et respectable, mais vous ne comptez guère dans le grand ordre des choses.",
    "Veteran footman": "Plus expérimenté et utile qu'un fantassin ordinaire, vous terrassez les forces ennemies par votre puissance. La paie n'est pas si mauvaise.",
    "Centenary": "Votre talent à l'arc vous a valu de diriger un petit groupe d'archers pour tendre des embuscades à distance.",
    "Knight": "Transpercer les soldats ennemis avec aisance, couvert d'acier de la tête aux pieds. Un métier bien payé et très respecté.",
    "Veteran Knight": "Grâce à vos talents de combat inégalés, vous massacrez les ennemis sans effort. La plupart des fantassins ne pourront jamais rêver d'un poste aussi bien payé.",
    "Holy Knight": "Anéantir des escouades entières d'un seul coup, armé d'une lame imprégnée de magie. Une unité si redoutée est extrêmement bien payée.",
    "Lieutenant General": "Redouté des nations, vous anéantissez des armées entières en un clin d'œil. Environ une fois par siècle, un seul chevalier sacré mérite ce titre prestigieux.",

    // Association des Arcanes
    "Student": "Étudier la théorie du mana et pratiquer des sorts simples. Une petite paie couvre vos frais : c'est une étape nécessaire pour devenir mage.",
    "Apprentice Mage": "Sous la supervision d'un mage expérimenté, lancer des sorts simples contre les ennemis. Une paie généreuse couvre vos frais.",
    "Adept Mage": "Renverser le cours des batailles avec des sorts intermédiaires et encadrer d'autres apprentis. La paie est extrêmement élevée.",
    "Master Wizard": "Utiliser des sorts avancés pour ravager des légions entières. Seule une petite partie des mages atteint ce rang, récompensé par une paie démesurée.",
    "Archmage": "Doté d'un talent sans égal, vous accomplissez des prodiges magiques à volonté. On dit qu'un archimage peut rayer un empire de la carte.",
    "Chronomancer": "Spécialiste des énergies temporelles, vous modifiez le cours du temps grâce à des divinations surnaturelles et un savoir venu d'ailleurs.",
    "Chairman": "Passer vos journées à administrer l'Association des Arcanes et à étudier l'immortalité véritable. Le président reçoit chaque jour des sommes ridicules.",
    "Imperator": "Vous détenez un pouvoir illimité qui vous rend invincible. D'une main de fer, vous imposez vos ordres à toute l'Association des Arcanes.",

    // Le Néant
    "Corrupted": "Corrompu par le Néant, vous devenez peu à peu un esclave sans volonté, condamné à le servir pour l'éternité... Résisterez-vous, ou vous consumera-t-il à jamais ?",
    "Void Slave": "Chaque jour, vous succombez un peu plus au Néant. Garderez-vous votre humanité encore un peu, ou le laisserez-vous vous dévorer ?",
    "Void Fiend": "Vous devenez une créature curieuse et putride qui aspire la vie de tout ce qui l'entoure.",
    "Abyss Anomaly": "Surgissant dans un hurlement, vous devenez la manifestation du néant insondable qui s'étend au-delà.",
    "Void Wraith": "Âme damnée... ombre de vous-même, errant entre les mondes, consumée par le Néant... Trouverez-vous un jour la paix ?",
    "Void Reaver": "Rares sont ceux qui arpentent les chemins entre les mondes. Ces pouvoirs vous permettent de créer des champs d'énergie du Néant qui dévorent tout être vivant.",
    "Void Lord": "Vous avez contemplé le cœur obscur du Néant assez longtemps pour devenir l'un des êtres les plus puissants et redoutés. Toutes les créatures inférieures du Néant vous obéissent.",
    "Abyss God": "Créateur du Néant, immense toile de ténèbres dont l'existence même défie toute logique. Rien ne vous échappera.",

    // Conseil galactique
    "Eternal Wanderer": "Avec les pouvoirs que vous a conférés une entité inconnue, vous errez de lieu vénéré en lieu redouté, en quête de réponses.",
    "Nova": "Être extrêmement puissant, doté d'une télékinésie prodigieuse et capable de réorganiser la structure de la matière et de l'énergie, jusqu'à l'échelle cosmique.",
    "Sigma Proioxis": "Entité cosmologique quasi omnipotente, dont la maîtrise de la matière et de l'énergie repousse les limites de l'Univers lui-même.",
    "Acallaris": "Être primordial antérieur à l'univers, lié à la création de la vie et d'une puissance inconcevable, devenu mythe pour les plus anciennes espèces.",
    "One Above All": "Créateur de toute chose.",

    // Fondamentaux
    "Concentration": "Améliorez votre vitesse d'apprentissage par des exercices de concentration intense.",
    "Productivity": "Apprenez à moins procrastiner au travail et gagnez plus d'expérience chaque jour.",
    "Bargaining": "Étudiez les ficelles du métier et l'art de convaincre pour réduire toutes vos dépenses.",
    "Meditation": "Emplissez votre esprit de paix et de sérénité pour puiser un bonheur plus grand en vous.",

    // Combat
    "Strength": "Endurcissez votre corps par un entraînement rigoureux. Les plus forts sont mieux payés dans l'armée.",
    "Battle Tactics": "Élaborez et révisez des stratégies de combat pour gagner plus d'expérience dans l'armée.",
    "Muscle Memory": "Renforcez vos neurones par l'habitude et la répétition pour gagner en force plus vite.",

    // Magie
    "Mana Control": "Renforcez les canaux de mana de votre corps pour devenir un utilisateur de magie plus puissant.",
    "Life Essence": "Prolongez votre vie grâce à la magie. Mais est-ce vraiment l'immortalité que vous recherchiez... ?",
    "Time Warping": "Courbez l'espace et le temps par des techniques interdites pour accélérer votre apprentissage.",
    "Astral Body": "Prolongez votre vie au-delà de l'imaginable en exploitant l'énergie éthérée.",
    "Temporal Dimension": "Créez votre propre dimension de poche où les siècles passent en quelques secondes.",
    "All Seeing Eye": "Au plus haut rang de l'Association des Arcanes, tous les fonds vous reviennent directement.",
    "Brainwashing": "Une technique conçue pour manipuler les pensées et les actes d'autrui contre leur volonté.",

    // Magie noire
    "Dark Influence": "Entourez-vous du pouvoir redoutable que vous confère le Mal, pour assimiler sans peine n'importe quel métier ou compétence.",
    "Evil Control": "Domptez le Mal qui gronde et grandit en vous, pour en gagner davantage entre deux renaissances.",
    "Intimidation": "Apprenez à dégager une aura démoniaque qui terrifie les marchands et les force à vous accorder de fortes remises.",
    "Demon Training": "Un simple corps humain est trop fragile pour supporter le Mal. Entraînez-vous par des méthodes interdites pour devenir peu à peu un démon, capable d'absorber le savoir à toute vitesse.",
    "Blood Meditation": "Cultivez le Mal en vous par le sacrifice d'autres êtres vivants, ce qui augmente fortement votre gain de Mal.",
    "Demon's Wealth": "Par la magie noire, multipliez la matière même des pièces que vous rapporte votre travail.",
    "Dark Knowledge": "Scellés depuis très longtemps, ces textes interdits servent désormais vos propres intérêts.",
    "Void Influence": "Puiser dans les pouvoirs du Néant tout en les combinant au Mal vous offre un potentiel illimité.",
    "Time Loop": "La maîtrise, c'est quand « lire l'heure » devient « dire au temps quoi faire ».",
    "Evil Incarnate": "Vous êtes devenu ce que vous aviez juré de détruire.",

    // Manipulation du Néant
    "Absolute Wish": "Le pouvoir d'exaucer absolument tous les vœux, sans aucune limite.",
    "Void Amplification": "Vous vous abandonnez au Néant, qui prend plus facilement le contrôle de vous.",
    "Mind Seize": "Dans un état de transe, vous sentez le Néant contrôler vos pensées, vos perceptions, vos souvenirs, vos émotions et votre personnalité.",
    "Ceaseless Abyss": "Une torture sans fin : vous avez juré de servir le Néant pour le reste de votre existence.",
    "Void Symbiosis": "Une relation symbiotique qui vous aide à ne faire qu'un avec le Néant.",
    "Void Embodiment": "Si tu regardes longtemps l'abîme, l'abîme regarde aussi en toi.",
    "Abyss Manipulation": "Vous permet de façonner votre propre réalité au sein du Néant.",

    // Pouvoirs célestes
    "Cosmic Longevity": "Vous avez tout vu, du tout début jusqu'à la toute fin.",
    "Cosmic Recollection": "Exister dans plusieurs lignes temporelles parallèles et manipuler vos autres « vous », en influençant leur vie comme bon vous semble.",
    "Essence Collector": "Exploitez le potentiel illimité des énergies du multivers et récoltez ses ressources.",
    "Galactic Command": "Le pouvoir absolu corrompt absolument.",

    // Toute-puissance
    "Yin Yang": "Né du chaos à la création de l'univers, on le dit en harmonie, équilibrant le bien et le mal.",
    "Parallel Universe": "Un plan d'existence autonome, coexistant avec le vôtre, qui vous aide à retrouver des fragments de votre puissance oubliée.",
    "Higher Dimensions": "En modifiant en partie les lois de la physique et en transcendant les dimensions inférieures, votre existence devient sans fin.",
    "Epiphany": "Vous ne faites plus qu'un avec le tout.",

    // Logements
    "Homeless": "Dormir dans des rues sales et inconfortables en manquant de mourir de froid chaque nuit. Impossible de faire pire.",
    "Tent": "Une fine toile déchirée tenue par quelques bâtons fragiles. Conditions de vie horribles, mais au moins vous avez un toit.",
    "Wooden Hut": "Des rondins miteux et du foin sale collés avec du crottin de cheval. Bien plus solide qu'une tente, mais l'odeur n'est pas très agréable.",
    "Cottage": "Une charpente en bois et un toit de chaume. Des conditions de vie correctes pour un prix raisonnable.",
    "House": "Un bâtiment en briques de pierre et en bois solide, avec quelques pièces. Assez cher, mais c'est une demeure confortable.",
    "Large House": "Bien plus grande qu'une maison ordinaire, avec encore plus de pièces et plusieurs étages. Spacieuse, mais très chère.",
    "Small Palace": "Une demeure très riche, minutieusement bâtie et ornée de métaux fins comme l'argent. Un train de vie fastueux aux frais d'entretien énormes.",
    "Grand Palace": "Une résidence grandiose entièrement faite d'or et d'argent. Le summum du luxe et du confort, pour un prix démesuré.",
    "Town Ruler": "Vous dirigez votre propre communauté dans votre petit bourg et possédez plusieurs établissements.",
    "City Ruler": "Plus haut dignitaire de la cité, vous gérez et supervisez tout. Votre salaire est astronomique, vos dépenses aussi.",
    "Nation Ruler": "Vous régnez sur la nation entière : vos richesses sont peut-être corrompues, mais tout ce que vous voyez vous appartient.",
    "Pocket Dimension": "Une dimension rien que pour vous, invocable à volonté. Ce qui s'y passe y reste.",
    "Void Realm": "Nul ne sait comment ni quand le royaume du Néant est apparu. Ses éléments, qui n'existent nulle part ailleurs, sont désormais à votre disposition.",
    "Void Universe": "Antérieur à notre univers, le Néant offre un espace illimité pour vos biens, si vous acceptez de vous y soumettre.",
    "Astral Realm": "Sous la personnalité et l'ego se trouve la source de notre caractère profond. Ici résident les sens psychiques, l'esprit profond, les émotions, les symboles et la réalité intérieure.",
    "Galactic Throne": "Assis sur votre trône, vous veillez sur l'existence elle-même.",

    // Divers
    "Book": "Un endroit où noter toutes vos pensées et découvertes, pour apprendre beaucoup plus vite.",
    "Dumbbells": "De lourds outils d'exercice pour vous endurcir et gagner en force encore plus vite.",
    "Personal Squire": "Vous aide dans les tâches quotidiennes et vous laisse plus de temps pour être productif au travail.",
    "Steel Longsword": "Une belle lame pour terrasser les ennemis plus vite au combat, et donc gagner plus d'expérience.",
    "Butler": "Garde votre demeure toujours propre et prépare trois délicieux repas par jour : vous êtes plus heureux et sans stress.",
    "Sapphire Charm": "Serti d'un saphir rare, ce talisman active davantage de canaux de mana dans votre corps et facilite grandement l'apprentissage de la magie.",
    "Study Desk": "Un espace dédié, garni de fournitures et d'équipements de qualité pour faire avancer vos recherches.",
    "Library": "Une collection de livres renfermant d'immenses connaissances, des savoirs de base aux sorts les plus complexes.",
    "Observatory": "Sert à observer les phénomènes terrestres, marins et célestes.",
    "Mind's Eye": "Vous permet de voir vos souvenirs, de vous rappeler des images et même de concevoir de nouvelles idées.",
    "Void Necklace": "Vous aide à façonner et manipuler la matière du Néant, à la transmuter et à la reconstruire selon vos désirs.",
    "Void Armor": "Génère une armure innée qui fait partie de votre corps, résistante aux attaques, aux blessures et à la douleur.",
    "Void Blade": "Forgée à partir de poussière du Néant et de matière noire, elle tranche les barrières dimensionnelles. L'arme favorite de tout Ravageur du Néant.",
    "Void Orb": "Lorsque l'orbe touche une entité étrangère au Néant, il la désintègre instantanément. Sa puissance vient du royaume du Néant.",
    "Void Dust": "La forme la plus pure de matière du Néant : une cuillère à café pèse autant qu'une petite planète.",
    "Celestial Robe": "L'équipement le plus puissant et le plus essentiel de tout Céleste. Une source de puissance infinie.",
    "Universe Fragment": "Datant de la naissance de l'univers, il peut créer d'autres petits univers.",
    "Multiverse Fragment": "Apparu bien avant la création de notre univers, cet étrange objet sans forme rayonne d'une énergie illimitée.",
}

// Suffixes des pièces affichés : platine, or, argent, cuivre
const FR_COIN_SUFFIX = {"p": "p", "g": "o", "s": "a", "c": "c"}

// Renvoie le texte français d'un nom interne anglais
function t(key) {
    return FR_NAMES[key] || key
}

// Renvoie la description (infobulle) française
function tTooltip(key) {
    return FR_TOOLTIPS[key] || (typeof tooltips !== "undefined" ? tooltips[key] : "") || ""
}
