<template>
  <form class="form" v-on:submit.prevent="handleSubmit">
    <svg class="form__svg" xmlns="http://www.w3.org/2000/svg" width="237" height="128">
      <path
        fill="#4B3F6B"
        fill-rule="evenodd"
        d="M0-.924C0 51.8 15.5 89.562 73 113.953c57.5 24.391 113.055 2.134 168.786 14.894 55.731 12.76 55.731 94.962 108.214 145.549s163.142 62.874 253.12 11.552C693.095 234.626 733.884 114.796 707 44.141 680.115-26.515 628.593-91 380-91 131.407-91 0-53.647 0-.924z"
      />
    </svg>
    <input
      class="form__input"
      :class="{ 'form__input-error': error }"
      v-model.trim="link"
      type="text"
      placeholder="Shorten a link here..."
    />
    <span class="form__error" v-if="error">{{ errorMessage }}</span>
    <button class="button form__button">Shorten It!</button>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Form extends Vue {
  link: string = "";

  error: boolean = false;

  errorMessage: string = "Please add a link";

  handleSubmit(): void {
    if (!this.link) {
      this.error = true;
      return;
    }

    this.error = false;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
  position: relative;
  background: var(--dark-violet);
  border-radius: 10px;
  display: grid;
  gap: 15px;
  margin: 60px 20px 80px 20px;
  padding: 20px 20px;
}
.form__svg {
  position: absolute;
  border-top-right-radius: 10px;
  right: 0;
  top: 0;
}
.form__input {
  border-radius: 6px;
  border: 0;
  color: var(--gray);
  font-family: "Poppins", sans-serif;
  font-size: var(--font-small);
  height: 40px;
  padding-left: 14px;
  margin-top: 5px;
  width: calc(100% - 14px);
  z-index: 10;
}
.form__input-error {
  box-shadow: 3px 3px var(--red), 3px 0px var(--red), 0px 3px var(--red), 3px -3px var(--red), -3px 3px var(--red),
    -3px -3px var(--red), -3px 0px var(--red), 0px -3px var(--red);
}
.form__input-error::-webkit-input-placeholder {
  color: var(--red);
}
.form__input-error::-moz-placeholder {
  color: var(--red);
}
.form__input-error:-ms-input-placeholder {
  color: var(--red);
}
.form__error {
  color: var(--red);
  font-style: italic;
  font-size: var(--font-small);
  line-height: 1;
  z-index: 10;
}
.form__button {
  border-radius: 6px;
  margin-top: 5px;
  width: 100%;
  height: 45px;
  z-index: 10;
}
</style>
