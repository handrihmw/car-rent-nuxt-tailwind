<template>
  <div class="mt-32 flex">
    <NuxtErrorBoundary>
      <CarSidebar />
      <NuxtPage />
      <template #error="{ error }">
        <div class="flex flex-col mx-auto text-center items-center">
          <h1 class="text-4xl text-red-600 mb-4 font-bold">Oops!</h1>
          <h2 class="text-md mb-4">Something went wrong</h2>
          <code>{{ error }}</code>
          <button @click="error.value = null" class="text-white bg-blue-500 py-3 px-10 rounded mt-4">Back</button>
        </div>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>

<script setup>
const route = useRoute();
const { toTitleCase } = useUtilities();

useHead({
  title: `${
    route.params.make ? toTitleCase(route.params.make) : "Cars"
  } in ${toTitleCase(route.params.city)}`,
});

definePageMeta({
  layout: "custom",
});
</script>
