(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{306:function(t,e,l){"use strict";l.r(e);l(34),l(60),l(135);var n={props:{sliderItem:{type:Array,required:!0},selectedPerson:{type:Object,required:!0},itemHeight:{type:Number,default:115},visibleItemCount:{type:Number,default:3}},data:function(){return{translateY:0,maxTranslateY:0}},mounted:function(){this.maxTranslateY=(this.sliderItem.length-this.visibleItemCount)*this.itemHeight},methods:{scroll:function(t){var e=this.translateY+t*this.itemHeight;e<=0&&e>=-this.maxTranslateY&&(this.translateY=e)}}},r=l(10),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col items-center justify-center"},[e("button",{staticClass:"p-1 rounded-lg w-fit mt-10 mb-5",class:[t.translateY?"bg-violet-400":"bg-gray-400"],on:{click:function(e){return t.scroll(1)}}},[e("base-icon",{attrs:{"icon-path":"Aroow","svg-class":"w-auto text-white rotate-180"}})],1),t._v(" "),e("div",{staticClass:"w-full relative overflow-hidden",style:{height:"".concat(t.itemHeight*t.visibleItemCount,"px")}},[e("div",{staticClass:"absolute flex flex-col top-0 left-0 w-full transition-all duration-300",style:{transform:"translateY("+t.translateY+"px)"}},t._l(t.sliderItem,(function(l){return e("div",{key:l.id,staticClass:"flex items-center justify-center p-3",style:{height:"".concat(t.itemHeight,"px")},on:{click:function(e){return t.$emit("show-person-idea",l)}}},[e("div",{staticClass:"w-full flex items-center h-full rounded-2xl p-5 cursor-pointer transition-colors duration-200",class:[l.id===t.selectedPerson.id?"drop-shadow-xl bg-white":"bg-violet-100"]},[e("img",{staticClass:"w-12 h-12 object-cover rounded-full",attrs:{src:"/personal-website/images/team/".concat(l.image),alt:""}}),t._v(" "),e("div",{staticClass:"flex flex-col ml-5"},[e("h1",{staticClass:"text-lg font-semibold capitalize"},[t._v("\n              "+t._s(l.title)+"\n            ")]),t._v(" "),e("h3",{staticClass:"text-sm"},[t._v("\n              "+t._s(l.description)+"\n            ")])])])])})),0)]),t._v(" "),e("button",{staticClass:"p-1 rounded-lg w-fit mb-10 mt-5",class:[-t.maxTranslateY===t.translateY?"bg-gray-400":"bg-violet-400"],on:{click:function(e){return t.scroll(-1)}}},[e("base-icon",{attrs:{"icon-path":"Aroow","svg-class":"w-auto text-white"}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseIcon:l(206).default})}}]);