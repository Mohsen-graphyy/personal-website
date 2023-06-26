<template>
  <div
    class="rounded-xl p-5 md:p-3 bg-violet-200 my-10 md:my-24 flex items-center"
  >
    <div v-if="$breakpoints.xl" class="flex items-center">
      <img
        src="/personal-website/images/mohsen-audio.jpeg"
        alt="mohsen piri"
        class="rounded-xl w-14 h-14 object-cover"
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
