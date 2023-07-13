<template>
  <div class="lg:px-28 md:px-10 px-5">
    <div class="flex flex-col md:flex-row items-center pt-40 md:pt-24">
      <div class="basis-1/2">
        <base-title title="My Childhood" icon-path="Child" />
        <p class="mt-10">
          During my school years, my personality was always mixed with my
          inherent artistic talents. Almost all of my teachers would comment on
          my visual abilities. I started working with graphic design software
          like Photoshop at the age of 12 and gave my paintings a digital touch.
        </p>
      </div>
      <div class="basis-1/2">
        <img
          class=""
          src="/personal-website/images/aboutme/school.png"
          alt=""
        />
      </div>
    </div>
    <div class="flex flex-col md:flex-row-reverse items-center py-20 md:py-10">
      <div class="basis-1/2">
        <base-title title="My Teenage" icon-path="Child" />
        <p class="mt-10">
          During my teenage years, I made money by taking on graphic design
          projects. One day, while in high school, I became familiar with the
          fascinating field of programming with the help of a friend's advice,
          and I researched it further. I wrote my very first line of code and
          fell in love with it. My path to pursuing computer engineering
          academically involved passing through a scientific marathon of 70,000
          people, just so I could continue studying it at the university level.
        </p>
      </div>
      <div class="basis-1/2">
        <img
          class="mt-10 md:mt-0"
          src="/personal-website/images/aboutme/teenage.png"
          alt=""
        />
      </div>
    </div>
    <div class="flex flex-col md:flex-row items-center py-20 md:py-10">
      <div class="basis-1/2">
        <base-title title="University" icon-path="Child" />
        <p class="mt-10">
          After putting in a lot of hard work, I was able to become part of the
          top 2% of the entrance exam and began my studies in computer
          engineering at the best university in Iran, the University of Tehran.
          This part of my life helped me greatly in my career path, and
          alongside my studies, I discovered my talents and problem-solving
          abilities, which eventually led me to the field of front-end
          development.
        </p>
      </div>
      <div class="basis-1/2">
        <img
          class="mt-10 md:mt-0"
          src="/personal-website/images/aboutme/university.png"
          alt=""
        />
      </div>
    </div>
    <div class="flex flex-col md:flex-row-reverse items-center py-20 md:py-10">
      <div class="basis-1/2">
        <base-title title="Experience" icon-path="Child" />
        <p class="mt-10">
          Now, after gaining experience in various projects, I have been able to
          further develop my skills in web and front-end development and become
          an expert in the field. I love my job.
        </p>
      </div>
      <div class="basis-1/2">
        <img
          class="mt-10 md:mt-0"
          src="/personal-website/images/aboutme/work.png"
          alt=""
        />
      </div>
    </div>
    <div class="flex flex-col md:flex-row items-center py-20 md:py-10">
      <div class="basis-1/2">
        <base-title title="Job Offer" icon-path="Child" />
        <p class="mt-10">
          Thank you for being here with me so far. If you have a project and are
          looking for a creative and skilled person to develop it, just let me
          know . I'd be happy to collaborate with you :)
        </p>
        <base-button class="group mt-8" button-title="Job Offer!">
          <base-icon icon-path="RingToun" />
        </base-button>
      </div>
      <div class="basis-1/2">
        <img
          class="mt-10 md:mt-0"
          src="/personal-website/images/aboutme/job.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<router>
  {
    name: 'aboutMe'
  }
</router>
<script>
export default {
  head() {
    return {
      title: "About me",
    };
  },
};
</script>

<style></style>
