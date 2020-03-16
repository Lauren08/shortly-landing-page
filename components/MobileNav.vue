<template>
  <nav
    v-if="expanded"
    class="md:hidden absolute block left-0 right-0 top-0 w-11/12 max-w-sm mt-24 mx-auto rounded-lg bg-darkvoilet text-center"
  >
    <ul class="list-none p-5">
      <li>
        <a
          class="block no-underline mx-2 py-3 text-white font-bold focus:outline-none focus:shadow-outline"
          href="#"
          >Features</a
        >
      </li>
      <li>
        <a
          class="block no-underline mx-2 py-3 text-white font-bold focus:outline-none focus:shadow-outline"
          href="#"
          >Pricing</a
        >
      </li>
      <li>
        <a
          class="block no-underline mx-2 py-3 text-white font-bold focus:outline-none focus:shadow-outline"
          href="#"
          >Resources</a
        >
      </li>
      <li aria-hidden="true">
        <hr
          class="w-11/12 opacity-25 mx-auto my-3 border-neutral-grayishvoilet"
        />
      </li>
      <li>
        <a
          class="block no-underline mx-2 py-3 text-white font-bold focus:outline-none focus:shadow-outline"
          href="#"
          >Login</a
        >
      </li>
      <li class="my-4">
        <button class="btn nav-btn">Sign Up</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["expanded"]
};
</script>

<style scoped>
.nav-btn {
  @apply w-full max-w-sm h-12 rounded-full;
}
</style>
