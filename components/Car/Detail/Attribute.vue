<template>
  <div class="mr-10 mt-5 border-b pb-5">
    <div class="mt-2 flex text-lg" v-for="feature in features" :key="feature">
      <p class="mr-3 rounded text-lime-800">✔</p>
      <p>{{ feature }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  feature: {
    type: Array,
    required: true,
  },
})
</script>