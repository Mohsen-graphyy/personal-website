<template>
  <div class="flex flex-col items-center justify-center">
    <button class="bg-violet-400 p-1 rounded-lg w-fit mt-10 mb-5">
      <base-icon icon-path="Aroow" svg-class="w-auto text-white rotate-180" />
    </button>
    <slider-container :slider-item="sliderItem"></slider-container>
    <button class="bg-violet-400 p-1 rounded-lg w-fit mb-10 mt-5">
      <base-icon icon-path="Aroow" svg-class="w-auto text-white" />
    </button>
  </div>
</template>

<script>
import SliderContainer from "~/components/slider/SliderContainer.vue";
export default {
  components: {
    SliderContainer,
  },
  data() {
    return {
      sliderItem: [
        {
          id: 1,
          title: "androo tit",
        },
        {
          id: 2,
          title: " bigiii",
        },
        {
          id: 3,
          title: "kochi tit",
        },
        {
          id: 4,
          title: "dakjdldf",
        },
        {
          id: 5,
          title: "kiriir",
        },
        {
          id: 6,
          title: "dasd tit",
        },
        {
          id: 7,
          title: "koon",
        },
      ],
    };
  },
};
</script>
