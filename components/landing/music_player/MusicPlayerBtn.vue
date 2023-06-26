<template>
  <div
    class="transition duration-100 cursor-pointer"
    :class="btnCustomClass"
    :id="iconId"
    :title="iconTitle"
    @click.prevent="$emit(`${iconId}`)"
  >
    <slot name="icon"></slot>
  </div>
</template>

<script>
export default {
  props: {
    iconId: {
      type: String,
      required: true,
    },
    iconTitle: {
      type: String,
      required: true,
    },
    btnCustomClass: {
      type: String,
      default: "bg-violet-100 p-1 rounded-lg flex w-fit hover:bg-violet-300",
    },
  },
};
</script>
