<template>
  <form
    class="relative bg-darkvoilet rounded-lg flex flex-col mt-16 mx-5 p-5"
    @submit.prevent="handleSubmit"
  >
    <svg
      class="absolute top-0 right-0 rounded-tr-lg"
      xmlns="http://www.w3.org/2000/svg"
      width="237"
      height="128"
    >
      <path
        fill="#4B3F6B"
        fill-rule="evenodd"
        d="M0-.924C0 51.8 15.5 89.562 73 113.953c57.5 24.391 113.055 2.134 168.786 14.894 55.731 12.76 55.731 94.962 108.214 145.549s163.142 62.874 253.12 11.552C693.095 234.626 733.884 114.796 707 44.141 680.115-26.515 628.593-91 380-91 131.407-91 0-53.647 0-.924z"
      />
    </svg>
    <input
      v-model.trim="link"
      class="w-full border-0 h-12 mt-1 pl-3 z-10 rounded-md outline-none focus:outline-none focus:shadow-outline text-gray font-semibold text-small"
      aria-describedby="error-message"
      aria-required="true"
      :aria-invalid="error"
      :class="{ 'border border-red': error }"
      type="text"
      placeholder="Shorten a link here..."
    />
    <span
      v-show="error"
      id="error-message"
      aria-live="polite"
      class="z-10 pt-2 italic text-secondary-red text-tiny"
      >{{ errorMessage }}</span
    >
    <button
      class="w-full h-12 mt-4 mx-auto b-0 z-10 bg-cyan rounded-md outline-none focus:outline-none focus:shadow-outline text-white font-bold"
    >
      Shorten It!
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      link: "",
      error: false,
      errorMessage: "Please add a link"
    };
  },
  methods: {
    handleSubmit() {
      if (!this.link) {
        this.error = true;
        return;
      }

      this.error = false;
    }
  }
};
</script>
