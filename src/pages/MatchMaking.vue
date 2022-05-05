<template>
  <section class="py-6 px-10">

    <SocketPlayer v-for="player in players" :key="player" :username="player" />

  </section>
</template>

<script>
import SocketPlayer from '../components/SocketPlayer.vue'

export default {
  name: 'MatchMaking',
  components: {SocketPlayer},
  data: () => {
    return {
      players: ['neltarim', 'sasono', 'njarween']
    }
  },
  methods: {
  },
}
</script>