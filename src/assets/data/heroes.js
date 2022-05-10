const Heroes = [
  {
    id: 1,
    name: "Varimatras", hp: 50, force: 4,
    spells: [
      {
        id: 1,
        actionType: 'log',
        name: 'spell 1',
        message: `spell 2 throwed by Varimatras`
      },
      {
        id: 2,
        actionType: 'log',
        name: 'spell 2',
        message: `spell 2 throwed by Varimatras`
      },
      {
        id: 3,
        actionType: 'log',
        name: 'spell 3',
        message: `spell 3 throwed by Varimatras`
      },
      {
        id: 4,
        actionType: 'log',
        name: 'spell 4',
        message: `spell 4 throwed by Varimatras`
      },
      {
        id: 5,
        actionType: 'log',
        name: 'spell 5',
        message: `spell 5 throwed by Varimatras`
      },
    ]
  },
  {
    id: 2,
    name: "Valeera", hp: 50, force: 4,
    spells: [
      {
        id: 6,
        actionType: 'log',
        name: 'spell 6',
        message: `spell 2 throwed by Valeera`
      },
      {
        id: 7,
        actionType: 'log',
        name: 'spell 7',
        message: `spell 2 throwed by Valeera`
      },
      {
        id: 8,
        actionType: 'log',
        name: 'spell 8',
        message: `spell 3 throwed by Valeera`
      },
      {
        id: 9,
        actionType: 'log',
        name: 'spell 9',
        message: `spell 4 throwed by Valeera`
      },
      {
        id: 10,
        actionType: 'log',
        name: 'spell 10',
        message: `spell 5 throwed by Valeera`
      },
    ]
  }
]

function getHero(id) { return Heroes.filter((el) => {return el.id == id})[0] }

export default getHero