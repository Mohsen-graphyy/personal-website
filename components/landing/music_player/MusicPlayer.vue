<template>
  <div
    class="relative p-5 bg-white md:p-3 rounded-lg my-20 md:my-10 flex items-center"
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
