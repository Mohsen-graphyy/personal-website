<template>
  <div class="flex flex-col items-center md:flex-row gap-3 w-full md:ml-5">
    <div class="flex flex-col">
      <h1 class="font-bold text-xl">{{ song.title }}</h1>
      <h3 class="text-gray-700">{{ song.artist }}</h3>
    </div>
    <div class="flex flex-row justify-center gap-3 items-center">
      <div
        class="cursor-not-allowed w-10 h-10 rotate-180 flex justify-center items-center cursor-pointer rounded-xl bg-gray-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6 text-white"
        >
          <path
            d="M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z"
          />
        </svg>
      </div>
      <div
        class="w-10 h-10 flex justify-center items-center cursor-pointer rounded-xl bg-violet-500"
        @click="togglePlay"
      >
        <svg
          v-show="!isPlaying"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6 text-white"
        >
          <path
            fill-rule="evenodd"
            d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
            clip-rule="evenodd"
          />
        </svg>
        <svg
          v-show="isPlaying"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6 text-white"
        >
          <path
            fill-rule="evenodd"
            d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div
        class="w-10 cursor-not-allowed h-10 flex justify-center items-center cursor-pointer rounded-xl bg-gray-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6 text-white"
        >
          <path
            d="M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z"
          />
        </svg>
      </div>
    </div>
    <div class="flex flex-row gap-2 items-center my-3 w-full">
      <div class="w-full h-3 bg-gray-100 rounded-md">
        <div
          class="h-full bg-gradient-to-r from-indigo-500 rounded-md relative"
          :style="{ width: progress + '%' }"
        >
          <span
            :class="{ 'left-0': progress === 0 }"
            class="w-5 h-5 -top-1 -right-3 bg-violet-500 absolute rounded-lg"
          ></span>
        </div>
      </div>
      <p>{{ currentTimeFormatted }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlaying: false,
      song: {
        title: "Introduction",
        artist: "Mohsen",
        url: `/personal-website/file/StiveDemo.mp3`,
      },
      audio: null,
      progress: 0,
      currentTime: 0,
    };
  },
  computed: {
    currentTimeFormatted() {
      const minutes = Math.floor(this.currentTime / 60);
      const seconds = Math.floor(this.currentTime % 60);
      return `${minutes < 10 ? "0" : ""}${minutes}:${
        seconds < 10 ? "0" : ""
      }${seconds}`;
    },
  },
  mounted() {
    this.audio = new Audio(this.song.url);
    this.audio.addEventListener("timeupdate", this.updateProgress);
  },
  destroyed() {
    this.togglePlay();
  },
  methods: {
    togglePlay() {
      if (this.isPlaying) {
        this.audio.pause();
      } else {
        this.audio.play();
      }
      this.isPlaying = !this.isPlaying;
    },
    updateProgress() {
      const { currentTime, duration } = this.audio;
      this.currentTime = currentTime;
      this.progress = (currentTime / duration) * 100;
    },
  },
};
</script>
