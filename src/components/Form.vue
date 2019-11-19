<template>
  <form class="form" v-on:submit.prevent>
    <input class="form__input" v-model.trim="link" type="text" placeholder="Shorten a link here..." required />
    <button class="button form__button">Shorten It!</button>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Form extends Vue {
  link: string = "";
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
  background: var(--dark-violet);
  border-radius: 10px;
  display: grid;
  gap: 15px;
  margin: 60px 20px 80px 20px;
  padding: 20px 20px;
}
.form__input {
  border-radius: 6px;
  border: 0;
  color: var(--gray);
  font-family: "Poppins", sans-serif;
  font-size: var(--font-small);
  height: 38px;
  padding-left: 14px;
  width: calc(100% - 14px);
}
.form__button {
  border-radius: 6px;
  width: 100%;
}
</style>
