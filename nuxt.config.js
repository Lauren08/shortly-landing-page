export default {
  mode: "universal",
  head: {
    title: "Shortly",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/png", href: "favicon.png" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap"
      }
    ]
  },
  loading: { color: "#2ACFCF" },
  css: [],
  plugins: [],
  buildModules: ["@nuxtjs/eslint-module", "@nuxtjs/tailwindcss"],
  modules: ["@nuxtjs/pwa"],
  pwa: {
    icons: {
      iconSrc: "favicon.png"
    }
  },
  build: {
    extend(config, ctx) {}
  }
};
