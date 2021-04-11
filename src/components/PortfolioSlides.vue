<template>
  <div class="page-portfolio">
    <div class="covers">
      <figure
        v-for="project in projectsContent"
        :key="project.id"
        ref="coverImg"
        state="none"
        :coverKey="project.id"
        class="coverImg"
        :style="`background: url('${project.acf.project_hero.url}') no-repeat center  / cover`"
      ></figure>
    </div>
    <swiper :options="swiperOptions">
      <swiper-slide
        ref="slide"
        class="d-flex flex-column justify-content-center"
        v-for="(project, i) in projectsContent"
        :key="project.id"
        state="none"
        :data-id="i"
      >
        <img class="thumb" :src="project.acf.project_hero.sizes.large" alt="" />
        <div class="project-excerpt p-5">
          <h5 class="mb-3">{{ project.title.rendered }}</h5>
          <p>{{ project.acf.project_excerpt }}</p>
        </div>
        <div class="read-more-btn">
          <router-link :to="`${$route.path}/${project.id}`">
            <span
              :data-key="project.id"
              @mouseover="readmoreHover"
              @mouseout="readmoreOut"
            >
              READ MORE
            </span>
          </router-link>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  props: ['projectsContent'],
  data () {
    return {
      swiperOptions: {
        // loop: true,
        // speed: 2500,
        slidesPerView: 'auto'
        // spaceBetween: 30,
        // centeredSlides: true
      }
    }
  },
  methods: {
    readmoreHover (event) {
      const targetSlide = event.target.parentNode.parentNode.parentNode
      const targetKey = event.target.getAttribute('data-key')
      document
        .querySelector(`[coverkey="${targetKey}"]`)
        .setAttribute('state', 'active')
      this.$refs.slide.forEach(element => {
        element.$el.setAttribute('state', 'hidden')
      })
      targetSlide.setAttribute('state', 'active')
    },
    readmoreOut () {
      this.$refs.slide.forEach(element => {
        element.$el.setAttribute('state', 'none')
      })
      this.$refs.coverImg.forEach(el => {
        el.setAttribute('state', 'none')
      })
    }
  },
  mounted () {
    this.$refs.slide.forEach((element, i) => {
      element.$el.style = `transition-delay: ${i * 0.1}s`
    })
  }
}
</script>

<style lang="scss">
.page-portfolio {
  .covers {
    height: 100vh;
    width: 100vw;
    position: absolute;
    overflow: hidden;
    figure {
      transition: all 0.5s ease;
    }
    [state="none"] {
      opacity: 0;
      transform: scale(1.2);
    }
    [state="active"] {
      transform: scale(1);
    }
  }
  .coverImg {
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
  }
  .swiper-container {
    height: 100vh;
    width: 100vw;
    .swiper-slide[state="active"] {
      background: rgba($color: #fff, $alpha: 0.9);
    }
  }
  .swiper-slide {
    width: 250px;
    border-right: 1px solid rgba($color: #ccc, $alpha: 0.2);
    transition: all 0.3s ease-out;
    transform: translate3d(0, 0, 0px);

    .thumb {
      width: 50%;
      height: 300px;
      object-fit: cover;
      object-position: left;
      transition: all 0.2s ease-out;
    }
  }

  .swiper-wrapper {
    [state="none"] {
      .thumb {
        width: 50%;
      }
    }
    [state="active"] {
      .thumb {
        width: 0;
      }
      transition-delay: 0s !important;
    }
    [state="hidden"] {
      opacity: 0;
      transition-delay: 0s !important;
      transform: translate3d(10px, -10px, -20px);
    }
  }
  .project-excerpt {
    min-height: 184.67px;
    h5 {
      font-weight: bolder;
      font-size: 1rem;
    }
    p {
      font-size: 12px;
      margin: 0;
    }
  }
  .read-more-btn {
    a {
      display: inline-block;
      text-decoration: none;
      span {
        font-size: 14px;
        background: $red;
        color: #fff;
        padding: 2px 1rem 3px;
        border: 1px solid $red;

        &:hover {
          background: transparent;
          border: 1px solid $red;
          color: $red;
        }
      }
    }
  }
}
</style>
