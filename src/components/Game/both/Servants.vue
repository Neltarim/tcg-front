<template>
  <div class=" flex justify-center gap-10 w-full h-full">
    <div 
      v-for="i in 13" :key="i"
      class=" w-20 h-20"
      :class="isPlayer ? 'bg-player-servant' : 'bg-opp-servant'"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'servants',
  props: {servants: Array, isPlayer: Boolean}
}
</script>