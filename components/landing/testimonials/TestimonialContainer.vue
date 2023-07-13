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
          <a
            :href="selectedPerson.linkdin"
            target="_blank"
            rel="noopener noreferrer"
            class="text-md font-semibold capitalize"
          >
            {{ selectedPerson.title }}
          </a>
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
          idea: '"Mohsen Piri is an exceptional front-end developer who has greatly contributed to the success of our website. His attention to detail, problem-solving skills, and ability to work collaboratively with other team members make him a valuable asset to any project. Highly recommend!"',
          linkdin: "https://www.linkedin.com/in/alihajipoor/",
        },
        {
          id: 2,
          title: "ali fatemi",
          description: "Flutter Developer / Google Chrome extention",
          image: "alifatemi.jpg",
          idea: '"He’s a dedicated ambitous developer , who can get stuff done quickly I have enjoyed working with him on multiple projects"',
          linkdin: "https://www.linkedin.com/in/ali-fatemi-94566a163/",
        },
        {
          id: 3,
          title: "amir chavoshi",
          description: "Business Director / MaktabBusiness",
          image: "amirchavoshi.jpg",
          idea: `"There is no doubt about Mohsen's technical ability, but the other side of Mohsen's character that is wondering me is related to his soft skills and also his passion. I believe these characteristics and his passion for team collaboration will be his main strength to progress in his future career path. Wish you luck buddy!♥️"`,
          linkdin: "https://www.linkedin.com/in/amir-chavoshi-3773b3150/",
        },
        {
          id: 4,
          title: "Kaveh Karimi",
          description: "Frontend Leader / MaktabClass and MaktabBusiness",
          image: "kavehkarami.jpg",
          idea: `"Mohsen's front-end development skills are second to none. He consistently delivers exceptional work that exceeds expectations. He is always willing to go the extra mile to ensure that the final product is of the highest quality. I would highly recommend him to anyone looking for a talented and knowledgeable front-end developer." - Emily Williams, Marketing Director at GHI Corporation.`,
          linkdin: "https://www.linkedin.com/in/kaveh-karami/",
        },
        {
          id: 5,
          title: "Mahdi Taleghani",
          description:
            "Senior Software Engineer / Wp1click - Backsefid - Hoda accademy",
          image: "mahditaleghani.jpg",
          idea: `"Working with Mohsen was a pleasure. His attention to detail and ability to translate complex designs into responsive, user-friendly websites is remarkable. He is an excellent communicator who always keeps clients informed throughout the development process. I would highly recommend Mohsen to anyone looking for a skilled and reliable front-end developer." - Tom Davis, Owner of JKL Company.`,
          linkdin: "",
        },
        {
          id: 6,
          title: "matin onegh",
          description: "Backend Developer / MaktabClass and MaktabBusiness",
          image: "matin.jpg",
          idea: `"Mohsen is a highly skilled Nuxt.js developer who has been instrumental in the success of our web project. His ability to work collaboratively with our team and deliver high-quality code on time and on budget is truly impressive. He has a keen eye for detail and is always willing to go the extra mile to ensure that our application meets the highest standards. I would highly recommend Mohsen to anyone looking for a talented Nuxt.js developer." - Tom Johnson, Product Manager at GHI Corporation.`,
          linkdin: "",
        },
        {
          id: 7,
          title: "Mohadeseh",
          description: "HR Manager / Maktabkhooneh",
          image: "mohadese.jpg",
          idea: `"Mohsen is a fantastic Nuxt.js developer who has a deep understanding of the framework and its capabilities. His attention to detail and commitment to delivering high-quality code have been critical to the success of our web application. He is a great communicator who always kept us informed of his progress and provided valuable insights throughout the development process. I would highly recommend Mohsen to anyone looking for a skilled Nuxt.js developer." - Sarah Williams, CTO of JKL Company.`,
          linkdin: "",
        },
        {
          id: 8,
          title: "reza heydari",
          description:
            "Senior Software Engineer / MaktabClass and MaktabBusiness",
          image: "rezaheydari.jpg",
          idea: `"My colleague Mohsen and I work together at maktabclass.org and maktabBusiness (the organizational sales department of maktabkhaneh). One of the things I really like about Mohsen is that he is very curious about programming. Whenever he hears or sees even the slightest detail, he pursues it and learns from it. When faced with challenges, he also looks for solutions."`,
          linkdin: "https://www.linkedin.com/in/reza-heydari-12ba74173/",
        },
        {
          id: 9,
          title: "saba heydari doost",
          description: "Data Science Reseacher / Detection Research",
          image: "sabaheydaridoost.jpg",
          idea: `"Mohsen is a responsible developer, however, he isn't convinced of his abilities and he is always improving his skills. He used to be my teammate in some of university projects. He could handle different challenges and also he was very dutiful about deadlines."`,
          linkdin: "https://www.linkedin.com/in/saba-heydaridoost-3243a1205/",
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
