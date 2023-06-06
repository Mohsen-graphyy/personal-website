<template>
  <div>
    <div
      class="menu-icon"
      :class="{ clicked: isOpen }"
      @click="isOpen = !isOpen"
    >
      <span v-for="item in 3" :key="item" class="menu-line"></span>
    </div>

    <transition name="fade">
      <div v-show="isOpen">
        <div class="w-2/3 flex flex-col gap-3 bg-violet-100 menu px-3 py-4">
          <nuxt-link
            v-for="headerItem in headerItems"
            class="font-semibold"
            :key="headerItem.id"
            :to="{ name: headerItem.link }"
          >
            <div
              class="flex px-5 py-2 border-b text-gray-500"
              :class="{
                'border-violet-500 font-bold': routeName === headerItem.link,
              }"
              @click="isOpen = !isOpen"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
                :class="{
                  'text-violet-600': routeName === headerItem.link,
                }"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  :d="headerItem.icon.d"
                />
              </svg>
              <p
                class="pl-3"
                :class="{ 'text-violet-600': routeName === headerItem.link }"
              >
                {{ headerItem.title }}
              </p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </transition>
    <base-shadow
      :is-show="isOpen"
      @click.native="isOpen = !isOpen"
    ></base-shadow>
  </div>
</template>

<script>
import BaseShadow from "~/components/base/BaseShadow.vue";
export default {
  components: {
    BaseShadow,
  },
  data() {
    return {
      isOpen: false,
      headerItems: [
        {
          id: 1,
          title: "Home",
          link: "homePage",
          icon: {
            d: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
          },
        },
        {
          id: 2,
          title: "About Me",
          link: "aboutMe",
          icon: {
            d: "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z",
          },
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
