<template>
  <div class="flex w-full">
    <div class="flex flex-col w-full">
      <div class="flex flex-col">
        <p class="font-semibold">{{ fileName }}</p>
        <p class="text-sm">{{ fileTitle }}</p>
      </div>
      <div class="flex justify-center items-center gap-3 mt-3" id="seek">
        <div class="text-xs">
          {{ this.currentSeconds | convertTimeHHMMSS }}
        </div>
        <div class="relative bg-gray-200 h-1 w-full">
          <div
            :style="progressStyle"
            class="absolute left-0 top-0 h-full bottom-0 bg-violet-500 z-10"
          ></div>
          <div
            v-on:click="seek"
            class="absolute left-0 top-0 h-full bottom-0 w-full z-20 cursor-pointer"
            title="Seek"
          ></div>
        </div>
        <div class="text-xs">
          <div class="player-time-total">
            {{ this.durationSeconds | convertTimeHHMMSS }}
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center gap-3 mt-3">
        <music-player-btn
          icon-id="download"
          icon-title="Download"
          @download="download"
        >
          <template v-slot:icon>
            <base-icon
              icon-path="Download"
              svg-class="w-5 h-5 text-white"
            ></base-icon>
          </template>
        </music-player-btn>
        <music-player-btn icon-id="stop" icon-title="Stop" @stop="stop">
          <template v-slot:icon>
            <svg
              class="w-5 h-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M16,4.995v9.808C16,15.464,15.464,16,14.804,16H4.997C4.446,16,4,15.554,4,15.003V5.196C4,4.536,4.536,4,5.196,4h9.808C15.554,4,16,4.446,16,4.995z"
              />
            </svg>
          </template>
        </music-player-btn>
        <music-player-btn
          icon-id="play"
          btn-custom-class=" bg-violet-500 p-1 items-center justify-center flex hover:bg-violet-400 rounded-full w-fit "
          :icon-title="playing ? 'Pause' : 'Play'"
          @play="playing = !playing"
        >
          <template v-slot:icon>
            <svg
              class="w-7 h-7 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                v-if="!playing"
                fill="currentColor"
                d="M15,10.001c0,0.299-0.305,0.514-0.305,0.514l-8.561,5.303C5.51,16.227,5,15.924,5,15.149V4.852c0-0.777,0.51-1.078,1.135-0.67l8.561,5.305C14.695,9.487,15,9.702,15,10.001z"
              />
              <path
                v-else
                fill="currentColor"
                d="M15,3h-2c-0.553,0-1,0.048-1,0.6v12.8c0,0.552,0.447,0.6,1,0.6h2c0.553,0,1-0.048,1-0.6V3.6C16,3.048,15.553,3,15,3z M7,3H5C4.447,3,4,3.048,4,3.6v12.8C4,16.952,4.447,17,5,17h2c0.553,0,1-0.048,1-0.6V3.6C8,3.048,7.553,3,7,3z"
              />
            </svg>
          </template>
        </music-player-btn>
        <music-player-btn icon-id="mute" icon-title="Mute" @mute="mute">
          <template v-slot:icon>
            <svg
              v-if="!muted"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5 text-white"
            >
              <path
                d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z"
              />
              <path
                d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 text-violet-400"
            >
              <path
                d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z"
              />
            </svg>
          </template>
        </music-player-btn>
        <music-player-btn
          icon-id="loop"
          icon-title="Loop"
          :btn-custom-class="[
            looping
              ? 'bg-violet-500 p-1 rounded-lg flex w-fit hover:bg-violet-300'
              : 'bg-violet-100 p-1 rounded-lg flex w-fit hover:bg-violet-300',
          ]"
          @loop="looping = !looping"
        >
          <template v-slot:icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5 text-white"
            >
              <path
                fill-rule="evenodd"
                d="M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 013.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 10-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 00-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 00-4.392-4.392 49.422 49.422 0 00-7.436 0A4.756 4.756 0 003.89 8.282c-.017.224-.033.447-.046.672a.75.75 0 101.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 013.01-3.01c1.19-.09 2.392-.135 3.605-.135zm-6.97 6.22a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 004.392 4.392 49.413 49.413 0 007.436 0 4.756 4.756 0 004.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 00-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 01-3.01 3.01 47.953 47.953 0 01-7.21 0 3.256 3.256 0 01-3.01-3.01 47.759 47.759 0 01-.1-1.759L6.97 15.53a.75.75 0 001.06-1.06l-3-3z"
                clip-rule="evenodd"
              />
            </svg>
          </template>
        </music-player-btn>
      </div>
    </div>
    <audio
      :loop="looping"
      ref="audio"
      :src="file"
      v-on:timeupdate="update"
      v-on:loadeddata="load"
      v-on:pause="playing = false"
      v-on:play="playing = true"
      preload="auto"
      style="display: none"
    ></audio>
  </div>
</template>
<script>
import MusicPlayerBtn from "~/components/landing/music_player/MusicPlayerBtn.vue";
export default {
  components: {
    MusicPlayerBtn,
  },
  props: {
    autoPlay: {
      type: Boolean,
      default: false,
    },
    file: {
      type: String,
      default: null,
    },
    loop: {
      type: Boolean,
      default: true,
    },
    fileTitle: {
      type: String,
      default: "No description",
    },
    fileName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      currentSeconds: 0,
      durationSeconds: 0,
      loaded: false,
      looping: false,
      playing: false,
      previousVolume: 35,
      showVolume: false,
      volume: 100,
    };
  },
  computed: {
    muted() {
      return this.volume / 100 === 0;
    },
    percentComplete() {
      return parseInt((this.currentSeconds / this.durationSeconds) * 100);
    },
    progressStyle() {
      return { width: `${this.percentComplete}%` };
    },
    volumeTitle() {
      return `Volume (${this.volume}%)`;
    },
  },
  filters: {
    convertTimeHHMMSS(val) {
      let hhmmss = new Date(val * 1000).toISOString().substr(11, 8);

      return hhmmss.indexOf("00:") === 0 ? hhmmss.substr(3) : hhmmss;
    },
  },
  watch: {
    playing(value) {
      if (value) {
        return this.$refs.audio.play();
      }
      this.$refs.audio.pause();
    },
    volume(value) {
      this.$refs.audio.volume = this.volume / 100;
    },
  },
  methods: {
    download() {
      this.stop();
      window.open(this.file, "download");
    },
    load() {
      if (this.$refs.audio.readyState >= 2) {
        this.loaded = true;
        this.durationSeconds = parseInt(this.$refs.audio.duration);

        return (this.playing = this.autoPlay);
      }

      throw new Error("Failed to load sound file.");
    },
    mute() {
      if (this.muted) {
        return (this.volume = this.previousVolume);
      }

      this.previousVolume = this.volume;
      this.volume = 0;
    },
    seek(e) {
      if (!this.loaded) return;

      const bounds = e.target.getBoundingClientRect();
      const seekPos = (e.clientX - bounds.left) / bounds.width;

      this.$refs.audio.currentTime = parseInt(
        this.$refs.audio.duration * seekPos
      );
    },
    stop() {
      this.playing = false;
      this.$refs.audio.currentTime = 0;
    },
    update(e) {
      this.currentSeconds = parseInt(this.$refs.audio.currentTime);
    },
  },
  created() {
    this.looping = this.loop;
  },
};
</script>
