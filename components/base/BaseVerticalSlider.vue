
<template>
  <div class="flex flex-col items-center justify-center">
    <button
      @click="scroll(1)"
      class="p-1 rounded-lg w-fit mt-10 mb-5"
      :class="[!translateY ? 'bg-gray-400' : 'bg-violet-400']"
    >
      <base-icon icon-path="Aroow" svg-class="w-auto text-white rotate-180" />
    </button>
    <div
      class="w-full relative overflow-hidden"
      :style="{
        height: `${itemHeight * visibleItemCount}px`,
      }"
    >
      <div
        class="absolute flex flex-col top-0 left-0 w-full transition-all duration-300"
        :style="{ transform: 'translateY(' + translateY + 'px)' }"
      >
        <div
          v-for="item in sliderItem"
          :key="item.id"
          class="flex items-center justify-center p-3"
          :style="{ height: `${itemHeight}px` }"
          @click="$emit('show-person-idea', item)"
        >
          <div
            class="w-full flex items-center h-full rounded-2xl p-5 cursor-pointer transition-colors duration-200"
            :class="[
              item.id === selectedPerson.id
                ? 'drop-shadow-xl bg-white'
                : 'bg-violet-100',
            ]"
          >
            <img
              class="w-12 h-12 object-cover rounded-full"
              :src="`/personal-website/images/team/${item.image}`"
              alt=""
            />
            <div class="flex flex-col ml-5">
              <h1 class="text-lg font-semibold capitalize">
                {{ item.title }}
              </h1>
              <h3 class="text-sm">
                {{ item.description }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      @click="scroll(-1)"
      class="p-1 rounded-lg w-fit mb-10 mt-5"
      :class="[-maxTranslateY === translateY ? 'bg-gray-400' : 'bg-violet-400']"
    >
      <base-icon icon-path="Aroow" svg-class="w-auto text-white" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    sliderItem: {
      type: Array,
      required: true,
    },
    selectedPerson: {
      type: Object,
      required: true,
    },
    itemHeight: {
      type: Number,
      default: 115,
    },
    visibleItemCount: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      translateY: 0,
      maxTranslateY: 0,
    };
  },
  mounted() {
    this.maxTranslateY =
      (this.sliderItem.length - this.visibleItemCount) * this.itemHeight;
  },
  methods: {
    scroll(direction) {
      const newTranslateY = this.translateY + direction * this.itemHeight;
      if (newTranslateY <= 0 && newTranslateY >= -this.maxTranslateY) {
        this.translateY = newTranslateY;
      }
    },
  },
};
</script>

