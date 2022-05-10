<template>
  <section class="z-1 w-full h-1/2 bg-opp-bg py-8 px-40">
    <div class="flex-inline align-end">

      <div class="flex justify-center gap-4">
        <div class=" w-1/3 h-60">
        </div>

        <HeroMain
          :hero="hero"
        ></HeroMain>

        <HeroMechs
          :hero="hero"
        ></HeroMechs>
      </div>
      <div class="flex mt-10">
        <Servants
          :servants="servants"
        ></Servants>        
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
  name: 'OpponentBoard',
  props: {
    hero: {type: Object},
    servants: {type: Array},
  },
}
</script>