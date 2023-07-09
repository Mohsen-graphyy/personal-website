<template>
  <div class="flex flex-row items-center">
    <div class="bg-violet-100 rounded-lg p-3">
      <base-icon
        :icon-path="iconPath"
        svg-class="w-5 h-5 text-violet-400"
      ></base-icon>
    </div>
    <h1 class="text-3xl font-bold ml-4" :class="textClass">
      {{ title }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "BaseTitle",
  props: {
    title: {
      type: String,
      required: true,
    },
    iconPath: {
      type: String,
      required: true,
    },
    textClass: {
      type: String,
      default: "text-violet-500",
    },
  },
};
</script>

