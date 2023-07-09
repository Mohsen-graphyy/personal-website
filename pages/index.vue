<template>
  <section>
    <div class="lg:px-28 md:px-10 px-5">
      <section
        class="pt-40 md:pt-40 flex flex-col md:flex-row justify-around items-center"
      >
        <info-section class="basis-1/2"></info-section>
        <div class="basis-1/2 mt-10 md:mt-0 overflow-hidden hover:rounded-2xl">
          <img
            class="object-cover hover:rounded-2xl rounded-2xl transform duration-200 hover:scale-150"
            src="/personal-website/images/MohsenPiri.jpg"
            alt="mohsen piri"
          />
        </div>
      </section>
    </div>
    <base-clip-fit-container
      class="mt-16"
      container-class="bg-violet-400 flex flex-col justify-between  gap-20 md:gap-10"
    >
      <!-- <p class="text-center font-bold text-5xl text-white">My Audio</p> -->
      <audio-content></audio-content>
      <div
        class="flex flex-col md:flex-row-reverse md:justify-between md:items-center md:gap-10"
      >
        <h2 class="text-slate-800 basis-1/2 text-justify">
          My interest in music and narration has been a part of me since
          childhood, and I have recorded several books in audio format so far. I
          thought it would be a good idea to take this opportunity and introduce
          myself in a voice recording :)
        </h2>
        <music-player class="md:w-1/2"></music-player>
      </div>
    </base-clip-fit-container>
    <testimonial-container />
  </section>
</template>
<router>
  {
    name: 'homePage'
  }
</router>
<script>
import InfoSection from "~/components/landing/InfoSection.vue";
import MusicPlayer from "~/components/landing/music_player/MusicPlayer.vue";
import AudioContent from "~/components/landing/AudioContent.vue";
import TestimonialContainer from "~/components/landing/testimonials/TestimonialContainer.vue";
export default {
  components: { InfoSection, MusicPlayer, AudioContent, TestimonialContainer },
  name: "IndexPage",
  head() {
    return {
      title: "Mohsen Piri Resume",
    };
  },
};
</script>
