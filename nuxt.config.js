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
  buildModules: ["@nuxtjs/tailwindcss"],
  modules: ["@nuxtjs/sentry", "@nuxtjs/pwa"],
  sentry: {
    dsn: "https://235750b25c4c4e5da45c6e144a111eb5@sentry.io/2766050",
    publishRelease: true,
    attachCommits: true,
    org: "asjas",
    repo: "https://github.com/Asjas/shortly-landing-page"
  },
  pwa: {
    icons: {
      iconSrc: "favicon.png"
    }
  },
  build: {
    extend(config, ctx) {}
  }
};
