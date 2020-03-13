<template>
  <main class="flex flex-col">
    <Hero />
    <Form
      :handleSubmit="handleSubmit"
      :error="error"
      :errorMessage="errorMessage"
    />
    <Features :links="links" />
    <Cta />
  </main>
</template>

<script>
import Hero from "./Hero.vue";
import Form from "./Form.vue";
import Features from "./Features.vue";
import Cta from "./Cta.vue";

export default {
  components: {
    Hero,
    Form,
    Features,
    Cta
  },
  data() {
    return {
      links: [],
      error: false,
      errorMessage: ""
    };
  },
  methods: {
    handleSubmit(link) {
      if (!link) {
        this.error = true;
        this.errorMessage = "Please add a link";
        return;
      }

      this.error = false;

      this.postURL(link);
    },
    postURL(link) {
      fetch("https://rel.ink/api/links/", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ url: link })
      })
        .then(resp => {
          if (resp.status === 400) {
            this.errorMessage = "Please enter a valid url";
            this.error = true;
            return;
          }

          return resp.json();
        })
        .then(data => this.links.push(data))
        .catch(err => {
          this.$sentry.captureException(err);
          console.error(err);
        });
    }
  }
};
</script>
