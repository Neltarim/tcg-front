<template>
  <div class="px-8 py-4 rounded text-center bg-white cursor-pointer shadow-xl">
    <p class=" ">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'SimpleButton',
  props: { text: String }
}
</script>