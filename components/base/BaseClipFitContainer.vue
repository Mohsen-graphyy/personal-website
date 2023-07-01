<template>
  <div class="flex flex-col gap-0 relative w-full">
    <span class="clip-fit"></span>
    <div
      class="py-20 lg:px-28 md:px-10 px-5 bg-violet-400 flex flex-col md:flex-row md:justify-between md:items-start"
    >
      <slot></slot>
    </div>
    <div class="clip-fit-down"></div>
  </div>
</template>
<script>
export default {
  name: "BaseClipFitContainer",
};
</script>
<style scoped>
.clip-fit {
  clip-path: polygon(0% 100%, 100% 0%, 100% 100%, 0% 100%);
  background-color: rgb(167 139 250);
  height: 140px;
  z-index: -1;
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
