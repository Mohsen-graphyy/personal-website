<template>
  <button
    class="flex justify-between items-center rounded-lg border transition duration-100"
    :class="btnClass"
    @click="$emit('clicked')"
  >
    <p class="font-semibold">{{ buttonTitle }}</p>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    buttonTitle: {
      type: String,
      required: true,
    },
    btnClass: {
      type: String,
      required: false,
      default:
        "p-2 border-violet-600 bg-violet-200 text-violet-600 hover:bg-violet-600 hover:text-white",
    },
  },
};
</script>
