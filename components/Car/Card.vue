<template>
  <div
    class="relative mb-5 h-[200px] w-full cursor-pointer overflow-hidden rounded border shadow-md"
  >
    <div class="flex h-full">
      <img
        @click="emit('favor', car.id)"
        :src="favored ? heartFilled : heartOutline"
        alt="heart"
        class="absolute right-5 top-4 z-20 w-6 h-6"
      />
      <NuxtImg
        :src="car.url"
        alt="{{ car.name }}"
        class="h-full w-[300px] rounded-l-md"
      />
      <div @click="navigateTo(`/car/${car.name}-${car.id}`)" class="flex flex-col p-4">
        <div>
          <h1 class="text-2xl text-gray-800 mb-4">{{ car.name }}</h1>
          <p class="text-gray-700 font-light line-clamp-2 text-ellipsis">
            {{ car.description }}
          </p>
        </div>
        <h1 class="mt-auto text-xl">Rp. {{ car.price }}</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import heartFilled from "@/assets/icons/heart-filled.png";
import heartOutline from "@/assets/icons/heart-outline.png";

const props = defineProps({
  car: Object,
  favored: Boolean,
});

const emit = defineEmits(['favor']);

// const favored = useState(`favored-${props.car.id}`, () => false);
</script>
