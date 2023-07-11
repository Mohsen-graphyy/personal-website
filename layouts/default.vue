<template>
  <section class="w-full md:py-7">
    <desktop-header v-if="$breakpoints.xl"></desktop-header>
    <mobile-header v-else></mobile-header>
    <Nuxt class="bg-gray-50" />
  </section>
</template>

<script>
import DesktopHeader from "../components/header/desktop/DesktopHeader.vue";
import MobileHeader from "~/components/header/mobile/MobileHeader.vue";

export default {
  components: { DesktopHeader, MobileHeader },
};
</script>
