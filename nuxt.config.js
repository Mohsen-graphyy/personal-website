export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  mode: "spa",
  target: "static",
  generate: {
    dir: "docs",
  },
  router: {
    base: "/personal-website/",
  },
  layout: "default",
  head: {
    title: "resume",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/personal-website/fav/favicon.ico",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/personal-website/fav/favicon-32x32.png",
      },
    ],
  },
  pageTransition: {
    name: "slide",
    mode: "out-in",
  },
  transitions: {
    slide: {
      enterActiveClass: "slide-enter-active",
      leaveActiveClass: "slide-leave-active",
    },
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/router-extras"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
};
