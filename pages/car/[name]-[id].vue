<template>
  <div
    class="xs:px-8 mx-auto mt-4 max-w-7xl space-y-4 px-4 pb-16 sm:px-10 lg:px-16" v-if="car"
  >
    <CarDetailHero :car="car" />
    <CarDetailAttribute :feature="car.feature" />
    <CarDetailDescription :description="car.description" />
    <CarDetailContact />
  </div>
</template>

<script setup>
const route = useRoute();
const { cars } = useCars();
const { toTitleCase } = useUtilities();

const car = computed(() => {
  return cars.find((car) => car.id === parseInt(route.params.id));
});

if (!car.value) {
  throw createError({
    statusCode: 404,
    message: `Car with id ${route.params.id} was not found`,
  })
}

useHead({
  title: toTitleCase(route.params.name),
});

definePageMeta({
  layout: "custom",
});
</script>
