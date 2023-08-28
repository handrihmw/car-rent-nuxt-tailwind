<template>
  <div class="mx-auto w-[1000px]overflow-hidden">
    <div
      class="sticky mb-5 flex w-full items-center justify-between rounded-full bg-white p-2 shadow-lg"
      style="top: 5px"
    >
      <input
        class="focus:shadow-outline w-full rounded-full bg-gray-100 py-4 pl-4 text-xs leading-tight text-gray-700 focus:outline-none lg:text-sm"
        type="text"
        :class="cityError ? 'border-2 border-red-500' : ''"
        placeholder="Search by city..."
        v-model="city"
        @keydown.enter="handleEnterKey"
      />

      <div
        class="mx-2 cursor-pointer rounded-full bg-gray-600 p-2 hover:bg-blue-400"
        @click="handleSearch"
      >
        <svg
          class="h-6 w-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
const city = ref("");
const cityError = ref(false);

const handleSearch = () => {
  if (!city.value) {
    return (cityError.value = true);
  }
  navigateTo(`/city/${city.value}/car`);
};

const handleEnterKey = (event) => {
  if (event.key === "Enter") {
    handleSearch();
  }
};
</script>
