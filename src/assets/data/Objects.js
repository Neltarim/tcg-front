const Objects = [
  {
    name: 'Fiole de soin',
    id: 1, type: 'potion', rarity: 'common', 
    effect: { type: 'heal', baseAmount: 3 },
    description: 'Soigne une cible de 4'
  },
  {
    name: 'Potion d\'invisibilite',
    id: 2, type: 'potion', rarity: 'epic', 
    effect: { 
      type: 'property', property: 'visibility', 
      value: false, turn: 6 
    },
    description: `
      Donne le status 'invisible' pendant 6 tours. Les cibles affectees
      par ce statue sont inciblable. lorsque la cible attaque, elle ne subit pas 
      de contre coup mais perd le statut invisible.`
  },
  {
    name: 'Potion de mort',
    id: 3, type: 'potion', rarity: 'rare', 
    effect: { type: 'damage', damage: 3 },
    description: `Inflige 3 degats a une cible.`
  },
  {
    name: 'Poison de doux sommeil',
    id: 4, type: 'poison', rarity: 'epic', 
    effect: { type: 'status', status: 'sleep', on: 'attack', turn: 3 },
    description: `Inflige 3 degats a une cible.`
  },
  {
    name: 'Poison de l\'appostat',
    id: 4, type: 'poison', rarity: 'legendary', 
    effect: { type: 'status', status: 'near-death', on: 'attack', turn: 1 },
    description: `
      Infuse l'arme de votre heros, quand votre heros frappe, 
      inflige l'etat "Mort imminente" a la cible. Les cibles affectees
      par ce statue meurt au debut du prochain tour.`
  }
]

function getObject(id) { return Objects.filter((el) => {return el.id == id})[0] }

export default getObject