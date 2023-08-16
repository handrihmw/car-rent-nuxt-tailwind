<template>
  <div class="z-30 mr-10 h-full w-80 rounded-md border">
    <div class="relative flex cursor-pointer flex-col gap-2 border-b p-5">
      <h3>Location</h3>
      <h3 @click="updateModal('location')" class="capitalize text-blue-400">
        {{ route.params.city }}
      </h3>
      <div
        v-if="modal.location"
        class="absolute left-56 rounded top-1 -m-1 border bg-white p-5 shadow"
      >
        <input v-model="city" type="text" class="rounded border p-1" />
        <button
          @click="onChangeLocation"
          class="mt-2 w-full rounded bg-blue-400 p-1 text-white"
        >
          Apply
        </button>
      </div>
    </div>

    <div class="relative flex cursor-pointer flex-col gap-2 border-b p-5">
      <h3>Make</h3>
      <h3 @click="updateModal('make')" class="capitalize text-blue-400">
        {{ route.params.make || "All" }}
      </h3>
      <div
        v-if="modal.make"
        class="absolute left-56 rounded top-1 -m-1 flex w-[600px] flex-wrap justify-between border bg-white p-5 shadow"
      >
        <h4
          class="w-1/3 hover:text-blue-600"
          v-for="make in makes"
          :key="make"
          @click="onChangeMake(make)"
        >
          {{ make }}
        </h4>
      </div>
    </div>

    <div class="relative flex cursor-pointer flex-col gap-2 border-b p-5">
      <h3>Price</h3>
      <h3 class="capitalize text-blue-400" @click="updateModal('price')">
        {{ priceRangeText }}
      </h3>
      <div
        v-if="modal.price"
        class="absolute left-56 top-1 -m-1 rounded border bg-white p-5 shadow"
      >
        <input
          class="mb-3 rounded border p-1"
          type="number"
          placeholder="min"
          v-model="priceRange.min"
        />
        <input
          class="rounded border p-1"
          type="number"
          placeholder="max"
          v-model="priceRange.max"
        />
        <button
          @click="onChangePrice"
          class="mt-5 w-full rounded bg-blue-400 p-1 text-white"
        >
          Apply
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const router = useRouter();
const { makes } = useCars();
const priceRange = ref({
  min: "",
  max: "",
});
const city = ref("");
const modal = ref({
  make: false,
  location: false,
  price: false,
});

const updateModal = (key) => {
  modal.value[key] = !modal.value[key];
};

const onChangeLocation = () => {
  if (!city.value) return;
  if (!isNaN(parseInt(city.value))) {
    throw createError({
      message: "City name must be a string",
      statusCode: 400,
    });
  }
  updateModal("location");
  navigateTo(`/city/${city.value}/car/${route.params.make}`);
  city.value = "";
};

const onChangeMake = (make) => {
  updateModal(make);
  navigateTo(`/city/${route.params.city}/car/${make}`);
};

const onChangePrice = () => {
  updateModal("price");
  if (priceRange.value.min && priceRange.value.max) {
    if (priceRange.value.min > priceRange.value.max) return;
  }
  router.push({
    query: {
      ...route.query,
      minPrice: priceRange.value.min,
      maxPrice: priceRange.value.max,
    },
  });
};

const priceRangeText = computed(() => {
  const minPrice = route.query.minPrice;
  const maxPrice = route.query.maxPrice;

  if (!minPrice && !maxPrice) return "All";
  else if (!minPrice && maxPrice) {
    return `Up to ${maxPrice}`;
  } else if (minPrice && !maxPrice) {
    return `From ${minPrice}`;
  } else {
    return `${minPrice} - ${maxPrice}`;
  }
});
</script>
