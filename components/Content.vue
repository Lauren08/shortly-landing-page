<template>
  <div class="-mt-20 pt-20 bg-neutral-lightgray">
    <section class="flex flex-col" v-for="link in links" :key="link.created_at">
      <ShortLinks :link="link" />
    </section>
    <section class="pt-20">
      <h2 class="w-11/12 mx-auto text-2xl leading-2xl font-bold text-center">Advanced Statistics</h2>
      <p
        class="w-11/12 mt-2 pt-2 mx-auto px-1 leading-2xl text-center text-neutral-grayishvoilet text-small font-medium"
      >
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div class="flex mb-24 justify-center">
        <div class="h-full w-2 mt-20 bg-cyan absolute"></div>
        <div class="flex flex-col relative">
          <div v-for="card in cards" :key="card.heading">
            <Card :card="card" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Card from "./Card";
import ShortLinks from "./ShortLinks.vue";

export default {
  props: ["links"],
  components: {
    Card,
    ShortLinks
  },
  data() {
    return {
      cards: [
        {
          heading: "Brand Recognition",
          content:
            "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
        },
        {
          heading: "Detailed Records",
          content:
            "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        },
        {
          heading: "Fully Customizable",
          content:
            "Improve brand awareness and content discoverabilty through customizable links, supercharging audience engagement."
        }
      ]
    };
  }
};
</script>
