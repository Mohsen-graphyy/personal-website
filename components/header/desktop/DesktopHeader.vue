<template>
  <div class="flex justify-between items-center py-7">
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
      <svg
        class="w-6 h-6 ml-3 group-hover:text-yellow-300 group-hover:animate-bounce text-violet-600 rotate-45"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z"
        />
        <path
          fill-rule="evenodd"
          d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z"
          clip-rule="evenodd"
        />
      </svg>
    </base-button>
  </div>
</template>

<script>
import BaseButton from "../../base/BaseButton.vue";
import MenuHeader from "./MenuHeader.vue";

export default {
  name: "DesktopHeader",
  components: { MenuHeader, BaseButton },
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
