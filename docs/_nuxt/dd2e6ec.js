(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(t,e,o){"use strict";o.r(e);var r={props:{buttonTitle:{type:String,required:!0}}},n=o(22),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("button",{staticClass:"flex justify-between items-center p-2 rounded-lg border transition duration-100 border-violet-600 bg-violet-200 text-violet-600 hover:bg-violet-600 hover:text-white"},[e("p",{staticClass:"font-semibold"},[t._v(t._s(t.buttonTitle))]),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},188:function(t,e,o){var content=o(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(103).default)("44b5c47e",content,!0,{sourceMap:!1})},195:function(t,e,o){"use strict";var r={components:{DesktopHeader:o(196).default}},n=o(22),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"container mx-auto",class:t.$route.meta.fromRight?"from-right":""},[e("desktop-header"),t._v(" "),e("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},196:function(t,e,o){"use strict";o.r(e);var r=o(109),n={name:"DesktopHeader",components:{MenuHeader:o(197).default,BaseButton:r.default}},l=(o(272),o(22)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-between items-center py-7"},[t._m(0),t._v(" "),e("menu-header"),t._v(" "),e("base-button",{staticClass:"group",attrs:{"button-title":"Job Offer!"}},[e("svg",{staticClass:"w-6 h-6 ml-3 group-hover:text-yellow-300 group-hover:animate-bounce text-violet-600 rotate-45",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},[e("path",{attrs:{d:"M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd",d:"M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z","clip-rule":"evenodd"}})])])],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex items-center"},[e("img",{staticClass:"w-10",attrs:{src:"/images/perp-MP-logo.png",alt:"Mohsen piri"}}),t._v(" "),e("p",{staticClass:"text-violet-600 font-semibold pl-5 text-xl"},[t._v("Mohsen Piri")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseButton:o(109).default})},197:function(t,e,o){"use strict";o.r(e);o(269),o(40);var r={data:function(){return{headerItems:[{id:1,title:"Home",link:"homePage"},{id:2,title:"About Me",link:"aboutMe"},{id:3,title:"Home",link:"home"},{id:4,title:"Home",link:"home"}],routeName:null}},watch:{"$route.name":function(){this.routeName=this.$route.name}},mounted:function(){this.routeName=this.$route.name}},n=o(22),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex items-center gap-10"},t._l(t.headerItems,(function(o){return e("nuxt-link",{key:o.id,staticClass:"font-semibold",class:{"text-violet-600 font-bold":t.routeName===o.link},attrs:{to:{name:o.link}}},[t._v("\n    "+t._s(o.title)+"\n  ")])})),1)}),[],!1,null,null,null);e.default=component.exports},198:function(t,e,o){o(199),t.exports=o(200)},267:function(t,e,o){var content=o(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(103).default)("17bc9ac2",content,!0,{sourceMap:!1})},268:function(t,e,o){var r=o(102)((function(i){return i[1]}));r.push([t.i,'/*! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:""}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent;--tw-shadow:0 0 transparent;--tw-shadow-colored:0 0 transparent;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent;--tw-shadow:0 0 transparent;--tw-shadow-colored:0 0 transparent;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.static{position:static}.mx-auto{margin-left:auto;margin-right:auto}.ml-3{margin-left:.75rem}.mr-48{margin-right:12rem}.mt-20{margin-top:5rem}.mt-3{margin-top:.75rem}.mt-8{margin-top:2rem}.flex{display:flex}.h-6{height:1.5rem}.w-10{width:2.5rem}.w-24{width:6rem}.w-6{width:1.5rem}.basis-1\\/2{flex-basis:50%}.rotate-45{--tw-rotate:45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(45deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-45,.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.gap-10{gap:2.5rem}.rounded-lg{border-radius:.5rem}.border{border-width:1px}.border-t{border-top-width:1px}.border-gray-600{--tw-border-opacity:1;border-color:#4b5563;border-color:rgba(75,85,99,var(--tw-border-opacity))}.border-violet-600{--tw-border-opacity:1;border-color:#7c3aed;border-color:rgba(124,58,237,var(--tw-border-opacity))}.bg-violet-200{--tw-bg-opacity:1;background-color:#ddd6fe;background-color:rgba(221,214,254,var(--tw-bg-opacity))}.object-cover{-o-object-fit:cover;object-fit:cover}.p-2{padding:.5rem}.py-7{padding-bottom:1.75rem;padding-top:1.75rem}.pl-5{padding-left:1.25rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-7xl{font-size:4.5rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-bold{font-weight:700}.font-semibold{font-weight:600}.text-gray-600{--tw-text-opacity:1;color:#4b5563;color:rgba(75,85,99,var(--tw-text-opacity))}.text-violet-600{--tw-text-opacity:1;color:#7c3aed;color:rgba(124,58,237,var(--tw-text-opacity))}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-100{transition-duration:.1s}*{font-family:"Nunito Sans",sans-serif;overflow:hidden}.slide-enter-active,.slide-leave-active{transition:transform .5s}.slide-enter-to,.slide-leave{transform:translateX(0)}.slide-enter{transform:translateX(-100%)}.slide-enter.from-right,.slide-leave-to{transform:translateX(100%)}.slide-leave-to.from-right{transform:translateX(-100%)}.hover\\:bg-violet-600:hover{--tw-bg-opacity:1;background-color:#7c3aed;background-color:rgba(124,58,237,var(--tw-bg-opacity))}.hover\\:text-white:hover{--tw-text-opacity:1;color:#fff;color:rgba(255,255,255,var(--tw-text-opacity))}@keyframes bounce{0%,to{animation-timing-function:cubic-bezier(.8,0,1,1);transform:translateY(-25%)}50%{animation-timing-function:cubic-bezier(0,0,.2,1);transform:none}}.group:hover .group-hover\\:animate-bounce{animation:bounce 1s infinite}.group:hover .group-hover\\:text-yellow-300{--tw-text-opacity:1;color:#fde047;color:rgba(253,224,71,var(--tw-text-opacity))}',""]),r.locals={},t.exports=r},272:function(t,e,o){"use strict";o(188)},273:function(t,e,o){var r=o(102)((function(i){return i[1]}));r.push([t.i,"@keyframes bounce{0%,to{transform:translateY(0)}50%{transform:translateY(-5px)}}.animate-bounce:hover{animation:bounce .5s ease-in-out}",""]),r.locals={},t.exports=r}},[[198,5,1,6]]]);