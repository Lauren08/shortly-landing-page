<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

@Component({
  components: {
    Header,
    Main,
    Footer,
  },
})
export default class App extends Vue {}
</script>

<style>
:root {
  --cyan: hsl(180, 66%, 49%);
  --red: hsl(0, 87%, 67%);
  --gray: hsl(0, 0%, 75%);
  --white: #ffffff;
  --black: #000000;
  --grayish-violet: hsl(257, 7%, 63%);
  --dark-violet: hsl(257, 27%, 26%);
  --very-dark-blue: hsl(255, 11%, 22%);
  --very-dark-violet: hsl(260, 8%, 14%);
  --font-large: 18px;
  --font-medium: 16px;
  --font-small: 14px;
}
html,
body {
  height: 100%;
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}
body {
  font-size: var(--font-large);
}
h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--very-dark-violet);
  line-height: 1.2;
}
h1 {
  font-size: 32px;
  margin: 10px 0 0 0;
}
h2 {
  font-size: 26px;
  margin: 10px 0 0 0;
}
h4 {
  font-size: 25px;
  margin: 0 0 18px 0;
}
p {
  color: var(--gray);
  font-size: var(--font-medium);
  line-height: 1.5;
  margin: 18px 25px 0 25px;
}
.sr-only {
  border: 0;
  clip: rect(0 0 0 0);
  height: auto;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
.button {
  background: var(--cyan);
  border-radius: 40px;
  border: 0;
  color: var(--white);
  font-family: "Poppins", sans-serif;
  font-size: var(--font-medium);
  height: 42px;
  width: 150px;
}
</style>
