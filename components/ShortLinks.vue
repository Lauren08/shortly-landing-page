<template>
  <div class="link-container">
    <p class="link">{{ link.url }}</p>
    <hr class="horizontal-line" />
    <p class="short-link">{{ `https://rel.ink/${link.hashid}` }}</p>
    <button
      class="btn link-btn"
      :class="{ 'link-btn__copied': copied }"
      @click="handleClick(`https://rel.ink/${link.hashid}`)"
    >{{ copied ? "Copied!" : "Copy" }}</button>
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
      if (!navigator.clipboard) {
        return;
      }

      try {
        await navigator.clipboard.writeText(url);
        this.copied = true;
      } catch (err) {
        console.error("Failed to copy!", err);
      }
    }
  }
};
</script>

<style scoped>
.link-container {
  @apply flex flex-col self-center w-11/12 mt-6 shadow-sm rounded-md bg-white text-small leading-3xl font-semibold;
}

.link {
  @apply px-4 py-1;
}

.horizontal-line {
  @apply text-neutral-gray opacity-25;
}

.short-link {
  @apply px-4 py-1 text-cyan;
}

.link-btn {
  @apply w-11/12 h-10 mb-4 rounded-md text-small;
}

.link-btn__copied {
  @apply bg-darkvoilet;
}
</style>
