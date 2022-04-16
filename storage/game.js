import createPersistedState from 'vuex-persistedstate'
export const strict = false

const originalState = {
  player: {
    hand: null,
    hp: 30,
  },
  opponent: {
    hand: null,
    hp: 30,
  }
}

export const state = () => (originalState)

export const plugins = [
  createPersistedState({
    storage: {
      getItem(key)        { return localStorage.getItem(key) },
      setItem(key, value) { return localStorage.setItem(key, value) },
      removeItem: (key) => localStorage.removeItem(key),
    },
  }),
]

export const mutations = {
  updatePlayer(state, player)     { state.player = player     },
  updateOpponent(state, opponent) { state.opponent = opponent }
}