<template>
  <section class="py-20 flex justify-around items-center">
    <info-section class="basis-1/2"></info-section>
    <div class="basis-1/2">
      <img
        class="object-cover hover:rounded-2xl rounded-2xl transform duration-200 hover:scale-150"
        src="/personal-website/images/MohsenPiri.jpg"
        alt="mohsen piri"
      />
    </div>
  </section>
</template>
<router>
  {
    name: 'homePage'
  }
</router>
<script>
import InfoSection from "../components/landing/InfoSection.vue";

export default {
  components: { InfoSection },
  name: "IndexPage",
};
</script>
