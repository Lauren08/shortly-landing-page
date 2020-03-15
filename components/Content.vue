<template>
  <div class="-mt-20 md:-mt-18 pt-20 bg-neutral-lightgray">
    <Links :links="links" />
    <Features />
  </div>
</template>

<script>
import Links from "./Links";
import Features from "./Features";

export default {
  props: ["links"],
  components: {
    Links,
    Features
  }
};
</script>
