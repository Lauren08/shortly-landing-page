<template>
  <main class="flex flex-col">
    <Landing />
    <Form />
    <Branding />
    <Cta />
  </main>
</template>

<script>
import Landing from "./Landing.vue";
import Form from "./Form.vue";
import Branding from "./Branding.vue";
import Cta from "./Cta.vue";

export default {
  components: {
    Landing,
    Form,
    Branding,
    Cta
  }
};
</script>
