<template>
  <div
    class="rounded-xl bg-violet-200 my-10 md:my-24 flex justify-center md:justify-between items-center md:h-52 relative"
  >
    <div
      v-if="$breakpoints.xl"
      class="basis-1/4 flex justify-center items-center p-5"
    >
      <img
        src="/personal-website/images/mohsen-audio.jpeg"
        alt="mohsen piri"
        class="rounded-xl w-64 object-cover absolute"
      />
    </div>
    <music-player-container></music-player-container>
  </div>
</template>

<script>
import MusicPlayerContainer from "~/components/landing/music_player/MusicPlayerContainer.vue";
export default {
  components: {
    MusicPlayerContainer,
  },
};
</script>
<style scoped>
.my-image {
  filter: hue-rotate(270deg) saturate(1.5) brightness(0.8);
}
</style>
