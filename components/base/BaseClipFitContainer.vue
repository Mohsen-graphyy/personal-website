<template>
  <div class="flex flex-col gap-0 relative w-full pt-40 md:pt-40">
    <!-- <span class="clip-fit"></span> -->
    <div class="py-20 md:py-40 lg:px-28 md:px-10 px-5" :class="containerClass">
      <slot></slot>
    </div>
    <!-- <div class="clip-fit-down"></div> -->
  </div>
</template>
<script>
export default {
  name: "BaseClipFitContainer",
  props: {
    containerClass: {
      type: String,
      default:
        "bg-violet-400 flex flex-col md:flex-row-reverse md:justify-between md:items-center md:gap-10",
    },
  },
};
</script>
<style scoped>
.clip-fit {
  clip-path: polygon(0% 100%, 100% 0%, 100% 100%, 0% 100%);
  background-color: rgb(167 139 250);
  height: 140px;
  width: 100%;
  margin: -1px 0;
}
.clip-fit-down {
  clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 100%);
  background-color: rgb(167 139 250);
  height: 140px;
  margin: -1px 0;
}
</style>
