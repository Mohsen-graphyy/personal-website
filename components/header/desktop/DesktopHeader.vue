<template>
  <div class="relative z-50">
    <div class="fixed top-0 right-0 w-full">
      <div
        class="flex lg:px-10 px-5 justify-between items-center py-3 transition-colors duration-500"
        :class="{ 'bg-white drop-shadow-lg': isScrolled }"
      >
        <div class="flex items-center">
          <img
            class="w-10"
            src="/personal-website/images/perp-MP-logo.png"
            alt="Mohsen piri"
          />
          <p class="text-violet-600 font-semibold pl-5 text-xl">Mohsen Piri</p>
        </div>
        <menu-header></menu-header>
        <base-button class="group" button-title="Job Offer!">
          <base-icon icon-path="RingToun" />
        </base-button>
      </div>
    </div>
  </div>
</template>

<script>
import MenuHeader from "~/components/header/desktop/MenuHeader.vue";
export default {
  name: "DesktopHeader",
  components: { MenuHeader },
  data() {
    return {
      isScrolled: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.pageYOffset > 0;
    },
  },
};
</script>
<style>
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.animate-bounce:hover {
  animation: bounce 0.5s ease-in-out;
}
</style>
