<template>
  <div
    class="flex flex-col self-center w-11/12 mt-6 shadow-sm rounded-md bg-white text-small leading-3xl font-medium"
  >
    <p class="px-4 py-1">{{ link.url }}</p>
    <hr class="text-neutral-gray opacity-25" />
    <p class="px-4 py-1 text-cyan">{{ `https://rel.ink/${link.hashid}` }}</p>
    <Button
      class="w-11/12 h-10 mb-4 rounded-md text-small"
      :class="{ 'bg-darkvoilet': copied }"
      @click="handleClick(`https://rel.ink/${link.hashid}`)"
    >{{ copied ? "Copied!" : "Copy" }}</Button>
  </div>
</template>

<script>
import Button from "./Button";

export default {
  props: ["link"],
  components: {
    Button
  },
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
