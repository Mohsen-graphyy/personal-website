<template>
  <div
    class="relative p-5 md:p-3 md:w-1/2 border border-violet-500 rounded-lg my-20 md:my-24 flex items-center"
  >
    <music-player-container
      file="file/StiveDemo.mp3"
      file-name="Mohsen Description"
      file-title="Description who am I ?"
    ></music-player-container>
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
