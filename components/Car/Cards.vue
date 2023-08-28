<template>
  <div class="w-full">
    <ClientOnly>
      <CarCard
        v-for="car in cars"
        :key="car.id"
        :car="car"
        @favor="handleFavorite"
        :favored="car.id in favorite"
      />
    </ClientOnly>
  </div>
</template>

<script setup>
// const { cars } = useCars();
const props = defineProps({
  cars: {
    type: Array,
    required: true,
  },
});

const favorite = useLocalStorage("favorites", {});

const handleFavorite = (id) => {
  if (id in favorite.value) {
    delete favorite.value[id];
  } else {
    favorite.value = {
      ...favorite.value,
      [id]: true,
    };
  }
};
</script>

<!-- use ClienOnly or rename Card to Card.client.vue  -->