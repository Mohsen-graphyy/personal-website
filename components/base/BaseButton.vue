<template>
  <button class="flex justify-between items-center p-2 rounded-lg border transition duration-100
   border-violet-600
   bg-violet-200
   text-violet-600
   hover:bg-violet-600
  hover:text-white ">
    <p class="font-semibold">{{ buttonTitle }}</p>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props:{
    buttonTitle: {
      type: String,
      required: true
    }
  }
}
</script>

