<template>
  <div>
    <form
      class="flex flex-col md:w-10/12 md:mx-auto mt-16 mx-5 p-5 relative rounded-lg bg-darkvoilet"
      @submit.prevent="handleSubmit(link)"
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
      <label id="form-input" class="sr-only">Enter a url</label>
      <input
        v-model.trim="link"
        class="form-input"
        id="form-input"
        aria-describedby="error-message"
        aria-required="true"
        :aria-invalid="error"
        :class="{ 'input-error': error }"
        type="text"
        placeholder="Shorten a link here..."
      />
      <div class="z-10" aria-live="polite">
        <span v-show="error" id="error-message" class="error-message">
          {{
          errorMessage
          }}
        </span>
      </div>
      <button class="btn form-btn">Shorten It!</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["handleSubmit", "error", "errorMessage"],
  data() {
    return {
      link: ""
    };
  }
};
</script>

<style scoped>
.form-input {
  @apply w-full h-12 mt-1 pl-3 border-0 rounded-md outline-none text-neutral-gray leading-3xl font-semibold text-small z-10;
}

.form-input.input-error {
  @apply border-3 border-secondary-red;
}

.form-input.input-error::placeholder {
  @apply opacity-50 text-secondary-red;
}

.form-input:focus {
  @apply outline-none shadow-outline;
}

.error-message {
  @apply pt-1 italic text-secondary-red text-micro font-semibold z-10;
}

.form-btn {
  @apply w-full h-12 mt-4 rounded-md z-10;
}
</style>
