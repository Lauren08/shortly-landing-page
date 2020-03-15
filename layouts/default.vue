<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
html {
  font-size: 18px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;
}

*,
*:before,
*:after {
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
  margin: 0;
}

::-moz-selection {
  background: #2acfcf;
  color: #ffffff;
}

::selection {
  background: #2acfcf;
  color: #ffffff;
}

.btn {
  @apply h-8 w-48 mx-auto border-0 outline-none bg-cyan text-white font-bold;
}

.btn:hover {
  @apply bg-lightCyan;
}

.btn:focus {
  @apply outline-none shadow-outline;
}
</style>
