(window.webpackJsonp=window.webpackJsonp||[]).push([[17,8,9],{299:function(e,t,n){"use strict";n.r(t);var o={name:"BaseTitle",props:{title:{type:String,required:!0},iconPath:{type:String,required:!0},textClass:{type:String,default:"text-violet-500"}}},l=n(10),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-row items-center"},[t("div",{staticClass:"bg-violet-100 rounded-lg p-3"},[t("base-icon",{attrs:{"icon-path":e.iconPath,"svg-class":"w-5 h-5 text-violet-400"}})],1),e._v(" "),t("h1",{staticClass:"text-3xl font-bold ml-4",class:e.textClass},[e._v("\n    "+e._s(e.title)+"\n  ")])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BaseIcon:n(206).default})},305:function(e,t,n){"use strict";n.r(t);n(34),n(60),n(135);var o={props:{sliderItem:{type:Array,required:!0},selectedPerson:{type:Object,required:!0},itemHeight:{type:Number,default:115},visibleItemCount:{type:Number,default:3}},data:function(){return{translateY:0,maxTranslateY:0}},mounted:function(){this.maxTranslateY=(this.sliderItem.length-this.visibleItemCount)*this.itemHeight},methods:{scroll:function(e){var t=this.translateY+e*this.itemHeight;t<=0&&t>=-this.maxTranslateY&&(this.translateY=t)}}},l=n(10),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-col items-center justify-center"},[t("button",{staticClass:"p-1 rounded-lg w-fit mt-10 mb-5",class:[e.translateY?"bg-violet-400":"bg-gray-400"],on:{click:function(t){return e.scroll(1)}}},[t("base-icon",{attrs:{"icon-path":"Aroow","svg-class":"w-auto text-white rotate-180"}})],1),e._v(" "),t("div",{staticClass:"w-full relative overflow-hidden",style:{height:"".concat(e.itemHeight*e.visibleItemCount,"px")}},[t("div",{staticClass:"absolute flex flex-col top-0 left-0 w-full transition-all duration-300",style:{transform:"translateY("+e.translateY+"px)"}},e._l(e.sliderItem,(function(n){return t("div",{key:n.id,staticClass:"flex items-center justify-center p-3",style:{height:"".concat(e.itemHeight,"px")},on:{click:function(t){return e.$emit("show-person-idea",n)}}},[t("div",{staticClass:"w-full flex items-center h-full rounded-2xl p-5 cursor-pointer transition-colors duration-200",class:[n.id===e.selectedPerson.id?"drop-shadow-xl bg-white":"bg-violet-100"]},[t("img",{staticClass:"w-12 h-12 object-cover rounded-full",attrs:{src:"/personal-website/images/team/".concat(n.image),alt:""}}),e._v(" "),t("div",{staticClass:"flex flex-col ml-5"},[t("h1",{staticClass:"text-lg font-semibold capitalize"},[e._v("\n              "+e._s(n.title)+"\n            ")]),e._v(" "),t("h3",{staticClass:"text-sm"},[e._v("\n              "+e._s(n.description)+"\n            ")])])])])})),0)]),e._v(" "),t("button",{staticClass:"p-1 rounded-lg w-fit mb-10 mt-5",class:[-e.maxTranslateY===e.translateY?"bg-gray-400":"bg-violet-400"],on:{click:function(t){return e.scroll(-1)}}},[t("base-icon",{attrs:{"icon-path":"Aroow","svg-class":"w-auto text-white"}})],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BaseIcon:n(206).default})},313:function(e,t,n){"use strict";n.r(t);n(34),n(60),n(80);var o={data:function(){return{isShowIdea:!0,selectedPerson:{},sliderItem:[{id:1,title:"ali hajipour",description:"Product manager / MaktabClass and MaktabBusiness",image:"alihajipoor.jpg",idea:'"Mohsen Piri is an exceptional front-end developer who has greatly contributed to the success of our website. His attention to detail, problem-solving skills, and ability to work collaboratively with other team members make him a valuable asset to any project. Highly recommend!"',linkdin:"https://www.linkedin.com/in/alihajipoor/"},{id:2,title:"ali fatemi",description:"Flutter Developer / Google Chrome extention",image:"alifatemi.jpg",idea:'"He’s a dedicated ambitous developer , who can get stuff done quickly I have enjoyed working with him on multiple projects"',linkdin:"https://www.linkedin.com/in/ali-fatemi-94566a163/"},{id:3,title:"amir chavoshi",description:"Business Director / MaktabBusiness",image:"amirchavoshi.jpg",idea:"\"There is no doubt about Mohsen's technical ability, but the other side of Mohsen's character that is wondering me is related to his soft skills and also his passion. I believe these characteristics and his passion for team collaboration will be his main strength to progress in his future career path. Wish you luck buddy!♥️\"",linkdin:"https://www.linkedin.com/in/amir-chavoshi-3773b3150/"},{id:4,title:"Kaveh Karimi",description:"Frontend Leader / MaktabClass and MaktabBusiness",image:"kavehkarami.jpg",idea:'"Mohsen\'s front-end development skills are second to none. He consistently delivers exceptional work that exceeds expectations. He is always willing to go the extra mile to ensure that the final product is of the highest quality. I would highly recommend him to anyone looking for a talented and knowledgeable front-end developer." - Emily Williams, Marketing Director at GHI Corporation.',linkdin:"https://www.linkedin.com/in/kaveh-karami/"},{id:5,title:"Mahdi Taleghani",description:"Senior Software Engineer / Wp1click - Backsefid - Hoda accademy",image:"mahditaleghani.jpg",idea:'"Working with Mohsen was a pleasure. His attention to detail and ability to translate complex designs into responsive, user-friendly websites is remarkable. He is an excellent communicator who always keeps clients informed throughout the development process. I would highly recommend Mohsen to anyone looking for a skilled and reliable front-end developer." - Tom Davis, Owner of JKL Company.',linkdin:""},{id:6,title:"matin onegh",description:"Backend Developer / MaktabClass and MaktabBusiness",image:"matin.jpg",idea:'"Mohsen is a highly skilled Nuxt.js developer who has been instrumental in the success of our web project. His ability to work collaboratively with our team and deliver high-quality code on time and on budget is truly impressive. He has a keen eye for detail and is always willing to go the extra mile to ensure that our application meets the highest standards. I would highly recommend Mohsen to anyone looking for a talented Nuxt.js developer." - Tom Johnson, Product Manager at GHI Corporation.',linkdin:""},{id:7,title:"Mohadeseh",description:"HR Manager / Maktabkhooneh",image:"mohadese.jpg",idea:'"Mohsen is a fantastic Nuxt.js developer who has a deep understanding of the framework and its capabilities. His attention to detail and commitment to delivering high-quality code have been critical to the success of our web application. He is a great communicator who always kept us informed of his progress and provided valuable insights throughout the development process. I would highly recommend Mohsen to anyone looking for a skilled Nuxt.js developer." - Sarah Williams, CTO of JKL Company.',linkdin:""},{id:8,title:"reza heydari",description:"Senior Software Engineer / MaktabClass and MaktabBusiness",image:"rezaheydari.jpg",idea:'"My colleague Mohsen and I work together at maktabclass.org and maktabBusiness (the organizational sales department of maktabkhaneh). One of the things I really like about Mohsen is that he is very curious about programming. Whenever he hears or sees even the slightest detail, he pursues it and learns from it. When faced with challenges, he also looks for solutions."',linkdin:"https://www.linkedin.com/in/reza-heydari-12ba74173/"},{id:9,title:"saba heydari doost",description:"Data Science Reseacher / Detection Research",image:"sabaheydaridoost.jpg",idea:'"Mohsen is a responsible developer, however, he isn\'t convinced of his abilities and he is always improving his skills. He used to be my teammate in some of university projects. He could handle different challenges and also he was very dutiful about deadlines."',linkdin:"https://www.linkedin.com/in/saba-heydaridoost-3243a1205/"}]}},watch:{"selectedPerson.id":function(){var e=this;this.isShowIdea=!1,setTimeout((function(){e.isShowIdea=!0}),300)}},mounted:function(){this.selectedPerson=this.sliderItem[1]},methods:{showPersonIdea:function(e){this.selectedPerson=e}}},l=n(10),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"py-40 lg:px-28 md:px-10 px-5 flex flex-col"},[t("base-title",{attrs:{title:"Testimonials","icon-path":"Group"}}),e._v(" "),t("div",{staticClass:"flex flex-col-reverse md:flex-row md:items-center gap-10"},[t("base-vertical-slider",{staticClass:"w-full md:basis-1/2",attrs:{"slider-item":e.sliderItem,"selected-person":e.selectedPerson},on:{"show-person-idea":e.showPersonIdea}}),e._v(" "),t("transition",{attrs:{name:"fade"}},[e.isShowIdea?t("div",{staticClass:"bg-white rounded-xl md:basis-1/2 h-max p-10 mt-10 md:mt-0"},[t("a",{staticClass:"text-md font-semibold capitalize",attrs:{href:e.selectedPerson.linkdin,target:"_blank",rel:"noopener noreferrer"}},[e._v("\n          "+e._s(e.selectedPerson.title)+"\n        ")]),e._v(" "),t("h3",{staticClass:"text-sm text-violet-300"},[e._v("\n          "+e._s(e.selectedPerson.description)+"\n        ")]),e._v(" "),t("p",{staticClass:"text-md py-5"},[e._v("\n          "+e._s(e.selectedPerson.idea)+"\n        ")])]):e._e()])],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BaseTitle:n(299).default,BaseVerticalSlider:n(305).default})}}]);