<template>
  <div class="w-1/3 h-80 px-10">
    <div 
      v-if="isPlayer" 
      class="bg-player-hero h-56 mt-6 flex justify-center"
    >
      <p class="mt-20">{{ hero?.name }}</p>
    </div>
    <div class="flex justify-between px-3 py-3">
      <div 
        v-for="spell in hero?.spells" 
        :key="spell" 
        class="bg-gray py-2 px-1"
      >
        {{ spell?.name }}
      </div>
    </div>
    <div v-if="!isPlayer" class="bg-opp-hero h-56 flex justify-center">
      <p class="mt-20">{{ hero?.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroMain',
  props: { hero: Object, isPlayer: Boolean }
}
</script>