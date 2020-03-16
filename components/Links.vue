<template>
  <div class="flex flex-col items-center w-full">
    <div class="w-full" v-for="link in links" :key="link.created_at">
      <Link :link="link" />
    </div>
  </div>
</template>

<script>
import Link from "./Link";

export default {
  props: ["links"],
  components: {
    Link
  }
};
</script>
