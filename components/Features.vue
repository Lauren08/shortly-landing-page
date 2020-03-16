<template>
  <section class="pt-20">
    <div class="w-full md:w-3/5 lg:w-2/5 mx-auto">
      <h2
        class="w-11/12 mx-auto text-neutral-verydarkblue text-2xl lg:text-4xl leading-2xl lg:leading-4xl tracking-tighter font-bold text-center"
      >Advanced Statistics</h2>
      <p
        class="w-11/12 mt-2 pt-2 mx-auto px-1 text-neutral-grayishvoilet text-small lg:text-base lg:leading-2xl leading-2xl tracking-wide text-center font-medium"
      >
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
    </div>
    <Cards />
  </section>
</template>

<script>
import Cards from "./Cards";

export default {
  components: {
    Cards
  }
};
</script>
