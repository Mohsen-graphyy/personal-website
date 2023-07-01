(window.webpackJsonp=window.webpackJsonp||[]).push([[10,11,12],{294:function(t,e,o){"use strict";o.r(e);var l={props:{iconId:{type:String,required:!0},iconTitle:{type:String,required:!0},btnCustomClass:{type:String,default:"bg-violet-200 p-1 rounded-lg flex w-fit hover:bg-violet-300"}}},n=o(11),component=Object(n.a)(l,(function(){var t=this;return(0,t._self._c)("div",{staticClass:"transition duration-100 cursor-pointer",class:t.btnCustomClass,attrs:{id:t.iconId,title:t.iconTitle},on:{click:function(e){return e.preventDefault(),t.$emit("".concat(t.iconId))}}},[t._t("icon")],2)}),[],!1,null,null,null);e.default=component.exports},297:function(t,e,o){"use strict";o.r(e);var l={components:{MusicPlayerBtn:o(294).default},props:{autoPlay:{type:Boolean,default:!1},file:{type:String,default:null},loop:{type:Boolean,default:!0},fileTitle:{type:String,default:"No description"},fileName:{type:String,required:!0}},data:function(){return{currentSeconds:0,durationSeconds:0,loaded:!1,looping:!1,playing:!1,previousVolume:35,showVolume:!1,volume:100}},computed:{muted:function(){return this.volume/100==0},percentComplete:function(){return parseInt(this.currentSeconds/this.durationSeconds*100)},progressStyle:function(){return{width:"".concat(this.percentComplete,"%")}},volumeTitle:function(){return"Volume (".concat(this.volume,"%)")}},filters:{convertTimeHHMMSS:function(t){var e=new Date(1e3*t).toISOString().substr(11,8);return 0===e.indexOf("00:")?e.substr(3):e}},watch:{playing:function(t){if(t)return this.$refs.audio.play();this.$refs.audio.pause()},volume:function(t){this.$refs.audio.volume=this.volume/100}},methods:{download:function(){this.stop(),window.open(this.file,"download")},load:function(){if(this.$refs.audio.readyState>=2)return this.loaded=!0,this.durationSeconds=parseInt(this.$refs.audio.duration),this.playing=this.autoPlay;throw new Error("Failed to load sound file.")},mute:function(){if(this.muted)return this.volume=this.previousVolume;this.previousVolume=this.volume,this.volume=0},seek:function(t){if(this.loaded){var e=t.target.getBoundingClientRect(),o=(t.clientX-e.left)/e.width;this.$refs.audio.currentTime=parseInt(this.$refs.audio.duration*o)}},stop:function(){this.playing=!1,this.$refs.audio.currentTime=0},update:function(t){this.currentSeconds=parseInt(this.$refs.audio.currentTime)}},created:function(){this.looping=this.loop}},n=o(11),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex w-full"},[e("div",{staticClass:"flex flex-col w-full"},[e("div",{staticClass:"flex flex-col"},[e("p",{staticClass:"font-semibold"},[t._v(t._s(t.fileName))]),t._v(" "),e("p",{staticClass:"text-sm"},[t._v(t._s(t.fileTitle))])]),t._v(" "),e("div",{staticClass:"flex justify-center items-center gap-3 mt-3",attrs:{id:"seek"}},[e("div",{staticClass:"text-xs"},[t._v("\n        "+t._s(t._f("convertTimeHHMMSS")(this.currentSeconds))+"\n      ")]),t._v(" "),e("div",{staticClass:"relative bg-gray-200 h-1 w-full"},[e("div",{staticClass:"absolute left-0 top-0 h-full bottom-0 bg-violet-500 z-10",style:t.progressStyle}),t._v(" "),e("div",{staticClass:"absolute left-0 top-0 h-full bottom-0 w-full z-20 cursor-pointer",attrs:{title:"Seek"},on:{click:t.seek}})]),t._v(" "),e("div",{staticClass:"text-xs"},[e("div",{staticClass:"player-time-total"},[t._v("\n          "+t._s(t._f("convertTimeHHMMSS")(this.durationSeconds))+"\n        ")])])]),t._v(" "),e("div",{staticClass:"flex justify-center items-center gap-3 mt-3"},[e("music-player-btn",{attrs:{"icon-id":"download","icon-title":"Download"},on:{download:t.download},scopedSlots:t._u([{key:"icon",fn:function(){return[e("base-icon",{attrs:{"icon-path":"Download","svg-class":"w-5 h-5 text-white"}})]},proxy:!0}])}),t._v(" "),e("music-player-btn",{attrs:{"icon-id":"stop","icon-title":"Stop"},on:{stop:t.stop},scopedSlots:t._u([{key:"icon",fn:function(){return[e("svg",{staticClass:"w-5 h-5 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("path",{attrs:{fill:"currentColor",d:"M16,4.995v9.808C16,15.464,15.464,16,14.804,16H4.997C4.446,16,4,15.554,4,15.003V5.196C4,4.536,4.536,4,5.196,4h9.808C15.554,4,16,4.446,16,4.995z"}})])]},proxy:!0}])}),t._v(" "),e("music-player-btn",{attrs:{"icon-id":"play","btn-custom-class":" bg-violet-500 p-1 items-center justify-center flex hover:bg-violet-400 rounded-full w-fit ","icon-title":t.playing?"Pause":"Play"},on:{play:function(e){t.playing=!t.playing}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("svg",{staticClass:"w-7 h-7 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[t.playing?e("path",{attrs:{fill:"currentColor",d:"M15,3h-2c-0.553,0-1,0.048-1,0.6v12.8c0,0.552,0.447,0.6,1,0.6h2c0.553,0,1-0.048,1-0.6V3.6C16,3.048,15.553,3,15,3z M7,3H5C4.447,3,4,3.048,4,3.6v12.8C4,16.952,4.447,17,5,17h2c0.553,0,1-0.048,1-0.6V3.6C8,3.048,7.553,3,7,3z"}}):e("path",{attrs:{fill:"currentColor",d:"M15,10.001c0,0.299-0.305,0.514-0.305,0.514l-8.561,5.303C5.51,16.227,5,15.924,5,15.149V4.852c0-0.777,0.51-1.078,1.135-0.67l8.561,5.305C14.695,9.487,15,9.702,15,10.001z"}})])]},proxy:!0}])}),t._v(" "),e("music-player-btn",{attrs:{"icon-id":"mute","icon-title":"Mute"},on:{mute:t.mute},scopedSlots:t._u([{key:"icon",fn:function(){return[t.muted?e("svg",{staticClass:"w-6 h-6 text-violet-400",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},[e("path",{attrs:{d:"M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z"}})]):e("svg",{staticClass:"w-5 h-5 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},[e("path",{attrs:{d:"M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z"}}),t._v(" "),e("path",{attrs:{d:"M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z"}})])]},proxy:!0}])}),t._v(" "),e("music-player-btn",{attrs:{"icon-id":"loop","icon-title":"Loop","btn-custom-class":[t.looping?"bg-violet-500 p-1 rounded-lg flex w-fit hover:bg-violet-300":"bg-violet-100 p-1 rounded-lg flex w-fit hover:bg-violet-300"]},on:{loop:function(e){t.looping=!t.looping}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("svg",{staticClass:"w-5 h-5 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 013.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 10-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 00-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 00-4.392-4.392 49.422 49.422 0 00-7.436 0A4.756 4.756 0 003.89 8.282c-.017.224-.033.447-.046.672a.75.75 0 101.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 013.01-3.01c1.19-.09 2.392-.135 3.605-.135zm-6.97 6.22a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 004.392 4.392 49.413 49.413 0 007.436 0 4.756 4.756 0 004.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 00-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 01-3.01 3.01 47.953 47.953 0 01-7.21 0 3.256 3.256 0 01-3.01-3.01 47.759 47.759 0 01-.1-1.759L6.97 15.53a.75.75 0 001.06-1.06l-3-3z","clip-rule":"evenodd"}})])]},proxy:!0}])})],1)]),t._v(" "),e("audio",{ref:"audio",staticStyle:{display:"none"},attrs:{loop:t.looping,src:t.file,preload:"auto"},on:{timeupdate:t.update,loadeddata:t.load,pause:function(e){t.playing=!1},play:function(e){t.playing=!0}}})])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseIcon:o(203).default})},304:function(t,e,o){"use strict";o.r(e);var l={components:{MusicPlayerContainer:o(297).default}},n=o(11),component=Object(n.a)(l,(function(){var t=this._self._c;return t("div",{staticClass:"relative p-5 bg-white md:p-3 rounded-lg my-20 md:my-24 flex items-center"},[t("music-player-container",{attrs:{file:"file/StiveDemo.mp3","file-name":"Mohsen Description","file-title":"Description who am I ?"}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);