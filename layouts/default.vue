<template>
  <section class="container mx-auto from-right">
    <desktop-header></desktop-header>
    <Nuxt />
  </section>
</template>

<script>
import DesktopHeader from "../components/header/desktop/DesktopHeader.vue";

export default {
  components: { DesktopHeader },
};
</script>
