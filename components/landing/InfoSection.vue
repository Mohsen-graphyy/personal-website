<template>
  <div class="flex flex-col">
    <h1 class="text-7xl font-semibold ">Mohsen Piri <span class="text-3xl">🖐🏻</span></h1>
    <div class="flex mt-3 items-center">
      <div class="border-t border-gray-600 w-24"></div>
      <p class="pl-5 font-semibold text-xl text-gray-600">FrontEnd Developer</p>
    </div>
    <div class="mt-8 mr-48">
      A responsible, punctual, and dedicated Frontend developer with over three years of professional experience in private and public companies.
    </div>
    <div class="mt-20">
      <base-button button-title="Who am I ?"></base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from '~/components/base/BaseButton.vue';
export default {
  components:{
    BaseButton
  }
}
</script>

<style>

</style>
