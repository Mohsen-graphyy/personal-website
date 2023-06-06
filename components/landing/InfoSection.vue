<template>
  <div class="flex flex-col">
    <h1 class="text-3xl md:text-7xl font-semibold">
      Mohsen Piri <span class="text-3xl">🖐🏻</span>
    </h1>
    <div class="flex mt-3 items-center">
      <div class="border-t border-gray-600 w-24"></div>
      <p class="pl-5 font-semibold text-xl text-gray-600">FrontEnd Developer</p>
    </div>
    <div class="mt-8 lg:mr-48">
      A responsible, punctual, and dedicated Frontend developer with over three
      years of professional experience in private and public companies.
    </div>
    <div class="mt-20">
      <base-button
        button-title="Download CV"
        :btn-class="btnClass"
        @clicked="cvDownloader"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 ml-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
      </base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from "~/components/base/BaseButton.vue";
export default {
  components: {
    BaseButton,
  },
  data() {
    return {
      btnClass:
        "px-5 py-2 border-violet-600 bg-violet-600 hover:text-violet-600 hover:bg-white text-white",
    };
  },
  methods: {
    cvDownloader() {
      const base = window.location;
      window.open(base + "file/mohsenPiri.pdf", "_blank");
    },
  },
};
</script>

<style></style>
