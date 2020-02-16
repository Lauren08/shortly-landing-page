<template>
  <div>
    <TheHeader />
    <Main />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "~/components/TheHeader.vue";
import Main from "~/components/Main.vue";
import TheFooter from "~/components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    Main,
    TheFooter
  }
};
</script>
