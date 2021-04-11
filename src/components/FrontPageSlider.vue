<template>
  <div class="main-swiper">
    <div class="swiper-pagination"></div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide
        v-for="(page, pageIndex, key) in pageContent"
        :key="pageIndex"
        :id="`page-${page.id}`"
      >
        <!-- {{ page }} -->
        <div class="title-wrapper" data-swiper-parallax="100%">
          <div class="slide-content" ref="titleContent">
            <h1 v-html="page.title.rendered"></h1>

            <h3 v-for="(text, i) in toAr(page.acf.slider_sub_title)" :key="i">
              <div>{{ text }}</div>
            </h3>
          </div>
        </div>

        <div class="btn-wrapper" data-swiper-parallax="100%">
          <div
            ref="pBtn"
            class="portfolio-btn d-flex align-items-center justify-content-center text-center"
          >
            <div ref="hLine" class="h-line"></div>

            <router-link :to="pagesSlug[key]">
              <h5 class="m-0">Learn More</h5>
            </router-link>
          </div>
        </div>

        <div
          class="img-wrapper"
          data-swiper-parallax="60%"
          :data-swiper-parallax-opacity="0.5"
        >
          <img
            v-if="!page.acf.slider_video"
            :src="page.acf.slider_image.url"
            :alt="page.acf.slider_image.title"
          />

          <video
            v-if="page.acf.slider_video && page.acf.slider_video.url"
            autoplay
            muted
            loop
            playsinline
          >
            <source :src="page.acf.slider_video.url" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div
          class="text-block-wrapper d-none d-lg-block"
          data-swiper-parallax="80%"
        >
          <div class="text-block" v-if="page.acf.long_description">
            <div v-html="page.acf.long_description"></div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { bus } from '../main'
import {
  Swiper as SwiperClass,
  Pagination,
  Mousewheel,
  Autoplay,
  Parallax
} from 'swiper/core'
// import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

// // import { gsap } from 'gsap'
// // Swiper modules
SwiperClass.use([Pagination, Mousewheel, Autoplay, Parallax])

// const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass)

export default {
  props: ['pageContent'],
  data () {
    return {
      pagesSlug: ['', 'cindys-portfolio', 'tw-projects', '', '', ''],
      parallaxSwiperWidth: 0,
      swiperOptions: {
        parallax: true,
        speed: 800,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        on: {
          setTranslate: el => {},
          slideChange: el => {
            const tElement = this.$refs.titleContent
            bus.$emit('updateIndex', el.activeIndex)
            // const t2 = tElement[el.activeIndex].childNodes[1].childNodes

            // console.log(t2)

            this.$anime({
              targets: tElement[el.activeIndex].childNodes,
              translateY: [50, 0],
              opacity: [0, 1],
              easing: 'easeOutExpo',
              delay: this.$anime.stagger(100, { start: 500 }),
              duration: 800
            })

            this.$anime({
              targets: this.$refs.hLine[el.activeIndex],
              width: [200, 30],
              easing: 'easeOutExpo',
              delay: 800
            })

            this.$anime({
              targets: this.$refs.pBtn[el.activeIndex],
              opacity: [0, 1],
              translateY: [50, 0],
              duration: 1000,
              easing: 'easeOutExpo',
              delay: 800
            })
          }
        }
      }
    }
  },
  methods: {
    toAr (str) {
      if (str) {
        return str.split('<br />')
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    },
    parallaxAmount () {
      return this.parallaxSwiperWidth * 0.5
    }
  },
  components: {
    // Swiper,
    // SwiperSlide
  },
  mounted () {
    // console.log(this.swiper.width)
  }
}
</script>

<style lang="scss">
.main-swiper {
  width: 100vw;
  height: 100vh;
  .swiper-container {
    height: 100%;
  }
  .swiper-slide {
    overflow: hidden;
    h1 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.2rem;
      max-width: 300px;
    }
  }

  .img-wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    img {
      // position: absolute;
      // top: 0;
      // left: 0;
      object-fit: cover;
      // z-index: -1;
      object-position: 70%;
      width: 100%;
      height: 100%;
    }
    video {
      width: 100%;
      height: 100%;
      object-position: 70%;
      object-fit: cover;
    }
  }

  .title-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    .slide-content {
      position: absolute;
      top: 20%;
      left: 10%;
    }
  }
  .text-block-wrapper {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    padding: 50px 0;
    // transition: all 0.6s cubic-bezier(0.87, 0, 0.13, 1);;
    .text-block {
      position: absolute;
      height: calc(100% - 100px);
      // width: 30%;
      width: 450px;
      color: #fff;
      // top: 0;
      right: 50px;
      background: rgba($color: #000000, $alpha: 0.5);
      padding: 50px;
      text-align: left;
      overflow-y: scroll;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  .swiper-pagination {
    transform: rotate(90deg);
    transform-origin: 0% 100%;
    bottom: 300px;
    left: 22px;
    .swiper-pagination-bullet {
      width: 24px;
      height: 80px;
      transition: all 0.2s ease;
      background: transparent;
      opacity: 1;
      // padding: 1rem;
      padding-right: 15px;
      padding-left: 15px;
      margin-right: 20px;
      border-radius: 0;
      // border-top: 2px solid $navy;
      margin-bottom: 10px;
      border-right: 2px solid $navy;
      position: relative;
      &:after {
        content: "";
        display: block;
        height: 2px;
        background: $navy;
        position: absolute;
        right: 0;
        // transform: translateX(-10px);
        width: 10px;
      }
      // &:hover {
      //   height: 20px;
      // }
    }
    .swiper-pagination-bullet-active {
      background: $navy;
      height: 20px;
      width: 24px;
      pointer-events: none;
    }
  }

  .swiper-slide:first-child {
    .text-block-wrapper {
      display: none !important;
    }
  }

  .swiper-slide:nth-child(4) {
    .img-wrapper {
      img {
        object-position: 55% 70%;
      }
    }
  }

  .swiper-slide:nth-child(2),
  .swiper-slide:nth-child(3) {
    .btn-wrapper {
      display: block;
    }
  }

  .btn-wrapper {
    position: absolute;
    display: none;

    top: 50%;
    border-radius: 50%;
    left: 10%;
    z-index: 10;
    width: 100%;

    .h-line {
      content: "";
      position: absolute;
      width: 30px;
      height: 2px;
      background: $red;
      left: 100px;
      top: 50%;
    }
    .portfolio-btn {
      width: 80px;
      height: 80px;
      background: transparent;
      border: 2px solid $red;
      position: absolute;
      border-radius: 50%;
      cursor: pointer;
      transition: background 0.5s ease, color 0.5s ease;
      h5 {
        color: $red;
        font-weight: 500;
      }
      a {
        text-decoration: none;
      }
      &:hover {
        background: $red;
        h5 {
          color: #fff;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .swiper-slide {
      overflow: hidden;
      h1 {
        font-size: 2.5rem;
      }
      h3 {
        font-size: 1.5rem;
        max-width: 600px;
      }
    }

    .swiper-pagination {
      .swiper-pagination-bullet:hover {
        height: 120px;
      }
    }
  }
}
</style>
