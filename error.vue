<template>
  <div class="flex h-screen justify-center items-center flex-col">
    <h1 class="text-9xl font-bold mb-8">{{ error.statusCode }}</h1>
    <p class="text-2xl font-bold mb-4">{{ error.message }}</p>
    <button class="text-blue-500 hover:underline" @click="handleError">Go back to home</button>
  </div>
</template>

<script setup>
const error = useError()
const handleError = () => {
  clearError({
    redirect: "/"
  })
}
</script>