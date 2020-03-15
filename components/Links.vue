<template>
  <section>
    <div class="flex flex-col" v-for="link in links" :key="link.created_at">
      <Link :link="link" />
    </div>
  </section>
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
