<template>
  <form class="form">
    <input class="form__input" type="text" placeholder="Shorten a link here..." />
    <button class="form__button">Shorten It!</button>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Form extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
  display: grid;
  background: var(--dark-violet);
  padding: 20px 20px;
  margin: 60px 20px 80px 20px;
  border-radius: 10px;
  gap: 15px;
}
.form__input {
  color: var(--gray);
  height: 38px;
  font-size: 14px;
  padding-left: 14px;
  border: 0;
  border-radius: 6px;
  width: calc(100% - 14px);
  font-family: "Poppins", sans-serif;
}
.form__button {
  font-size: 16px;
  color: white;
  background: var(--cyan);
  border: 0;
  border-radius: 6px;
  width: 100%;
  height: 42px;
  font-family: "Poppins", sans-serif;
}
</style>
