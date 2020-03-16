<template>
  <div>
    <form
      class="relative flex flex-col md:flex-row md:w-10/12 md:max-w-screen-lg md:h-36 mt-16 mx-5 md:mx-auto p-5 items-center rounded-lg bg-darkvoilet"
      @submit.prevent="handleSubmit(link)"
    >
      <!-- #region form svg backgrounds -->
      <svg
        class="absolute top-0 right-0 md:hidden rounded-tr-lg"
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
      <svg
        class="absolute top-0 bottom-0 right-0 left-0 w-full h-full rounded-bl-lg rounded-br-lg rounded-tr-lg hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#4B3F6B"
          fill-rule="evenodd"
          d="M647-93.924c0 52.724 15.5 90.486 73 114.877 57.5 24.391 113.055 2.134 168.786 14.894 55.731 12.76 55.731 94.962 108.214 145.549s163.142 62.874 253.12 11.552c89.976-51.322 130.765-171.152 103.88-241.807C1327.115-119.515 1275.593-184 1027-184c-248.593 0-380 37.353-380 90.076zm-781 213c0 52.724 15.5 90.486 73 114.877 57.5 24.391 113.055 2.134 168.786 14.894 55.731 12.76 55.731 94.962 108.214 145.549s163.142 62.874 253.12 11.552C559.095 354.626 599.884 234.796 573 164.141 546.115 93.485 494.593 29 246 29c-248.593 0-380 37.353-380 90.076z"
        />
      </svg>
      <!-- #endregion -->
      <div class="md:flex md:flex-col w-full md:ml-2 lg:ml-8 md:items-center z-10">
        <label for="form-input" class="sr-only">Enter a url</label>
        <input
          class="w-full h-12 md:h-14 mt-1 md:mt-0 pl-3 border-0 rounded-md outline-none focus:outline-none focus:shadow-outline text-neutral-verydarkblue text-small md:text-lg leading-3xl font-medium tracking-wide"
          :class="{
            'border-3 placeholder-opacity-50 placeholder-secondary-red border-secondary-red': error
          }"
          id="form-input"
          aria-describedby="error-message"
          aria-required="true"
          :aria-invalid="error"
          type="text"
          placeholder="Shorten a link here..."
          v-model.trim="link"
        />
        <div class="md:absolute md:bottom-0 md:left-0 md:ml-14 md:mb-5" aria-live="polite">
          <span
            class="pt-1 italic text-secondary-red text-micro font-medium tracking-wide"
            v-show="error"
            id="error-message"
          >{{ errorMessage }}</span>
        </div>
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
.form-btn {
  @apply w-full h-12 mt-4 rounded-lg z-10;
}

@screen md {
  .form-btn {
    @apply w-56 h-14 mt-0 ml-4 mr-2;
  }
}

@screen lg {
  .form-btn {
    @apply mx-8;
  }
}
</style>
