const Heroes = {
  data: [
    {
      id: 1,
      name: "Varimatras", hp: 50, force: 4,
      spells: [
        {
          id: 1,
          actionType: 'log',
          message: `spell 2 throwed by Varimatras`
        },
        {
          id: 2,
          actionType: 'log',
          message: `spell 2 throwed by Varimatras`
        },
        {
          id: 3,
          actionType: 'log',
          message: `spell 3 throwed by Varimatras`
        },
        {
          id: 4,
          actionType: 'log',
          message: `spell 4 throwed by Varimatras`
        },
        {
          id: 5,
          actionType: 'log',
          message: `spell 5 throwed by Varimatras`
        },
      ]
    },
    {
      id: 1,
      name: "Valeera", hp: 50, force: 4,
      spells: [
        {
          id: 1,
          actionType: 'log',
          message: `spell 2 throwed by Valeera`
        },
        {
          id: 2,
          actionType: 'log',
          message: `spell 2 throwed by Valeera`
        },
        {
          id: 3,
          actionType: 'log',
          message: `spell 3 throwed by Valeera`
        },
        {
          id: 4,
          actionType: 'log',
          message: `spell 4 throwed by Valeera`
        },
        {
          id: 5,
          actionType: 'log',
          message: `spell 5 throwed by Valeera`
        },
      ]
    }
  ],
  get: (id) => { return this.data.filter(el => el.id == id)[0] }
}

export default Heroes