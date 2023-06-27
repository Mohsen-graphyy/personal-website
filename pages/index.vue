<template>
  <div>
    <div class="h-screan lg:px-28 md:px-10 px-5">
      <section
        class="pt-40 md:pt-20 flex flex-col md:flex-row justify-around items-center"
      >
        <info-section class="basis-1/2"></info-section>
        <div class="basis-1/2 mt-10 md:mt-0 overflow-hidden hover:rounded-2xl">
          <img
            class="z-1 object-cover hover:rounded-2xl rounded-2xl transform duration-200 hover:scale-150"
            src="/personal-website/images/MohsenPiri.jpg"
            alt="mohsen piri"
          />
        </div>
      </section>
      <music-player></music-player>
    </div>
    <div class="lg:px-28 md:px-10 px-5 py-20 bg-violet-400 relative clip-fit">
      <div class="">dsad</div>
    </div>
  </div>
</template>
<router>
  {
    name: 'homePage'
  }
</router>
<script>
import InfoSection from "~/components/landing/InfoSection.vue";
import MusicPlayer from "~/components/landing/music_player/MusicPlayer.vue";
export default {
  components: { InfoSection, MusicPlayer },
  name: "IndexPage",
  head() {
    return {
      title: "Mohsen Piri Resume",
    };
  },
};
</script>
<style>
.z-1 {
  z-index: -1 !important;
  position: relative;
}
/* .clip-fit::before {
  content: "";
  width: 100%;
  height: 100px;
  background-color: aqua;
  transform: rotate(-5deg);
  position: absolute;
  z-index: -1;
  top: -10%;
  left: 0;
} */
</style>
