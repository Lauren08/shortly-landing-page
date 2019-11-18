<template>
  <div id="app">
    <Header />
    <Main />
    <Form />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Form from "./components/Form.vue";

@Component({
  components: {
    Header,
    Main,
    Form,
  },
})
export default class App extends Vue {}
</script>

<style>
:root {
  --cyan: hsl(180, 66%, 49%);
  --read: hsl(0, 87%, 67%);
  --gray: hsl(0, 0%, 75%);
  --grayish-violet: hsl(257, 7%, 63%);
  --dark-violet: hsl(257, 27%, 26%);
  --very-dark-blue: hsl(255, 11%, 22%);
  --very-dark-violet: hsl(260, 8%, 14%);
}
html,
body {
  height: 100%;
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
  font-size: 18px;
}
.sr-only {
  border: 0;
  clip: rect(0 0 0 0);
  height: auto;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
}
</style>
