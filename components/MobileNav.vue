<template>
  <nav
    v-if="expanded"
    class="absolute md:hidden w-11/12 max-w-sm block left-0 right-0 top-0 mt-24 mx-auto bg-darkvoilet rounded-lg text-center"
  >
    <ul class="list-none p-5">
      <li>
        <a
          class="block no-underline mx-2 py-3 focus:outline-none focus:shadow-outline text-white font-semibold"
          href="#"
        >Features</a>
      </li>
      <li>
        <a
          class="block no-underline mx-2 py-3 focus:outline-none focus:shadow-outline text-white font-semibold"
          href="#"
        >Pricing</a>
      </li>
      <li>
        <a
          class="block no-underline mx-2 py-3 focus:outline-none focus:shadow-outline text-white font-semibold"
          href="#"
        >Resources</a>
      </li>
      <li aria-hidden="true">
        <hr class="mx-auto my-3 w-11/12 opacity-25 border-neutral-grayishvoilet" />
      </li>
      <li>
        <a
          class="block no-underline mx-2 py-3 focus:outline-none focus:shadow-outline text-white font-semibold"
          href="#"
        >Login</a>
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
