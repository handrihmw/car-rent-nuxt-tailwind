<script setup>
definePageMeta({
  layout: "custom",
});

const supabase = useSupabaseClient();

const login = async () => {
  const { error } = supabase.auth.signInWithOAuth({
    provider: "google",
  });

  if (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="flex justify-center text-center flex-col gap-4 align-middle items-center mt-10">
    <h1 class="text-4xl font-bold mb-5">Sign in to your account</h1>
    <button
      @click="login"
      class="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
    >
      <img
        class="w-6 h-6"
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        loading="lazy"
        alt="google logo"
      />
      <span>Login with Google</span>
    </button>
  </div>
</template>
