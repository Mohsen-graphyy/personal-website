<template>
  <div>
    <div
      class="menu-icon"
      :class="{ clicked: isOpen }"
      @click="isOpen = !isOpen"
    >
      <span v-for="item in 3" :key="item" class="menu-line"></span>
    </div>

    <transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75 transform"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      {{ isOpen }}
      <div
        v-if="isOpen"
        class="flex flex-col gap-3 px-2 menu w-2/3 shadow-violet-600 shadow bg-white"
      >
        <nuxt-link
          v-for="headerItem in headerItems"
          class="font-semibold"
          :class="{
            'text-violet-600 font-bold': routeName === headerItem.link,
          }"
          :key="headerItem.id"
          :to="{ name: headerItem.link }"
        >
          <div class="rounded-xl border border-violet-500 px-5 py-2">
            {{ headerItem.title }}
          </div>
        </nuxt-link>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      headerItems: [
        {
          id: 1,
          title: "Home",
          link: "homePage",
        },
        {
          id: 2,
          title: "About Me",
          link: "aboutMe",
        },
        {
          id: 3,
          title: "Home",
          link: "home",
        },
        {
          id: 4,
          title: "Home",
          link: "home",
        },
      ],
      routeName: null,
    };
  },
  watch: {
    "$route.name"() {
      this.routeName = this.$route.name;
    },
  },
  mounted() {
    this.routeName = this.$route.name;
  },
};
</script>
