<template>
  <div class="py-40 lg:px-28 md:px-10 px-5 flex flex-col">
    <base-title title="Testimonials" icon-path="Group" />
    <div class="flex flex-col-reverse md:flex-row md:items-center gap-10">
      <base-vertical-slider
        class="w-full md:basis-1/2"
        :slider-item="sliderItem"
        :selected-person="selectedPerson"
        @show-person-idea="showPersonIdea"
      ></base-vertical-slider>
      <transition name="fade">
        <div
          v-if="isShowIdea"
          class="bg-white rounded-xl md:basis-1/2 h-max p-10 mt-10 md:mt-0"
        >
          <h1 class="text-md font-semibold capitalize">
            {{ selectedPerson.title }}
          </h1>
          <h3 class="text-sm text-violet-300">
            {{ selectedPerson.description }}
          </h3>
          <p class="text-md py-5">
            {{ selectedPerson.idea }}
          </p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowIdea: true,
      selectedPerson: {},
      sliderItem: [
        {
          id: 1,
          title: "ali hajipour",
          description: "Product manager / MaktabClass and MaktabBusiness",
          image: "alihajipoor.jpg",
          idea: '"Mohsen Piri is an exceptional front-end developer who has greatly contributed to the success of our website. His attention to detail, problem-solving skills, and ability to work collaboratively with other team members make him a valuable asset to any project. Highly recommend!" - John Smith, CEO of ABC Company.',
        },
        {
          id: 2,
          title: "ali fatemi",
          description: "Flutter Developer / Google Chrome extention",
          image: "alifatemi.jpg",
          idea: '"I had the pleasure of working with Mohsen on a web development project and was thoroughly impressed with his expertise in front-end development. He not only delivered high-quality work on time but also provided valuable insights and suggestions to improve user experience. Mohsen is a true professional and I would highly recommend him to anyone looking for a skilled front-end developer." - Sarah Johnson, Project Manager at XYZ Agency.',
        },
        {
          id: 3,
          title: "amir chavoshi",
          description: "Product Owner / MaktabBusiness",
          image: "amirchavoshi.jpg",
          idea: "'Mohsen is one of the most talented front-end developers I've had the pleasure of working with. His ability to take complex designs and turn them into functional, responsive websites is truly impressive. He is highly communicative, responsive, and easy to work with. I would definitely work with Mohsen again and recommend him to anyone looking for a top-notch front-end developer.' - Mark Thompson, UX Designer at DEF Corporation.",
        },
        {
          id: 4,
          title: "Kaveh Karimi",
          description: "Frontend Leader / MaktabClass and MaktabBusiness",
          image: "kavehkarami.jpg",
          idea: `"Mohsen's front-end development skills are second to none. He consistently delivers exceptional work that exceeds expectations. He is always willing to go the extra mile to ensure that the final product is of the highest quality. I would highly recommend him to anyone looking for a talented and knowledgeable front-end developer." - Emily Williams, Marketing Director at GHI Corporation.`,
        },
        {
          id: 5,
          title: "Mahdi Taleghani",
          description:
            "Senior Software Engineer / Wp1click - Backsefid - Hoda accademy",
          image: "mahditaleghani.jpg",
          idea: `"Working with Mohsen was a pleasure. His attention to detail and ability to translate complex designs into responsive, user-friendly websites is remarkable. He is an excellent communicator who always keeps clients informed throughout the development process. I would highly recommend Mohsen to anyone looking for a skilled and reliable front-end developer." - Tom Davis, Owner of JKL Company.`,
        },
        {
          id: 6,
          title: "matin onegh",
          description: "Backend Developer / MaktabClass and MaktabBusiness",
          image: "matin.jpg",
          idea: `"Mohsen is a highly skilled Nuxt.js developer who has been instrumental in the success of our web project. His ability to work collaboratively with our team and deliver high-quality code on time and on budget is truly impressive. He has a keen eye for detail and is always willing to go the extra mile to ensure that our application meets the highest standards. I would highly recommend Mohsen to anyone looking for a talented Nuxt.js developer." - Tom Johnson, Product Manager at GHI Corporation.`,
        },
        {
          id: 7,
          title: "Mohadeseh",
          description: "HR Manager / Maktabkhooneh",
          image: "mohadese.jpg",
          idea: `"Mohsen is a fantastic Nuxt.js developer who has a deep understanding of the framework and its capabilities. His attention to detail and commitment to delivering high-quality code have been critical to the success of our web application. He is a great communicator who always kept us informed of his progress and provided valuable insights throughout the development process. I would highly recommend Mohsen to anyone looking for a skilled Nuxt.js developer." - Sarah Williams, CTO of JKL Company.`,
        },
        {
          id: 8,
          title: "reza heydari",
          description:
            "Senior Software Engineer / MaktabClass and MaktabBusiness",
          image: "rezaheydari.jpg",
          idea: `"Working with Mohsen was a pleasure. His deep understanding of Nuxt.js and its ecosystem allowed him to quickly build complex features while maintaining our application's performance and stability. He is a great communicator who always kept us informed of his progress and provided valuable insights throughout the development process. I would highly recommend Mohsen to anyone looking for a skilled Nuxt.js developer." - John Doe, CEO of XYZ Agency.`,
        },
        {
          id: 9,
          title: "saba heydari doost",
          description: "Data Science Reseacher / Detection Research",
          image: "sabaheydaridoost.jpg",
          idea: `"Mohsen is a highly skilled Nuxt.js developer who has been instrumental in the success of our web application. His ability to create scalable and performant solutions is impressive, and his attention to detail ensures that our application meets the highest standards. I would highly recommend Mohsen to anyone looking for a talented Nuxt.js developer." - Susan Lee, CTO of ABC Company.`,
        },
      ],
    };
  },
  watch: {
    "selectedPerson.id"() {
      this.isShowIdea = false;
      setTimeout(() => {
        this.isShowIdea = true;
      }, 300);
    },
  },
  mounted() {
    this.selectedPerson = this.sliderItem[1];
  },
  methods: {
    showPersonIdea(newPerson) {
      this.selectedPerson = newPerson;
    },
  },
};
</script>
