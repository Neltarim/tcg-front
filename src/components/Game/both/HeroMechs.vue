<template>
  <div 
    class=" w-1/3 h-80" 
    :class="isPlayer ? 'bg-player-hero' : 'bg-opp-hero'"
  >
    Heromechs
  </div>
</template>

<script>
export default {
  name: "HeroMechs",
  props: {isPlayer: Boolean}
}
</script>