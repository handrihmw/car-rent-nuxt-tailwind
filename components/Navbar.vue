<script setup>
const user = useSupabaseUser()
const supabase = useSupabaseClient()

const logout = async () => {
  const { error } = await supabase.auth.signOut()

  try {
    await $fetch('/api/_supabase/session', {
      method: 'POST',
      body: { event: 'SIGNED_OUT', session: null },
    })
  } catch (error) {
    return console.log(error)
  }

  user.value = null
  navigateTo('/')
}
</script>

<template>
  <nav class="bg-transparent">
    <div
      class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4"
    >
      <NuxtLink to="/" class="flex items-center">
        <NuxtImg
          src="https://cdn.mos.cms.futurecdn.net/NZcvnPvZ5J565GL6Le6yZc-1200-80.jpg.webp"
          class="mr-1 h-8"
          alt="Flowbite Logo"
        />
        <span
          class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white"
          >CariOne</span
        >
      </NuxtLink>
      <div v-if="user" class="flex">
        <NuxtLink to="/profile/listings" class="mr-5">Profile</NuxtLink>
        <p @click="logout" class="cursor-pointer">Logout</p>
      </div>
      <NuxtLink v-else to="/login" class="mr-5">Login</NuxtLink>
      <button
        data-collapse-toggle="navbar-solid-bg"
        type="button"
        class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
        aria-controls="navbar-solid-bg"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="h-5 w-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </div>
  </nav>
</template>
