<script setup>
const route = useRoute();
const message = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const errorMessages = ref("");
const successMessage = ref("");

const disableButton = computed(() => {
  for (let key in message.value) {
    if (message.value[key]) {
      return true;
    }
  }
  return false;
});

const onSubmit = async () => {
  try {
    const response = await fetch(
      `/api/car/listings/${route.params.id}/message`,
      {
        method: "POST",
        body: message.value,
      }
    );
    message.value = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
    successMessage.value = "Message sent successfully!";
    errorMessages.value = "";
  } catch (err) {
    errorMessages.value = err.message;
    successMessage.value = "";
  }
};
</script>

<template>
  <div class="mt-10">
    <div class="flex w-[600px] gap-3 justify-between">
      <input
        v-model="message.name"
        type="text"
        class="border roubded py-1 px-3"
        placeholder="Name"
      />
      <input
        v-model="message.email"
        type="text"
        class="border roubded py-1 px-3"
        placeholder="Email"
      />
      <input
        v-model="message.phone"
        type="text"
        class="border roubded py-1 px-3"
        placeholder="Phone"
      />
    </div>
    <div class="mt-4 flex h-[300px] w-[600px]">
      <textarea
        class="w-full border roubded py-1 px-3"
        placeholder="Message"
      ></textarea>
    </div>
    <button
      :disabled="disableButton"
      @click="onSubmit"
      class="mt-4 rounded bg-blue-400 px-10 py-3 text-white"
    >
      Submit
    </button>
    <p v-if="errorMessages" class="mt-4 text-red-500">
      {{ errorMessages.value }}
    </p>
    <p v-if="successMessage" class="mt-4 text-green-500">
      {{ successMessage.value }}
    </p>
  </div>
</template>
