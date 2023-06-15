<template>
  <a :href="link" target="_blank" rel="noopener">
    <svg
      class="ml-4 drop-shadow-xl rounded-lg h-10 w-10 text-purple-500 bg-white p-2 transition duration-150 hover:bg-violet-400 hover:text-white"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <slot></slot>
    </svg>
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>
