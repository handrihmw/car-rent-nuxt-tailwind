<script setup>
const route = useRoute();
const { toTitleCase } = useUtilities();

const { data: car } = await useFetchCar(route.params.id)

// const { cars } = useCars();
// const car = computed(() => {
//   return cars.find((car) => car.id === parseInt(route.params.id));
// });

// if (!car.value) {
//   throw createError({
//     statusCode: 404,
//     message: `Car with id ${route.params.id} was not found`,
//   })
// }

console.log('cars', car.value)

useHead({
  title: toTitleCase(route.params.name),
});

definePageMeta({
  layout: "custom",
});
</script>

<template>
  <div
    class="xs:px-8 mx-auto mt-4 max-w-7xl space-y-4 px-4 pb-16 sm:px-10 lg:px-16"
  >
    <CarDetailHero :car="car" />
    <CarDetailAttribute :feature="car.feature" />
    <CarDetailDescription :description="car.description" />
    <CarDetailContact />
  </div>
</template>