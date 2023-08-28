<script setup>
const route = useRoute();
const { data: cars, refresh } = await useFetchCars(route.params.city, {
  make: route.params.make,
  minPrice: route.query.minPrice,
  maxPrice: route.query.maxPrice,
});

watch(
  () => route.query,
  () => {
    window.location.reload(true);
  }
);
</script>

<template>
  <div>
    <CarCards v-if="cars.length" :cars="cars" />
    <h2
      v-else
      class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl"
    >
      <span class="text-red-500">Oops!</span> No cars found!
    </h2>
  </div>
</template>
