(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-93beaab8"],{"90d9":function(t,e,r){},b0c0:function(t,e,r){var o=r("83ab"),n=r("9bf2").f,s=Function.prototype,a=s.toString,i=/^\s*function ([^ (]*)/,c="name";o&&!(c in s)&&n(s,c,{configurable:!0,get:function(){try{return a.call(this).match(i)[1]}catch(t){return""}}})},c9e5:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticStyle:{position:"absolute"}},[t._v(t._s(this.$route.name))]),r("PortfolioSlides",{attrs:{projectsContent:t.projectsContent}}),r("router-link",{attrs:{to:{name:"Home"}}},[r("div",{staticClass:"back-btn"},[t._v("返回")])])],1)},n=[],s=(r("b0c0"),r("159b"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-portfolio"},[r("div",{staticClass:"covers"},t._l(t.projectsContent,(function(t){return r("figure",{key:t.id,ref:"coverImg",refInFor:!0,staticClass:"coverImg",style:"background: url('"+t.acf.project_hero.url+"') no-repeat center  / cover",attrs:{state:"none",coverKey:t.id}})})),0),r("swiper",{attrs:{options:t.swiperOptions}},t._l(t.projectsContent,(function(e,o){return r("swiper-slide",{key:e.id,ref:"slide",refInFor:!0,staticClass:"d-flex flex-column justify-content-center",attrs:{state:"none","data-id":o}},[r("img",{staticClass:"thumb",attrs:{src:e.acf.project_hero.sizes.large,alt:""}}),r("div",{staticClass:"project-excerpt p-5"},[r("h5",{staticClass:"mb-3"},[t._v(t._s(e.title.rendered))]),r("p",[t._v(t._s(e.acf.project_excerpt))])]),r("div",{staticClass:"read-more-btn"},[r("router-link",{attrs:{to:t.$route.path+"/"+e.id}},[r("span",{attrs:{"data-key":e.id},on:{mouseover:t.readmoreHover,mouseout:t.readmoreOut}},[t._v(" READ MORE ")])])],1)])})),1)],1)}),a=[],i={props:["projectsContent"],data:function(){return{swiperOptions:{slidesPerView:"auto",freeMode:!0}}},methods:{readmoreHover:function(t){var e=t.target.parentNode.parentNode.parentNode,r=t.target.getAttribute("data-key");document.querySelector('[coverkey="'.concat(r,'"]')).setAttribute("state","active"),this.$refs.slide.forEach((function(t){t.$el.setAttribute("state","hidden")})),e.setAttribute("state","active")},readmoreOut:function(){this.$refs.slide.forEach((function(t){t.$el.setAttribute("state","none")})),this.$refs.coverImg.forEach((function(t){t.setAttribute("state","none")}))}},mounted:function(){this.$refs.slide.forEach((function(t,e){t.$el.style="transition-delay: ".concat(.1*e,"s")}))}},c=i,l=(r("e61e"),r("2877")),u=Object(l["a"])(c,s,a,!1,null,null,null),f=u.exports,d={name:"Porfolio",data:function(){return{}},computed:{getAllProjects:function(){return this.$store.getters[this.$route.name]},projectsContent:function(){return this.getProjects()}},methods:{renameLocale:function(){"en"===this.$i18n.locale?this.locale="en_US":this.locale="zh_TW"},getProjects:function(){var t=this,e={};return this.renameLocale(),this.getAllProjects.forEach((function(r,o){r.polylang_current_lang===t.locale&&(e[o]=r)})),e}},components:{PortfolioSlides:f}},p=d,h=Object(l["a"])(p,o,n,!1,null,null,null);e["default"]=h.exports},e61e:function(t,e,r){"use strict";r("90d9")}}]);
//# sourceMappingURL=chunk-93beaab8.fba469e6.js.map