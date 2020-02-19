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
  @apply mx-auto h-14 w-48 border-0 rounded-full outline-none bg-cyan text-white font-bold;
}

.btn:focus {
  @apply outline-none shadow-outline;
}
</style>
