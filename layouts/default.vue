<template>
  <section class="container mx-auto from-right lg:px-10 px-5 overflow-x-hidden">
    <desktop-header v-if="$breakpoints.xl"></desktop-header>
    <mobile-header v-else></mobile-header>
    <Nuxt />
  </section>
</template>

<script>
import DesktopHeader from "../components/header/desktop/DesktopHeader.vue";
import MobileHeader from "~/components/header/mobile/MobileHeader.vue";

export default {
  components: { DesktopHeader, MobileHeader },
};
</script>
