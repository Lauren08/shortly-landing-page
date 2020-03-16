<template>
  <div
    class="flex flex-col md:flex-row self-center md:items-center md:justify-between md:w-10/12 md:max-w-screen-lg mt-6 mx-5 md:px-4 md:mx-auto shadow-sm rounded-md bg-white text-small md:text-lg leading-3xl font-medium"
  >
    <p class="px-4 py-1 text-neutral-verydarkblue font-medium tracking-wide">
      {{ link.url }}
    </p>
    <hr class="md:hidden text-neutral-grayishvoilet opacity-25" />
    <div class="flex flex-col md:flex-row md:pr-2 md:items-center">
      <p class="px-4 py-1 text-cyan font-medium tracking-wide">
        {{ `https://rel.ink/${link.hashid}` }}
      </p>
      <button
        class="btn link-btn"
        :class="{ 'link-btn--purple': copied }"
        @click="handleClick(`https://rel.ink/${link.hashid}`)"
      >
        {{ copied ? "Copied!" : "Copy" }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["link"],
  data() {
    return {
      copied: false
    };
  },
  methods: {
    async handleClick(url) {
      console.log("running");
      if (!navigator.clipboard) {
        console.log("cannot copy text to clipboard");
        return;
      }

      try {
        await navigator.clipboard.writeText(url);
        this.copied = true;
      } catch (err) {
        this.$sentry.captureException(err);
        console.error("Failed to copy!", err);
      }
    }
  }
};
</script>

<style scoped>
.link-btn {
  @apply w-11/12 h-10 mb-4 rounded-md text-small leading-xl;
}

.link-btn--purple {
  @apply bg-darkvoilet;
}

@screen md {
  .link-btn {
    @apply w-24 my-3 text-tiny;
  }
}
</style>
