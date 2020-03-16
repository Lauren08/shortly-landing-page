<template>
  <main class="flex flex-col">
    <Hero />
    <Form
      :handleSubmit="handleSubmit"
      :error="error"
      :errorMessage="errorMessage"
    />
    <Content :links="links" />
    <Cta />
  </main>
</template>

<script>
import Hero from "./Hero.vue";
import Form from "./Form.vue";
import Content from "./Content.vue";
import Cta from "./Cta.vue";

export default {
  components: {
    Hero,
    Form,
    Content,
    Cta
  },
  data() {
    return {
      links: [],
      error: false,
      errorMessage: ""
    };
  },
  mounted: function() {
    this.$nextTick(function() {
      const linksStoredInSession = this.$session.getAll();
      let links;
      if (linksStoredInSession) {
        links = Object.entries(linksStoredInSession).filter(
          link => link[0] !== "session-id"
        );
      }

      links.map(link => this.loadLinkFromSession(link));
    });
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
        .then(data => {
          this.$session.set(data.url, {
            hashid: data.hashid,
            created_at: data.created_at
          });
          this.links.push(data);

          return;
        })
        .catch(err => {
          this.$sentry.captureException(err);
          console.error(err);
        });
    },
    loadLinkFromSession(link) {
      const data = {
        url: link[0],
        hashid: link[1].hashid,
        created_at: link[1].created_at
      };

      this.links.push(data);
      return;
    }
  }
};
</script>
