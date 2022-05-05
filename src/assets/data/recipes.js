const Recipes = {
  data: [
    { 
      id: 1, name: '[Alchimie] Fiole de soin', rarity: 'common',
      ressources: [{object: 2, quantity: 4 }, {object: 4, quantity: 3 }], 
      objectCreated: 1,
      description: `Soigne une cible de 4.`
    },
    { 
      id: 2, name: '[Alchimie] Potion d\'invisibilite',  rarity: 'epic',
      ressources: [
        {object: 3, quantity: 6 }, 
        {object: 6, quantity: 4 }, 
        {object: 13, quantity: 8 }
      ], 
      objectCreated: 2,
      description: `
        Donne le status 'invisible' pendant 6 tours. Les cibles affectees
        par ce statue sont inciblable. lorsque la cible attaque, elle ne subit pas 
        de contre coup mais perd le statut invisible.`
    },
    { 
      id: 3, name: '[Alchimie] Potion de mort',  rarity: 'rare',
      ressources: [
        {object: 7, quantity: 6 }, 
        {object: 1, quantity: 4 }, 
        {object: 11, quantity: 3 }
      ], 
      objectCreated: 3,
      description: `Inflige 3 degats a une cible.`
    },
    { 
      id: 4, name: '[Alchimie] Poison de doux sommeil',  rarity: 'epic',
      ressources: [
        {object: 7, quantity: 6 }, 
        {object: 1, quantity: 4 }, 
        {object: 11, quantity: 3 }, 
        {object: 8, quantity: 3 }
      ], 
      objectCreated: 4,
      description: `Endort la cible pendant 3 tours.`
    },
    { 
      id: 5, name: '[Alchimie] Poison de l\'appostat',  rarity: 'legendary',
      ressources: [
        {object: 1, quantity: 6 }, 
        {object: 9, quantity: 4 }, 
        {object: 6, quantity: 3 }, 
        {object: 5, quantity: 1 },
        {object: 13, quantity: 3 }
      ], 
      objectCreated: 5,
      description: `
        Infuse l'arme de votre heros, quand votre heros frappe, 
        inflige l'etat "Mort imminente" a la cible. Les cibles affectees
        par ce statue meurt au debut du prochain tour.`
    },
  ],
  get: (id) => { return this.data.filter(el => el.id == id)[0] }
}

export default Recipes