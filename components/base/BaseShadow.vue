<template>
  <base-transition name="fade">
    <template>
      <div v-if="isShow" class="shadow"></div>
    </template>
  </base-transition>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
