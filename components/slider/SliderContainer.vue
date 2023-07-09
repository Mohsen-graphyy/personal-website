<template>
  <div class="h-64 w-full bg-white overflow-y-hidden flex flex-col gap-4 p-4">
    <div
      v-for="item in sliderItem"
      :key="item"
      class="bg-violet-300 p-5 rounded-lg"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sliderItem: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
