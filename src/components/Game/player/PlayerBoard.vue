<template>
  <section class="z-1 w-full h-1/2 bg-player-bg py-8 px-40">
    <div class="flex-inline align-end">

      <div class="flex mb-10">
        <Servants
          :servants="servants"
          isPlayer
        ></Servants>        
      </div>
      <div class="flex justify-center gap-4">
        <HeroMechs
          :hero="hero"
          isPlayer
        ></HeroMechs>

        <HeroMain
          :hero="hero"
          isPlayer
        ></HeroMain>

        <div class=" w-1/3 h-60">
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import HeroMain from '../both/HeroMain.vue'
import HeroMechs from '../both/HeroMechs.vue'
import Servants from '../both/Servants.vue'

export default {
  components: { HeroMain, HeroMechs, Servants },
  name: 'PlayerBoard',
  props: {
    hero: {type: Object},
    servants: {type: Array},
  },
}
</script>