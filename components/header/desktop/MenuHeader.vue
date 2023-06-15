<template>
  <div class="flex items-center gap-10">
    <nuxt-link
      v-for="headerItem in headerItems"
      class="font-semibold"
      :class="[
        routeName === headerItem.link
          ? 'text-violet-600 font-bold'
          : 'underline',
      ]"
      :key="headerItem.id"
      :to="{ name: headerItem.link }"
    >
      {{ headerItem.title }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
