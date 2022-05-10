const Ressources = [
  { id: 1,  name: 'Racine Fletrie', },
  { id: 2,  name: 'Feuilles de vigne', },
  { id: 3,  name: 'Poudre douteuse', },
  { id: 4,  name: 'Racine de Vertice', },
  { id: 5,  name: 'Plume de seraphin corrompu', },
  { id: 6,  name: 'Huile de Ferus', },
  { id: 7,  name: 'Poudre de salmonelle', },
  { id: 8,  name: 'Spores soporifiques', },
  { id: 9,  name: 'Mucus de grenouilles cendree', },
  { id: 10, name: 'Extrait de lapholienne noire', },
  { id: 11, name: 'Huile de vidange', },
  { id: 12, name: 'Oeil de long voyant', },
  { id: 13, name: 'Pollen de la ruche noire', },
]

function getRessource(id) { return Ressources.filter((el) => {return el.id == id})[0] }

export default getRessource