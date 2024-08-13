// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "nuxt-swiper", "@pinia/nuxt"],
  css: ["~/assets/css/tailwind.css"],
});
