<template>
  <section class="flex justify-around items-center">
    <info-section class="basis-1/2"></info-section>
    <div class="basis-1/2">
      <img class="object-cover" src="/images/RESUME.png" alt="">
    </div>
  </section>
</template>
<router>
  {
    name: 'homePage'
  }
</router>
<script>
import InfoSection from '../components/landing/InfoSection.vue'

export default {
  components: { InfoSection },
    name: "IndexPage",
}
</script>
