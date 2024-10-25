const foodData = [
  {
    title: 'Pizza margarita',
    description:
      "La pizza Margherita est une spécialité napolitaine ronde, avec un bord surélevé. Elle est garnie de tomates pelées écrasées à la main, de mozzarella, de feuilles de basilic frais et d'huile d'olive extra vierge.",
    price: 23000,
    ratings: 4.3,
    category: 'Pizza',
    image: '/api/uploads/foods/pizza-margarita.jpg',
    quantity: 20,
  },
  {
    title: 'Pizza quatre fromages',
    description:
      "La pizza quattro formaggi est une pizza italienne garnie de quatre types de fromage, fondus ensemble, avec ou sans sauce tomate. Très populaire à l'échelle mondiale, elle est un incontournable des menus de pizzerias, y compris en Italie.",
    price: 20000,
    ratings: 4,
    category: 'Pizza',
    image: '/api/uploads/foods/pizza-4-fromage.jpg',
    quantity: 20,
  },

  {
    title: 'Coca Cola',
    description:
      "Coca-Cola propose aujourd'hui des produits adaptés à chaque envie et consommateur, tout en conservant ses valeurs fondamentales et sa formule secrète inchangées. Cette continuité se reflète dans des publicités à succès mondial.",
    price: 6000,
    ratings: 4,
    category: 'Boisson',
    image: '/api/uploads/foods/coca-cola.jpg',
    quantity: 20,
  },
  {
    title: 'Bonbon Anglais',
    description: `Le produit mentionné est une boisson appelée Bonbon Anglais, disponible en format de 1,5 L, et vendue uniquement en magasin. Il fait partie des boissons de Madagascar.`,
    price: 6000,
    ratings: 3.5,
    category: 'Boisson',
    image: '/api/uploads/foods/bonbon-anglais.jpg',
    quantity: 20,
  },
  {
    title: 'Jus Naturel',
    description:
      'Les derniers jus proposés sont bénéfiques pour la ligne et la santé, car ils sont pauvres en sucres. Les meilleurs dans cette catégorie incluent les jus de tomate, citron, melon, pamplemousse, rhubarbe, myrtille, raisin et pomme.',
    price: 5000,
    ratings: 3.9,
    category: 'Boisson',
    image: '/api/uploads/foods/jus-naturel.jpg',
    quantity: 20,
  },
  {
    title: 'Tacos',
    description:
      "Le taco est un plat mexicain traditionnel composé d'une petite tortilla à base de maïs ou de blé, de la taille d'une main, garnie d'une farce. La tortilla est ensuite pliée autour de la garniture et mangée à la main.",
    price: 9000,
    ratings: 5,
    category: 'Burger',
    image: '/api/uploads/foods/tacos.jpg',
    quantity: 20,
  },
  {
    title: 'Burger King',
    description:
      "Burger King est une chaîne de restauration rapide qui propose des services de ramassage et de livraison, ainsi que des jeux et des récompenses pour les clients. Vous pouvez également soutenir des universitaires locaux en faisant un don d'un dollar dans les établissements participants et obtenir des bons de réduction pour votre prochaine visite.",
    price: 22000,
    ratings: 5.5,
    category: 'Burger',
    image: '/api/uploads/foods/burger.jpg',
    quantity: 20,
  },
  {
    title: 'Hot Dog',
    description:
      "Un hot-dog est un plat composé d'une saucisse grillée, cuite à la vapeur ou bouillie, servie dans la fente d'un petit pain partiellement tranché. Le terme hot-dog peut se référer à la saucisse elle-même. La saucisse utilisée est une saucisse de Vienne ou une saucisse de Francfort. Les noms de ces saucisses font généralement référence à leur plat assemblé. La préparation des hot-dogs et les condiments varient d'un pays à l'autre. ",
    price: 26000,
    ratings: 6,
    category: 'Burger',
    image: '/api/uploads/foods/hotdog.jpg',
    quantity: 20,
  },
  {
    title: 'Panini',
    description: `Le panini est un sandwich chaud d'origine italienne. Bien qu'il soit traditionnellement fait avec du pain italien, dans les pays anglophones, le terme "panini" désigne plus largement tout sandwich grillé, préparé avec différents types de pains comme la baguette, la ciabatta, la focaccia ou la michetta.`,
    price: 2000,
    ratings: 4,
    category: 'Burger',
    image: '/api/uploads/foods/panini.jpg',
    quantity: 20,
  },
  {
    title: 'Gâteau biscuit Savoi ',
    description:
      "La recette a été affinée au fil du temps par François Massialot au XVIIe siècle, avec l'ajout de divers arômes tels que le zeste de citron vert, la cannelle, la fleur d'oranger, la vanille et le sucre glace. (Qui a publié anonymement le premier dictionnaire de la cuisine.",
    price: 40000,
    ratings: 6.3,
    category: 'Gateaux',
    image: '/api/uploads/foods/Gâteau-biscuit.jpg',
    quantity: 20,
  },
  {
    title: 'Gâteau-mousse aux framboises',
    description:
      "Gâteau moelleux aux framboises. Voici un gâteau tout simple qui me permet d'utiliser les framboises que j'ai congelées l'automne dernier mais rien ne vous empêche biensur d'utiliser des framboises fraîches.",
    price: 25000,
    ratings: 5,
    category: 'Gateaux',
    image: '/api/uploads/foods/gateau-fraise.jpg',
    quantity: 20,
  },
  {
    title: 'Soupe Special',
    description:
      "La soupe est un aliment essentiellement liquide, généralement servi tiède ou chaud, qui est préparé en combinant des ingrédients de viande ou de légumes avec du bouillon, du lait ou de l'eau. Les soupes chaudes sont également caractérisées par l'ébullition d'ingrédients solides dans des liquides dans une casserole jusqu'à ce que les saveurs soient extraites, formant ainsi un bouillon.",
    price: 19000,
    ratings: 3.8,
    category: 'Soupe',
    image: '/api/uploads/foods/soupe.jpg',
    quantity: 20,
  },
  {
    title: 'Soupe au Crevette',
    description:
      "On a donc développé cette soupe aux crevettes épicée avec la bonne conscience de répondre à vos besoins et de vous offrir une version moins grasse que la classique. Comment a-t-on fait ? En diminuant beaucoup la quantité d'huile nécessaire pour le roux",
    price: 22000,
    ratings: 4,
    category: 'Soupe',
    image: '/api/uploads/foods/soupe-crevette.jpg',
    quantity: 20,
  },
  {
    title: 'Nem Salade',
    description: 'Plateau de nem croustillant avec du salade fraiche ',
    price: 15000,
    ratings: 3,
    category: 'Snack',
    image: '/api/uploads/foods/nem.jpg',
    quantity: 20,
  },
  {
    title: 'Poulet Grill',
    description: 'poulet au miel griller au feu de bois d Ambanidia ',
    price: 25000,
    ratings: 5,
    category: 'Snack',
    image: '/api/uploads/foods/PouletG.jpg',
    quantity: 20,
  },
];

export default foodData;
