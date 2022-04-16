import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router'

import './assets/tailwind.css'

import MatchMaking from './pages/MatchMaking.vue'
import Game from './pages/Game.vue'
import Home from './pages/Home.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/lobby', component: MatchMaking },
  { path: '/game', component: Game },
]

const router = createRouter({
  mode: 'history',
  routes,
  history: createWebHashHistory(),
})

const app = createApp(App)
app.use(router)
app.mount("#app")
