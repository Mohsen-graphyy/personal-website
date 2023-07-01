<template>
  <div class="flex flex-col">
    <h1 class="text-3xl flex items-center md:text-7xl font-semibold">
      Mohsen Piri
    </h1>
    <div class="flex mt-3 items-center">
      <div class="border-t border-gray-600 w-24"></div>
      <p class="pl-5 font-semibold text-xl text-gray-600">FrontEnd Developer</p>
    </div>
    <div class="mt-8 lg:mr-48">
      A responsible, punctual, and dedicated Frontend developer with over three
      years of professional experience in private and public companies.
    </div>
    <div class="mt-20">
      <base-button
        button-title="Download CV"
        :btn-class="btnClass"
        @clicked="cvDownloader"
      >
        <base-icon iconPath="Download" svg-class="w-4 h-4 ml-2" />
      </base-button>
    </div>
    <follow-me></follow-me>
  </div>
</template>

<script>
import FollowMe from "~/components/landing/FollowMe.vue";

export default {
  components: {
    FollowMe,
  },
  data() {
    return {
      btnClass:
        "px-5 py-2 border-violet-600 bg-violet-600 hover:text-violet-600 hover:bg-white text-white",
    };
  },
  methods: {
    cvDownloader() {
      const base = window.location;
      window.open(base + "file/mohsenPiri.pdf", "_blank");
    },
  },
};
</script>

<style></style>
