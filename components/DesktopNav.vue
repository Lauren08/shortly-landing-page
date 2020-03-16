<template>
  <nav class="hidden md:flex md:w-10/12">
    <ul class="list-none flex w-full justify-between items-center">
      <ul class="flex w-full">
        <li>
          <a
            class="px-4 no-underline focus:outline-none focus:shadow-outline text-neutral-grayishvoilet hover:text-neutral-verydarkblue text-tiny font-bold"
            href="#"
          >Features</a>
        </li>
        <li>
          <a
            class="px-4 no-underline focus:outline-none focus:shadow-outline text-neutral-grayishvoilet hover:text-neutral-verydarkblue text-tiny font-bold"
            href="#"
          >Pricing</a>
        </li>
        <li>
          <a
            class="px-4 no-underline focus:outline-none focus:shadow-outline text-neutral-grayishvoilet hover:text-neutral-verydarkblue text-tiny font-bold"
            href="#"
          >Resources</a>
        </li>
      </ul>
      <li>
        <a
          class="mr-2 px-4 no-underline focus:outline-none focus:shadow-outline text-neutral-grayishvoilet hover:text-neutral-verydarkblue text-tiny font-bold"
          href="#"
        >Login</a>
      </li>
      <li>
        <button class="btn full-nav-btn">Sign Up</button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.full-nav-btn {
  @apply h-8 w-24 rounded-full text-tiny;
}
</style>
